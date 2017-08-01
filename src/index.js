import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch  } from 'react-router-dom'
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import PostsShow from './components/posts_show';

//const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const middleware = [ promise, createLogger(), thunk ]

const store = createStore (
  reducers,
  applyMiddleware(...middleware)
)

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
