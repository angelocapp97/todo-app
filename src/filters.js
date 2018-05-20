
const filters = {
    searchText: '',
    hideCompleted: false
}

const getFilters = () => {
    return filters
}

const setFilters = (updates) => {
    if (typeof updates.searchText === 'string') {
        filters.searchText = updates.searchText
        return
    }

    if (typeof updates.hideCompleted === 'boolean') {
        filters.hideCompleted = updates.hideCompleted
        return
    }
}

export { getFilters, setFilters }