import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { getTopRepos } from 'actions/repos'
import RepoCard from 'components/RepoCard'

const SpecLangRepoContainer = ({
  isLoading,
  repos,
  query: { lang },
  dispatch
}) => {
  const getSpecLangRepo = async () => {
    await dispatch(getTopRepos({ lang: lang || 'javascript' }))
  }

  useEffect(() => {
    getSpecLangRepo()
  }, [lang])

  const specRepos = repos.find((repo) => repo.lang === lang)

  if (isLoading || !specRepos) {
    return <div>Loading...</div>
  }

  return <RepoCard repos={specRepos} />
}

SpecLangRepoContainer.getInitialProps = ({ query }) => {
  return { query }
}

const mapStateToProps = ({ app: { isLoading, repos } }) => ({
  isLoading,
  repos
})

SpecLangRepoContainer.propTypes = {
  repos: PropTypes.array,
  isLoading: PropTypes.bool,
  lang: PropTypes.string,
  dispatch: PropTypes.func
}

export default connect(mapStateToProps)(SpecLangRepoContainer)
