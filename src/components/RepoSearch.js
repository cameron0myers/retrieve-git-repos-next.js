import React, { useState } from 'react'
import { connect } from 'react-redux'

import { getTopRepos } from 'actions/repos'
import { Form, Button, Input } from 'reactstrap'
const RepoSearch = ({ dispatch }) => {
  const [searchString, handleSearchStringChange] = useState('')

  const submit = e => {
    e.preventDefault()
    dispatch(getTopRepos({ lang: searchString }))
  }

  return (
    <Form inline>
      <Input
        value={searchString}
        onChange={e => handleSearchStringChange(e.target.value)}
        type='text'
        placeholder='Search'
        className='mr-sm-2'
      />
      <Button onClick={submit} outline color='success'>
        Search
      </Button>
    </Form>
  )
}

export default connect()(RepoSearch)
