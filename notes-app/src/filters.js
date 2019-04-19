const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

const getFilters = () => filters

const setFilters = (updates) => {
    if (typeof upddates.searchText === 'string')
        filters.searchText = updates.searchText


    if (typeof upddates.sortBy === 'string')
        filters.sortBy = updates.sortBy
}

export { getFilters, setFilters }