import React from "react"
import ReactDOM from 'react-dom';
import { Provider, connect } from "react-redux"
import {createStore} from "redux"
import "github-fork-ribbon-css/gh-fork-ribbon.css";

import './index.css';
import App from "./containers/App.js"
import { searchEmojis } from "./reducers";

//create a store of redux, that keeps the state
const store = createStore(searchEmojis)

//render your app
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
