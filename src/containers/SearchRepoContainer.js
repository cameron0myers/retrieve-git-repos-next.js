import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { CardColumns } from 'reactstrap'

import { getTopRepos } from 'actions/repos'
import RepoCard from 'components/RepoCard'

class SearchRepoContainer extends Component {
  async componentDidMount () {
    const { dispatch } = this.props
    await dispatch(getTopRepos({ lang: 'javascript' }))
    await dispatch(getTopRepos({ lang: 'ruby' }))
    await dispatch(getTopRepos({ lang: 'python' }))
    await dispatch(getTopRepos({ lang: 'c++' }))
    await dispatch(getTopRepos({ lang: 'c' }))
  }

  render () {
    const { repos } = this.props

    return (
      <CardColumns>
        {repos.map((repo, key) => (
          <RepoCard key={key} repos={repo} />
        ))}
      </CardColumns>
    )
  }
}

const mapStateToProps = ({ app: { isLoading, repos } }) => ({
  isLoading,
  repos
})

SearchRepoContainer.propTypes = {
  repos: PropTypes.array,
  isLoading: PropTypes.bool
}

export default connect(mapStateToProps)(SearchRepoContainer)
