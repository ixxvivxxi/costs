import Service from '@ember/service';
import moment from 'moment';

export default Service.extend({
  dateStart: null,
  dateEnd: null,
  type: null,
  init() {
    this._super(...arguments);
    this.set('dateStart', moment().format('X'));
    this.set('dateEnd', moment().format('X'));
    this.set('type', 'day');
    this.setString();
  },
  model() {
    return {dateStart: moment(this.get('dateStart'), 'X').format('YYYY-MM-DD') , dateEnd: moment(this.get('dateEnd'), 'X').format('YYYY-MM-DD'), type: this.get('type'), string: this.get('string') };
  },
  setDate(dateStart, dateEnd) {
    this.set('dateStart', moment(dateStart, 'YYYY-MM-DD').format('X'));
    this.set('dateEnd', moment(dateEnd, 'YYYY-MM-DD').format('X'));
    this.setString();
  },
  next() {
    if (this.type === 'month') {
      this.set('dateStart', moment(moment(this.get('dateStart'), 'X')).add(1, 'M'));
      this.set('dateEnd', moment(this.get('dateStart'), 'X').add(1, 'M').add(-1, 'd'));
    } else {
      var diff = moment(this.get('dateEnd'), 'X').add(1, 'd').diff(moment(this.get('dateStart'), 'X'));
      this.set('dateStart', moment(moment(this.get('dateStart'), 'X')).add(diff, 'ms'));
      this.set('dateEnd', moment(moment(this.get('dateEnd'), 'X')).add(diff, 'ms'));
    }
    this.setString();
  },
  prev() {
    if (this.type === 'month') {
      this.set('dateStart', moment(moment(this.get('dateStart'), 'X')).add(-1, 'M'));
      this.set('dateEnd', moment(this.get('dateStart'), 'X').add(1, 'M').add(-1, 'd'));
    } else {
      var diff = moment(this.get('dateEnd'), 'X').add(1, 'd').diff(moment(this.get('dateStart'), 'X'));
      this.set('dateStart', moment(moment(this.get('dateStart'), 'X')).add(-diff, 'ms'));
      this.set('dateEnd', moment(moment(this.get('dateEnd'), 'X')).add(-diff, 'ms'));
    }
    this.setString();
  },
  setActiveType(type) {
    this.set('type', type);
    this.set('dateStart', moment().format('X'));
    if (this.type === 'day') {
      this.set('dateEnd', this.get('dateStart'));
    } else if (this.type === 'week') {
      this.set('dateStart', moment(this.get('dateStart'), 'X').weekday(0).format('X'));
      this.set('dateEnd', moment(this.get('dateStart'), 'X').add(6, 'd'));
    } else if (this.type === 'month') {
      this.set('dateStart', moment(this.get('dateStart'), 'X').date(1).format('X'));
      this.set('dateEnd', moment(this.get('dateStart'), 'X').add(1, 'M').add(-1, 'd'));
    } else {
      this.set('string', moment(this.get('dateStart'), 'X').format('DD.MM.YYYY'));
    }
    this.setString();
  },
  setString() {
    if (this.type === 'week') {
      this.set('string', moment(this.get('dateStart'), 'X').format('DD.MM.YYYY') + " - " + moment(this.get('dateEnd'), 'X').format('DD.MM.YYYY'));
    } else if (this.type === 'month') {
      this.set('string', moment(this.get('dateStart'), 'X').format('MMMM YYYY'));
    } else {
      this.set('string', moment(this.get('dateStart'), 'X').format('DD.MM.YYYY'));
    }
  }
});
