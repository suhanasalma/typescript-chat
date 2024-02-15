import React from 'react';
import {
  createBrowserRouter,
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../layout/Main";
import ChatBoxContainer from '../pages/ChatBoxContainer/ChatBoxContainer';
import CallBox from '../components/Call/CallBox/CallBox';
import Register from '../pages/SharedPage/Auth/Register/Register';
import Login from '../pages/SharedPage/Auth/Login/Login';
import GroupChatBox from '../pages/ChatBoxContainer/GroupChatBox';
import AnnouncementChatBox from '../pages/ChatBoxContainer/AnnouncementChatBox';
import PrivateRoute from './privateRoutes';
import PublicRoutes from './publicRoutes';
import Auth from '../pages/SharedPage/Auth/Auth';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute><Main /></PrivateRoute>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/chat/:channel_name",
        element: <ChatBoxContainer />,
      },
      // {
      //   path: "/chat/group/:id",
      //   element: <GroupChatBox />,
      // },
      // {
      //   path: "/chat/announcement/:id",
      //   element: <AnnouncementChatBox />,
      // },
      {
        path: "/call/:email",
        element: <CallBox />,
      },

    ]
  },
  {
    path: "/register",
    element: <PublicRoutes><Register /></PublicRoutes>,
  },
  {
    path: "/login",
    element: <PublicRoutes><Login /></PublicRoutes>,
  },
  {
    path: "/auth",
    element: <PublicRoutes><Auth /></PublicRoutes>,
  },
]);
