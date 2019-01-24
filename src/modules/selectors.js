const getMenu = state => state.menu;

const getCategories = state => state.categories;

const getCategory = state => state.category;

const getFilter = state => state.filter;

const getFilteredMenuAndCategory = state => {
  const filter = getFilter(state).toLowerCase();
  const menu = getMenu(state);
  const category = getCategory(state);

  if (filter && category) {
    const byFilter = menu.filter(item =>
      item.name.toLowerCase().includes(filter),
    );
    return byFilter.filter(item => item.category === category);
  }

  if (category) return menu.filter(item => item.category === category);
  if (filter)
    return menu.filter(item => item.name.toLowerCase().includes(filter));

  return menu;
};

export {
  getMenu,
  getCategories,
  getCategory,
  getFilteredMenuAndCategory,
  getFilter,
};
