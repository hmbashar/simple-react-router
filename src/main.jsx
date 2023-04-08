import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Home from './components/Home/Home';
import First from './components/First/First';
import UserDetails from './components/UserDetails/UserDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <First></First>
      },
      {
        path: 'about',
        element: <About></About>,
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
      }, 
      {
        path: 'user/:userId',
        element: <UserDetails></UserDetails>,
        loader: ({params} ) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      },
      {
        path: 'contact',
        element: <Contact></Contact>
      }, 
      {
        path: 'posts',
        element:<Posts></Posts>, 
        loader: () => fetch('https://jsonplaceholder.typicode.com/posts')
      }, 
      {
        path: 'post/:postId', 
        element: <PostDetails></PostDetails>, 
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      }, 
      {
        path: '*',
        element: <div>404 Not Found!</div>
      }
    ]
  }
]);

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App></App>
//   }, 
//   {
//     path: '/about',
//     element: <About></About>
//   }, 
//   {
//     path: '/contact',
//     element: <Contact></Contact>
//   }
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>   
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
