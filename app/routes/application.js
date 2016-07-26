import Ember from 'ember';

export default Ember.Route.extend({
  moment: Ember.inject.service(),
  model() {
    return this.store.query('category', {filter: {parent: '0'}});
  },
  beforeModel() {
    this.get('moment').changeLocale('ru');
    this.store.findRecord('category', 0).catch(() => {
      this.store.recordForId('category', 0).unloadRecord();
      this.store.createRecord('category', {id: '0', name: 'Все', parent: null }).save().then(() => {
        this.refresh();
        //this.transitionTo('category', 0);
      });

    });
    this.transitionTo('category', 0);
  },
  actions: {
    reload() {
      this.refresh();
    },
    importData: function() {
      this.store.importData('{"data":[{"id":"t9b6iffg","attributes":{"sum":"54","date":"1468789200","description":"А100"},"relationships":{"category":{"data":{"type":"categories","id":"afa2simt"}}},"type":"costs"},{"id":"a8von05h","attributes":{"sum":"45","date":"1467752400","description":"Лукойл"},"relationships":{"category":{"data":{"type":"categories","id":"afa2simt"}}},"type":"costs"},{"id":"tab4p3ib","attributes":{"sum":"55","date":"1466888400","description":"А100"},"relationships":{"category":{"data":{"type":"categories","id":"afa2simt"}}},"type":"costs"},{"id":"e3tah1bh","attributes":{"sum":"100","date":"1468443600","description":"Подвеска"},"relationships":{"category":{"data":{"type":"categories","id":"c7fupfr3"}}},"type":"costs"},{"id":"fu7sth10","attributes":{"sum":"95","date":"1469480400","description":"Рублевский"},"relationships":{"category":{"data":{"type":"categories","id":"l1bl0j26"}}},"type":"costs"},{"id":"jin82cc3","attributes":{"sum":"10","date":"1466197200","description":"Рубашка"},"relationships":{"category":{"data":{"type":"categories","id":"96k4l7d8"}}},"type":"costs"},{"id":"k7f49hef","attributes":{"sum":"10","date":"1469221200","description":"Соседи"},"relationships":{"category":{"data":{"type":"categories","id":"l1bl0j26"}}},"type":"costs"},{"id":"s6ir88jp","attributes":{"sum":"18","date":"1467666000","description":"Алми"},"relationships":{"category":{"data":{"type":"categories","id":"l1bl0j26"}}},"type":"costs"},{"id":"g1u4mj2j","attributes":{"sum":"30","date":"1467061200","description":""},"relationships":{"category":{"data":{"type":"categories","id":"l1bl0j26"}}},"type":"costs"},{"id":"fef4tcl1","attributes":{"sum":"25","date":"1468616400","description":"хот-дог"},"relationships":{"category":{"data":{"type":"categories","id":"8oicmbkj"}}},"type":"costs"},{"id":"f87puohm","attributes":{"sum":"9","date":"1468098000","description":""},"relationships":{"category":{"data":{"type":"categories","id":"l1bl0j26"}}},"type":"costs"},{"id":"jct9p4g0","attributes":{"sum":"20","date":"1468011600","description":""},"relationships":{"category":{"data":{"type":"categories","id":"l1bl0j26"}}},"type":"costs"},{"id":"ci94audq","attributes":{"sum":"25","date":"1469480400","description":"Штаны"},"relationships":{"category":{"data":{"type":"categories","id":"96k4l7d8"}}},"type":"costs"},{"id":"plgumch6","attributes":{"sum":"30","date":"1468616400","description":"Пиво с друзьями"},"relationships":{"category":{"data":{"type":"categories","id":"7ba00fm3"}}},"type":"costs"},{"id":"7ntt4212","attributes":{"sum":"10","date":"1468616400","description":""},"relationships":{"category":{"data":{"type":"categories","id":"9no943cb"}}},"type":"costs"},{"id":"0","attributes":{"name":"Все"},"relationships":{"children":{"data":[{"type":"categories","id":"since4lv"},{"type":"categories","id":"l1bl0j26"},{"type":"categories","id":"96k4l7d8"},{"type":"categories","id":"lt9hl1ue"},{"type":"categories","id":"udtva7sf"}]},"parent":{"data":null}},"type":"categories"},{"id":"since4lv","attributes":{"name":"Авто"},"relationships":{"children":{"data":[{"type":"categories","id":"afa2simt"},{"type":"categories","id":"35g6k4q7"},{"type":"categories","id":"c7fupfr3"}]},"parent":{"data":{"type":"categories","id":"0"}}},"type":"categories"},{"id":"l1bl0j26","attributes":{"name":"Еда"},"relationships":{"children":{"data":[{"type":"categories","id":"8oicmbkj"}]},"parent":{"data":{"type":"categories","id":"0"}}},"type":"categories"},{"id":"96k4l7d8","attributes":{"name":"Одежда"},"relationships":{"children":{"data":[]},"parent":{"data":{"type":"categories","id":"0"}}},"type":"categories"},{"id":"lt9hl1ue","attributes":{"name":"Развлечения"},"relationships":{"children":{"data":[{"type":"categories","id":"7ba00fm3"}]},"parent":{"data":{"type":"categories","id":"0"}}},"type":"categories"},{"id":"udtva7sf","attributes":{"name":"Транспорт"},"relationships":{"children":{"data":[{"type":"categories","id":"9no943cb"}]},"parent":{"data":{"type":"categories","id":"0"}}},"type":"categories"},{"id":"9no943cb","attributes":{"name":"Метро"},"relationships":{"children":{"data":[]},"parent":{"data":{"type":"categories","id":"udtva7sf"}}},"type":"categories"},{"id":"afa2simt","attributes":{"name":"Топливо"},"relationships":{"children":{"data":[]},"parent":{"data":{"type":"categories","id":"since4lv"}}},"type":"categories"},{"id":"35g6k4q7","attributes":{"name":"Обслуживание"},"relationships":{"children":{"data":[]},"parent":{"data":{"type":"categories","id":"since4lv"}}},"type":"categories"},{"id":"c7fupfr3","attributes":{"name":"Ремонт"},"relationships":{"children":{"data":[]},"parent":{"data":{"type":"categories","id":"since4lv"}}},"type":"categories"},{"id":"7ba00fm3","attributes":{"name":"Кафе"},"relationships":{"children":{"data":[]},"parent":{"data":{"type":"categories","id":"lt9hl1ue"}}},"type":"categories"},{"id":"8oicmbkj","attributes":{"name":"Фастфуд"},"relationships":{"children":{"data":[]},"parent":{"data":{"type":"categories","id":"l1bl0j26"}}},"type":"categories"}]}');
      this.refresh();
    },

  }

});
