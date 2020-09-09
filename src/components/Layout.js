import React, { useState, Fragment } from 'react'
import styled from 'styled-components'
import Head from 'next/head'
import NextLink from 'next/link'

import Package from '../../package.json'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap'

const NavItemStyled = styled(NavItem)`
  cursor: pointer;
`
const NavbarBrandStyled = styled(NavbarBrand)`
  cursor: pointer;
`
const langArray = [
  'C',
  'C++',
  'C#',
  'HTML',
  'Java',
  'JavaScript',
  'PHP',
  'Python',
  'Ruby',
  'Swift',
  'XML'
]

const Layout = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <React.Fragment>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{props.title || 'Next.js Starter Project'}</title>
        <link
          rel='stylesheet'
          href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
          integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
          crossOrigin='anonymous'
        />
        <script
          src='https://code.jquery.com/jquery-3.3.1.slim.min.js'
          integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo'
          crossOrigin='anonymous'
        />
        <script
          src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js'
          integrity='sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1'
          crossOrigin='anonymous'
        />
        <script
          src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js'
          integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM'
          crossOrigin='anonymous'
        />
        <script src='https://cdn.polyfill.io/v2/polyfill.min.js' />
      </Head>
      <Navbar color='light' light expand='md'>
        <NavbarBrandStyled tag='div'>
          <NextLink href='/'>
            <NavLink>
              <img className={'icon'} src='/static/next-logo.png' />
              <span className='icon ion-md-home mr-1' /> {Package.name}
            </NavLink>
          </NextLink>
        </NavbarBrandStyled>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='mr-auto' navbar>
            <NavItemStyled>
              <NextLink href='/'>
                <NavLink>Home</NavLink>
              </NextLink>
            </NavItemStyled>
            <NavItemStyled>
              <NextLink href='/about'>
                <NavLink>About</NavLink>
              </NextLink>
            </NavItemStyled>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Languages
              </DropdownToggle>
              <DropdownMenu right>
                {langArray.map((item, key) => (
                  <Fragment key={key}>
                    <DropdownItem divider />
                    <DropdownItem>
                      <NextLink href={{ pathname: 'spec', query: { lang: item.toLowerCase() } }}>
                        <NavLink>{item}</NavLink>
                      </NextLink>
                    </DropdownItem>
                  </Fragment>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
        {props.searchComponent}
        <style jsx>{`
          img.icon {
            width: 30px;
          }
        `}</style>
      </Navbar>
      <MainBody
        navmenu={props.navmenu}
        fluid={props.fluid}
        container={props.container}
      >
        {props.children}
      </MainBody>
      <Container fluid={props.fluid}>
        <hr className='mt-3' />
        <p className='text-muted small'>
          <NextLink href='/'>
            <a className='text-muted font-weight-bold'>
              <span className='icon ion-logo-github' /> {Package.name}{' '}
              {Package.version}
            </a>
          </NextLink>
          <span> built with </span>
          <a
            href='https://github.com/zeit/next.js'
            className='text-muted font-weight-bold'
          >
            Next.js {Package.dependencies.next}
          </a>
          <span> &amp; </span>
          <a
            href='https://github.com/zeit/next.js'
            className='text-muted font-weight-bold'
          >
            React {Package.dependencies.react}
          </a>
          .<span className='ml-2'>&copy; {new Date().getYear() + 1900}.</span>
        </p>
      </Container>
    </React.Fragment>
  )
}

export class MainBody extends React.Component {
  render () {
    if (this.props.container === false) {
      return <React.Fragment>{this.props.children}</React.Fragment>
    } else if (this.props.navmenu === false) {
      return (
        <Container fluid={this.props.fluid} style={{ marginTop: '1em' }}>
          {this.props.children}
        </Container>
      )
    } else {
      return (
        <Container fluid={this.props.fluid} style={{ marginTop: '1em' }}>
          <Row>
            <Col xs='12' md='9' lg='10'>
              {this.props.children}
            </Col>
          </Row>
        </Container>
      )
    }
  }
}

export default Layout
