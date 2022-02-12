/**
 * It checks if the object is empty or not.
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
