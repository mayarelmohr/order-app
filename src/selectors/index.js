import { createSelector } from 'reselect';

const getRouter = state => state.currentRouter;
const getFilter = state => state.currentFilter;
const getProducts = state => state.products;

export default createSelector(
  [getRouter, getFilter, getProducts],
  (currentRouter, currentFilter, products) => {
    const { router, filter, cluster } = products;
    let filteredList = [];
    return products.items
      .filter(
        ({ properties: p }) =>
          p[router].indexOf(currentRouter) !== -1 &&
          p[filter].indexOf(currentFilter) !== -1
      )
      .reduce((groups, item) => {
        const clusterValue = item['properties'][cluster];
        filteredList[clusterValue] = filteredList[clusterValue] || [];
        filteredList[clusterValue].push(item);
        return filteredList;
      });
  }
);
