// Promise based HTTP client for brwoser and node.js
import axios from 'axios';

import axios from 'axios';

export function login(data) {
  return dispatch => {
    return axios.post('/api/auth', data);
  }
}

