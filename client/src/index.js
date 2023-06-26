import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom'
import router from './router';
import { Container } from '@mui/system';
import './firebase/config'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Container maxWidth='lg' sx={{ textAlign: 'center', marginTop: '50px' }}>
      <RouterProvider router={router}></RouterProvider>
    </Container>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
