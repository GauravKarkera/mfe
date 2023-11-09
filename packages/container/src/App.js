import React, { lazy, Suspense, useState, useEffect } from 'react'
// import MarketingApp from "./components/MarketingApp"
// import AuthApp from "./components/AuthApp"
import Header from "./components/Header"
import { Router, Redirect, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import Progress from './components/Progress';
// import { mount } from 'marketing/MarketingApp'

const MarketingLazy = lazy(() => import("./components/MarketingApp"))
const AuthLazy = lazy(() => import("./components/AuthApp"))
const DashboardLazy = lazy(() => import("./components/DashboardApp"))

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

const history = createBrowserHistory()

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false)

    useEffect(() => {

        if (isSignedIn) {
            history.push('/dashboard')
        }

    }, [isSignedIn])

    return (
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                <Suspense fallback={<Progress />}>
                    <Switch>
                        <Route path='/auth' >
                            <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                        </Route>
                        <Route path="/dashboard">
                            {!isSignedIn && <Redirect to="/" />}
                            <DashboardLazy />
                        </Route>
                        <Route path='/' component={MarketingLazy} />
                    </Switch>
                </Suspense>


            </Router>
        </StylesProvider>
    )

}
