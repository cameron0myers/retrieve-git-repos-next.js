import github from 'libs/github'

export const GET_TOP_REPOS = 'GET_TOP_REPOS'
export const GET_TOP_REPOS_SUCCESS = 'GET_TOP_REPOS_SUCCESS'

export const getTopRepos = ({ lang }) => (dispatch, getState) => {
  dispatch({
    type: GET_TOP_REPOS
  })

  const {
    app: { repos }
  } = getState()

  if (repos && repos.some(item => item.lang === lang)) {
    dispatch(onGetTopRepo(lang))
    return
  }

  return github
    .getTopRepos({ lang })
    .then(res => {
      dispatch(onGetTopRepo(lang, res))
    })
    .catch(() => {
      dispatch(onGetTopRepo(lang))
    })
}

const onGetTopRepo = (lang, payload = null) => {
  return {
    type: GET_TOP_REPOS_SUCCESS,
    lang,
    payload
  }
}
