
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

