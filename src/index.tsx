import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {SecurityProvider} from "@webiny/app-security"
import Chert from "./Chert";
import Pert from "./Pert";
import Authenticator from "./Authenticator";


const rootElement = document.getElementById("root");
ReactDOM.render(
    <SecurityProvider>
        <Authenticator>
            <BrowserRouter>
                <Routes>
                    <Route path="/chert" element={<Chert/>}/>
                    <Route path="/pert" element={<Pert/>}/>
                </Routes>
                <App/>
            </BrowserRouter>
        </Authenticator>
    </SecurityProvider>
    , rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
