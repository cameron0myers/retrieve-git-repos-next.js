import { GET_TOP_REPOS, GET_TOP_REPOS_SUCCESS } from 'actions/repos'

export const initialAppState = {
  isLoading: false,
  repos: []
}

export default function (state = initialAppState, action) {
  switch (action.type) {
    case GET_TOP_REPOS:
      return { ...state, isLoading: true }

    case GET_TOP_REPOS_SUCCESS:
      if (action.payload === null) {
        return {
          ...state,
          isLoading: false
        }
      }

      const repos = state.repos
      return {
        ...state,
        isLoading: false,
        repos: [...repos, { ...action.payload, lang: action.lang }]
      }

    default:
      return state
  }
}
