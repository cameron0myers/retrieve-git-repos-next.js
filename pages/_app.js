import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'
import styledNormalize from 'styled-normalize'
import { withRouter } from 'next/router'
import App from 'next/app'

import Layout from 'components/Layout'
import RepoSearch from 'components/RepoSearch'
import theme from 'theme'
import withReduxStore from '_helper/withReduxStore'

const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
`

class MyApp extends App {
  render () {
    const { Component, pageProps, router, reduxStore } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Provider store={reduxStore}>
          <GlobalStyle />
          <Layout searchComponent={<RepoSearch />}>
            <Component router={router} {...pageProps} />
          </Layout>
        </Provider>
      </ThemeProvider>
    )
  }
}

export default withReduxStore(withRouter(MyApp))
