import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { RouteWithLayout } from '../components'

const AuthRouteWithLayout = (props) => {
  const {
    authenticated,
    setAuthenticated,
    render,
    component,
    location,
    layout,
    user,
    logout,
    title,
    pageRouteTabItems,
    currPageRouteTabIdx,
    ...rest
  } = props

  return (
    <Route
      {...rest}
      render={props =>
        authenticated
          ? (render
            ? render(props)
            : <RouteWithLayout
              component={component}
              layout={layout}
              user={user}
              logout={logout}
              authenticated={authenticated}
              setAuthenticated={setAuthenticated}
              title={title}
              pageRouteTabItems={pageRouteTabItems}
              currPageRouteTabIdx={currPageRouteTabIdx}
              {...props}
            />
            )
          : <Redirect to={{ pathname: '/sign-in', state: { from: props.location } }}/>
      }
    />
  )
}

export default AuthRouteWithLayout
