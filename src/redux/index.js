import { Component, legacy_createStore,applyMiddleware, compose } from "redux";
import creatMiddleware from "redux-saga" ;
import reducers from "./reducers";
import middleware from "./saga";

const middlewareStore = creatMiddleware();
const store = legacy_createStore(reducers,compose(applyMiddleware(middlewareStore)));
middleware.arguments(middleware);

export default store