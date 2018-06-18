const initialState = {
  loading: false,
  developers: [],
  filtered: [],
  selectedDeveloper: null
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.loading }
    case 'SET_DEVELOPERS':
      return { ...state, developers: action.developers}
    case 'SET_FILTERED':
      return { ...state, filtered: action.filtered}
    case 'FILTER_DEVELOPERS':
      const filtered = state.developers.filter(dev => dev.skills.includes(action.skill))
      return { ...state,  filtered}
    case 'SELECT_DEVELOPER':
      return { ...state,  selectedDeveloper: action.selectedDeveloper}
    default:
      return state
  } 
}

export const setLoading = loading => {
  return {
    type: 'SET_LOADING',
    loading,
  }
}

export const setDevelopers = developers => ({
  type: 'SET_DEVELOPERS',
  developers,
})

export const setFiltered = filtered => {
  return {
    type: 'SET_FILTERED',
    filtered,
  }
}

export const filterDevelopers = skill => ({
  type: 'FILTER_DEVELOPERS',
  skill,
})

export const selectDeveloper = selectedDeveloper => ({
  type: 'SELECT_DEVELOPER',
  selectedDeveloper,
})

