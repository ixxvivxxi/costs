import Component from '@ember/component';

export default Component.extend({
  parents: [],
  getParents: function () {
    var category = this.get('category'),
    categories = [];
    while (category.get('parent')) {
      categories.unshift(category);
      if (category.get('id') === this.get('lastId')) {
        break;
      }
      category = category.get('parent');
    }

    this.set('parents', categories);
  }.observes('category').on('init'),
});
