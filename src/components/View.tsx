
import React, { Component, ReactNode, Suspense } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { IRouter, routers, unAuthRouter } from '../router'
import AppLayout from '../pages/layout'

export default class View extends Component {
  generateRoute = (data: IRouter[]): ReactNode => {
    return data.map((item: any) => {
      if (item.children) {
        return (
          this.generateRoute(item.children)
        )
      }
      return (
        <Route key={item.key} exact={item.exact} path={item.path} >
          {item.component}
        </Route>
      );
    }
    )
  }
  render() {
    return (
      <Suspense>
        <Router>
          <Switch>
            <Route path={'/'} exact>
              <Redirect to={'/admin/home'} />
            </Route>
            <Route path={'/admin'}>
              <AppLayout>
                <Suspense>
                  {
                    this.generateRoute(routers)
                  }
                </Suspense>
              </AppLayout>
            </Route>
            <Switch>
              {
                unAuthRouter.map(route => (<Route exact={route.exact} path={route.path} key={route.key}>{route.component}</Route>))
              }
            </Switch>
          </Switch>
        </Router>
      </Suspense >
    )
  }
}