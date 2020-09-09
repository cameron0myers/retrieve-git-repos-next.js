import React from 'react'
import Immutable from 'immutable'
import { render } from 'test-utils'
import RepoCard from 'components/RepoCard'

describe('Components::RepoCard', () => {
  let props
  beforeEach(() => {
    props = {
      repos: Immutable.fromJS([
        {
          lang: 'lang',
          totalCount: 2,
          items: [
            {
              id: 1,
              name: 'repo 1',
              htmlUrl: 'url 1'
            },
            {
              id: 2,
              name: 'repo 2',
              htmlUrl: 'url 2'
            }
          ]
        }
      ])
    }
  })

  const setup = () => {
    const utils = render(<RepoCard {...props} />)
    return utils
  }

  it('renders all items', () => {
    const utils = setup()
    props.repos.get('items').forEach(repo => {
      expect(utils.getByText(repo.get('name'))).toHaveAttribute(
        'href',
        repo.get('htmlUrl')
      )
    })
  })
})
