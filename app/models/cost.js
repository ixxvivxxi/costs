import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  category: belongsTo('category'),
  sum: attr('string'),
  date: attr('string'),
  description: attr('string')
});
