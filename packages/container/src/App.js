import React, { lazy, Suspense, useState } from 'react'
// import MarketingApp from "./components/MarketingApp"
// import AuthApp from "./components/AuthApp"
import Header from "./components/Header"
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
import Progress from './components/Progress';
// import { mount } from 'marketing/MarketingApp'

const MarketingLazy = lazy(() => import("./components/MarketingApp"))
const AuthLazy = lazy(() => import("./components/AuthApp"))

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false)
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                <Suspense fallback={<Progress />}>
                    <Switch>
                        <Route path='/auth' >
                            <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                        </Route>
                        <Route path='/' component={MarketingLazy} />
                    </Switch>
                </Suspense>
                {/* <MarketingApp /> */}


            </BrowserRouter>
        </StylesProvider>
    )

}
