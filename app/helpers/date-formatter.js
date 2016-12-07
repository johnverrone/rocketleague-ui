import Ember from 'ember';
import moment from 'moment';

export function dateFormatter(params/*, hash*/) {
  let [format, date] = params;
  if (typeof(format) !== 'string') {
    format = 'MMMM DD, YYYY';
  }
  if (date === null) {
    date = Date.now();
  }
  return moment(date).format(format);
}

export default Ember.Helper.helper(dateFormatter);
