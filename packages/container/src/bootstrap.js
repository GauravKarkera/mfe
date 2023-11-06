import React from 'react'
import ReactDOM from 'react-dom'
import App from "./App"


ReactDOM.render(
    <App />,
    document.querySelector("#root")
)


// if (process.env.NODE_ENV === 'development') {
//     const devRoot = document.querySelector("#root")
//     if (devRoot) {
//         mount(devRoot)
//     }
// }

// export { mount }
// console.log("Hi THere");