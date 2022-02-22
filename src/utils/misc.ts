import moment from 'moment';
/**
 * It checks if the object is empty or not. Return true if object is not empty.
 * @param {Object} obj - Object - The object to check.
 */
export const notEmpty = (obj: Object) => Object.keys(obj).length > 0;

/**
 * "Return true if the date is a weekday."
 * @param {Date} date - Date
 * @returns A boolean value.
 */
export const isWeekday = (date: Date) => {
  const day = date.getDay();
  return day !== 5 && day !== 6;
};

/**
 * Check if the given date is in the past.
 * @param {Date} date - The date to check against.
 * @returns A boolean value.
 */
export const isOverdue = (date: Date) => {
  const today = moment(new Date());
  return today.isAfter(moment(date));
};

/**
 * It takes a string and replaces any special characters with a backslash.
 * @param {string} value - The string to be escaped.
 */
export const escapeRegExp = (value: string) => value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
