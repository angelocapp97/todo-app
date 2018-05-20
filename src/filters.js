
const filters = {
    searchText: '',
    hideCompleted: false
}

const getFilters = () => filters

const setFilters = ({ searchText, hideCompleted}) => {
    if (typeof searchText === 'string') {
        filters.searchText = searchText
        return
    }

    if (typeof hideCompleted === 'boolean') {
        filters.hideCompleted = hideCompleted
        return
    }
}

export { getFilters, setFilters }