import { createSelector } from 'reselect';

const getRouter = state => state.currentRouter;
const getFilter = state => state.currentFilter;
const getProducts = state => state.products;

export default createSelector(
  [getRouter, getFilter, getProducts],
  (currentRouter, currentFilter, products) => {
    const { router, filter, cluster, descriptor } = products;
    let filteredList = {};
    return products.items
      .filter(
        ({ properties: p }) =>
          p[router].indexOf(currentRouter) !== -1 &&
          p[filter].indexOf(currentFilter) !== -1
      )
      .reduce((groups, item) => {
        const clusterValue = item['properties'][cluster];
        item['computer_descriptor'] = computeDescriptorValue(
          descriptor,
          item['properties']
        );
        filteredList[clusterValue] = filteredList[clusterValue] || [];
        filteredList[clusterValue] = [...filteredList[clusterValue], item];
        return filteredList;
      }, {});
  }
);
function computeDescriptorValue(descriptor, propObj) {
  let computedDescriptor = descriptor;
  const regex = /\${(.*?)\}/;
  descriptor.split(' ').map(val => {
    const computedValue = regex.exec(val)[1];
    computedDescriptor = computedDescriptor.replace(
      regex.exec(val)[0],
      propObj[computedValue]
    );
  });
  return computedDescriptor;
}
