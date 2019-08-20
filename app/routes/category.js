import { computed } from '@ember/object';
import { hash } from 'rsvp';
import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import moment from 'moment';

export default Route.extend({
  dateService: service('dates'),
  model(params) {
    return hash({
      category: this.store.findRecord('category', params.category_id, {reload: true}),
      cost: {sum: 0, date: moment().format('YYYY-MM-DD'), description: '' },
      children: this.store.query('category',{filter:{parent: params.category_id}}),
      new_category: {name: ""},
      dates: this.get('dateService').model(),
      costs: [],
      buttons: [{type: 'day', name: 'День'}, {type:'week', name: 'Неделя'}, {type:'month', name: 'Месяц'}, {type:'period', name: 'Период'}],
    });
  },
  setupController(controller, model) {
    controller.set('dates', model.dates);
    controller.set('new_category', model.new_category);
    controller.set('category', model.category);
    controller.set('children', model.children);
    controller.set('cost', model.cost);
    controller.set('costs', model.costs);
    controller.set('buttons', model.buttons);

    controller.set('currentCosts', this.currentCosts);
    controller.set('total', this.total);
    controller.set('pieData', this.pieData);
    controller.set('getRandomColor', this.getRandomColor);

    controller.set('isPeriod', controller.get('dates.type') === 'period');
    controller.set('isNotMain', parseInt(controller.category.id) !== 0);
    controller.set('category.sum', 0);
    this.categorySum(this.controller.category.id, this.controller.category);

    this.controller.children.forEach((category) => {
      category.set('sum', 0);
      this.getChildren(category, category);
    });

  },
  total: computed('costs.@each.sum', function() {
    var costs = this.get('costs');
    return costs.reduce(function(previousValue, cost) {
        return parseFloat(previousValue) + parseFloat(cost.get('sum'));
    },0);
  }),
  currentCosts: computed('costs.@each.sum', function() {
    var costs = this.get('costs');
    return costs.sortBy('date');
  }),
  pieData: computed('children.sum', function() {
    var children = this.get('children'),
    piedata = [];
    children.forEach((child) => {
      if (parseFloat(child.get('sum')) > 0) {
        piedata.push({value: child.get('sum'), label: child.get('name'), color: this.getRandomColor()});
      }
    });
    if (parseFloat(this.get('category.sum')) > 0) {
      piedata.push({value: this.get('category.sum'), label: this.get('category.name'), color: this.getRandomColor()});
    }
    return piedata;
  }),
  getChildren(category, mainCategory) {
    this.categorySum(category.get('id'), mainCategory);
    this.store.query('category', {filter: {parent: category.get('id')}}).then((children) => {
      children.forEach((child) => {
        this.getChildren(child, mainCategory);
      });
    });
  },
  categorySum(idcategory, mainCategory) {
    var dateStart = parseInt(moment(this.controller.get('dates.dateStart')).format('X'));
    var dateEnd = parseInt(moment(this.controller.get('dates.dateEnd')).format('X'));
    this.store.query('cost', {filter: {category: idcategory}}).then((costs) => {
      costs.forEach((cost) => {
        if (parseInt(cost.get('date')) >= dateStart && parseInt(cost.get('date')) <= dateEnd) {
          cost.set('mainCategory', mainCategory.id);
          this.controller.costs.pushObject(cost);
          mainCategory.set('sum', parseFloat(mainCategory.get('sum')) + parseFloat(cost.get('sum')));
        }
      });
    });
  },
  getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  },
  updateDatesModel() {
    this.controller.set('dates', this.get('dateService').model());
  },
  actions: {
    addCost() {
      if (this.get('controller.cost.sum') === "" || parseInt(this.get('controller.cost.sum')) === 0) {return;}
      this.store.createRecord('cost', {sum: this.get('controller.cost.sum'), date: moment(this.get('controller.cost.date')).format('X'), description: this.get('controller.cost.description'), category: this.controller.category } ).save().then(() => {
        this.refresh();
      });
    },
    addNewChildCategory() {
      if (this.get('controller.new_category.name') === '') {
        console.log(this.controller.get('allChildren'));
        return;
      } else {
        this.store.createRecord('category', {name: this.get('controller.new_category.name'), parent: this.controller.category}).save().then((new_category) => {
          var category = this.controller.category;
          category.get('children').pushObject(new_category);
          category.save();
          if (this.controller.category.id === "0") {
            this.send('reload');
          } else {
            this.refresh();
          }
        });
      }
    },
    changeDates() {
      this.get('dateService').setDate(this.controller.get('dates.dateStart'), this.controller.get('dates.dateEnd'));
      this.refresh();
    },
    nextDates() {
      this.get('dateService').next();
      this.refresh();
    },
    prevDates() {
      this.get('dateService').prev();
      this.refresh();
    },
    setActiveType(type) {
      this.get('dateService').setActiveType(type);
      this.refresh();
    },
  },

});
