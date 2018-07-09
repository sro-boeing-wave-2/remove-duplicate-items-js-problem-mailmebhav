/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */
const removeDuplicateItems = (items) => {
  const result = Array.from(new Set(items));
  return result;
};

module.exports = removeDuplicateItems;
