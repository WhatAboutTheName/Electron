import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import axios from 'axios';
import './index.scss';

axios.defaults.baseURL = 'http://localhost:8000';

ReactDOM.render(<App />, document.getElementById("root"));
