import React from "react"
import { Redirect, Switch } from 'react-router-dom'
import { RouteWithLayout } from "../components"
import { Main as MainLayout, Minimal as MinimalLayout } from '../layout'
import {
  Billing as BillingView,
  ConfirmEmail as ConfirmEmailView,
  DashboardV2 as DashboardApiView,
  DashboardSdk as DashboardSdkView,
  Overview as DashboardOverviewView,
  ForgotPassword as ForgotPasswordView,
  LandingPage as LandingView,
  MailingConfirmEmail as MailingConfirmView,
  Pay as PayProcessView,
  Profile as ProfileView,
  Project as ProjectView,
  ResetPassword as ResetPasswordView,
  SignIn as SignInView,
  SignUp as SignUpView,
  Subscribe as SubscriptionView,
  UnSubscribe as UnsubscritionView,
  UseCases as UseCasesView,
  Documentation as DocumentationView
} from "../pages"
import AuthRouteWithLayout from "./AuthRouteWithLayout"
import {PAGE_ROUTE_TAB_ITEMS} from "../constants";

const Routers = ({ authenticated, logout, user, signIn, setAccessToken, setAuthenticated }) => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard/overview"
      />
      <Redirect
        exact
        from="/dashboard"
        to="/dashboard/overview"
      />
      <Redirect
        exact
        from="/projects"
        to="/projects/api"
      />
      <Redirect
        exact
        from="/cochl_sense"
        to="/cochl_sense/use_cases"
      />
      <RouteWithLayout
        component={LandingView}
        layout={MainLayout}
        logout={logout}
        authenticated={authenticated}
        path="/landing"
      />
      <RouteWithLayout
        component={
          props => (
            <SignInView
              signIn={signIn}
              authenticated={authenticated}
              setAccessToken={setAccessToken}
              {...props}
            />
          )}
        setAuthenticated={setAuthenticated}
        layout={MinimalLayout}
        path="/sign-in"
      />
      <RouteWithLayout
        component={props => (<SignUpView {...props}/>)}
        layout={MinimalLayout}
        path="/sign-up"
      />
      <RouteWithLayout component={ConfirmEmailView} layout={MinimalLayout}
                       path='/user/confirm-email/:challenge'/>
      <RouteWithLayout component={ForgotPasswordView} layout={MinimalLayout}
                       path='/user/forgot-password'/>
      <RouteWithLayout component={ResetPasswordView} layout={MinimalLayout}
                       path='/user/reset-password/:challenge'/>
      <RouteWithLayout component={MailingConfirmView} layout={MinimalLayout}
                       path='/mailing-list/confirm-email/:challenge'/>
      <RouteWithLayout component={SubscriptionView} layout={MinimalLayout}
                       path='/mailing-list/subscribe'/>
      <RouteWithLayout component={UnsubscritionView} layout={MinimalLayout}
                       path='/mailing-list/unsubscribe'/>

      <AuthRouteWithLayout
        component={DashboardOverviewView} layout={MainLayout} title='Dashboard Overview' path='/dashboard/overview'
        exact
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
        logout={logout}
        pageRouteTabItems={PAGE_ROUTE_TAB_ITEMS.dashboard}
        currPageRouteTabIdx={0}
      />
      <AuthRouteWithLayout
        component={DashboardApiView} layout={MainLayout} title='Dashboard API' path='/dashboard/api'
        exact
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
        logout={logout}
        pageRouteTabItems={PAGE_ROUTE_TAB_ITEMS.dashboard}
        currPageRouteTabIdx={1}
      />
      <AuthRouteWithLayout
        component={DashboardSdkView} layout={MainLayout} title='Dashboard SDK' path='/dashboard/sdk'
        exact
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
        logout={logout}
        pageRouteTabItems={PAGE_ROUTE_TAB_ITEMS.dashboard}
        currPageRouteTabIdx={2}
      />
      <AuthRouteWithLayout
        component={ProjectView} layout={MainLayout} title='Projects' path='/projects/api'
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
        logout={logout}
        pageRouteTabItems={PAGE_ROUTE_TAB_ITEMS.projects}
        currPageRouteTabIdx={0}
      />
      <AuthRouteWithLayout
        component={ProjectView} layout={MainLayout} title='Projects' path='/projects/sdk'
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
        logout={logout}
        pageRouteTabItems={PAGE_ROUTE_TAB_ITEMS.projects}
        currPageRouteTabIdx={1}
      />
      <AuthRouteWithLayout
        component={UseCasesView} layout={MainLayout} title='Products' path='/cochl_sense/use_cases'
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
        logout={logout}
        pageRouteTabItems={PAGE_ROUTE_TAB_ITEMS.cochl_sense}
        currPageRouteTabIdx={0}
      />
      <AuthRouteWithLayout
        component={DocumentationView} layout={MainLayout} title='Products' path='/cochl_sense/documentation'
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
        logout={logout}
        pageRouteTabItems={PAGE_ROUTE_TAB_ITEMS.cochl_sense}
        currPageRouteTabIdx={1}
      />
      <AuthRouteWithLayout
        component={BillingView} layout={MainLayout} title='Billing' path='/billing'
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
        logout={logout}
      />
      <AuthRouteWithLayout
        component={ProfileView} layout={MainLayout} title='Profile' path='/profile'
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
        logout={logout}
        user={user}
      />
      <RouteWithLayout
        component={PayProcessView} layout={MinimalLayout} path='/dashboard/pay/process'
      />
    </Switch>
  )
}

export default Routers
