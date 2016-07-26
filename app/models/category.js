import Model from 'ember-data/model';
import attr from 'ember-data/attr';

import { hasMany, belongsTo } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  children: hasMany('category', {inverse: 'parent'}),
  parent: belongsTo('category', {inverse: 'children'})
});
