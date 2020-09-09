import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Card,
  Button,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
  ListGroup,
  ListGroupItem
} from 'reactstrap'

const RepoCard = ({ repos }) => {
  const [showCount, setShowCount] = useState(5)

  const more = () => setShowCount(showCount + 5)

  return (
    <Card>
      <CardBody>
        <CardTitle>
          Top {showCount} {repos.lang} repos
        </CardTitle>
        <CardSubtitle>
          {repos.totalCount.toLocaleString()} repos found
        </CardSubtitle>
        <CardText tag='div'>
          <ListGroup>
            {repos.items.slice(0, showCount).map(item => (
              <ListGroupItem
                key={item.id}
                tag='a'
                action
                href={item.htmlUrl}
                target='_blank'
              >
                {item.name}
              </ListGroupItem>
            ))}
          </ListGroup>
        </CardText>
        <Button onClick={more}>Show more</Button>
      </CardBody>
    </Card>
  )
}

RepoCard.propTypes = {
  repos: PropTypes.shape({
    lang: PropTypes.string,
    refs: PropTypes.array
  })
}

export default RepoCard
