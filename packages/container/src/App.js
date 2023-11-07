import React from 'react'
import MarketingApp from "./components/MarketingApp"
import Header from "./components/Header"
import { BrowserRouter } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core';
// import { mount } from 'marketing/MarketingApp'
const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

export default () => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            <BrowserRouter>
                <div>
                    {/* <h1>Hi THere!!!!!!!!!!!!!</h1>
                <hr /> */}
                    <Header />
                    <MarketingApp />

                </div>
            </BrowserRouter>
        </StylesProvider>
    )

}
