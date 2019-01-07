import { createSelector } from 'reselect';

const getRouter = state => state.currentRouter;
const getFilter = state => state.currentFilter;
const getProducts = state => state.products;

/**
 * get the value of the descriptor received from the API
 *
 * It separated the string received into an array and check if it contains the ${} variable
 * and extracts its value from properties object
 *
 * @param {string}   descriptor  The string which has the template
 * @param {propObj}  Object      The object where data is extracted from
 * @return {computedDescriptor} The final computed string
 */

function computeDescriptorValue(descriptor, propObj) {
  let computedDescriptor = descriptor;
  const regex = /\${(.*?)\}/;
  descriptor.split(' ').forEach(val => {
    if (regex.exec(val) !== null) {
      const computedValue = regex.exec(val)[1];
      computedDescriptor = computedDescriptor.replace(regex.exec(val)[0], propObj[computedValue]);
    }
  });
  return computedDescriptor;
}

/**
 * Selector Function is used to map on state from reducer and memoize the result
 * It filters and maps the data according to currentRouter and currentFilter attr
 * It computes descriptor and assigns it to output object
 * It groups the results according to cluster attribute
 * It takes an array of input-selectors and a transform function as its arguments
 * @param {transformFunctions}   Array  The transform functions
 * @param {currentRouter}  String     The current selected value for router
 * @param {currentFilter}  String     The current selected value for filter
 * @param {cluster}  String     The current selected value for cluster
 * @param {descriptor}  String     The current selected value for descriptor
 * @return {Array}  Array of the visible products
 */
export default createSelector(
  [getRouter, getFilter, getProducts],
  (currentRouter, currentFilter, products) => {
    const { router, filter, cluster, descriptor } = products;
    const filteredList = {};
    return products.items
      .filter(
        ({ properties: p }) =>
          p[router].indexOf(currentRouter) !== -1 && p[filter].indexOf(currentFilter) !== -1
      )
      .reduce((groups, item) => {
        const clusterValue = item.properties[cluster];
        const itemWithDescriptor = Object.assign({}, item, {
          computer_descriptor: computeDescriptorValue(descriptor, item.properties),
        });
        filteredList[clusterValue] = filteredList[clusterValue] || [];
        filteredList[clusterValue] = [...filteredList[clusterValue], itemWithDescriptor];
        return filteredList;
      }, {});
  }
);
