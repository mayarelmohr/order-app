import { createSelector } from 'reselect';

const getRouter = state => state.currentRouter;
const getFilter = state => state.currentFilter;
const getProducts = state => state.products;

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
