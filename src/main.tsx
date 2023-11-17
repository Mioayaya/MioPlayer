import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from "react-redux";
import "@arco-design/web-react/dist/css/arco.css";

import App from './App.tsx'
import { store } from './store/index.ts';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Suspense>
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
  </React.Suspense>,
)
