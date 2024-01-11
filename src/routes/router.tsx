import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main";
import ChatBoxContainer from '../pages/ChatBoxContainer/ChatBoxContainer';
import CallBox from '../components/CallBox/CallBox';
import Register from '../pages/SharedPage/Auth/Register/Register';
import Login from '../pages/SharedPage/Auth/Login/Login';
import GroupChatBox from '../pages/ChatBoxContainer/GroupChatBox';

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
          path: "/",
          element: <Home/>,
        },
        {
          path: "/chat/:email",
          element: <ChatBoxContainer/>,
        },
        {
          path: "/chat/group/:id",
          element: <GroupChatBox/>,
        },
        {
          path: "/call/:email",
          element: <CallBox/>,
        },
        
      ]
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
  ]);
