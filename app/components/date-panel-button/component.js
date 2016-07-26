import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'button',
  classNames: ['ui', 'button'],
  classNameBindings: ['active'],
  init() {
    this._super(...arguments);
    this.set('active', this.get('button.type') === this.get('type'));
  },
  active: false,
  click() {
    this.sendAction('setActiveType', this.get('button.type'));
    this.set('active', this.get('button.type') === this.get('type'));
  }

});
