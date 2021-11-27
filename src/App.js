import React from 'react';
import AppBar from './Components/Navigation/AppBar';
import HomeView from './Components/views/Homeview';
import LoginView from './Components/views/Loginview';
import RegisterView from './Components/views/Registerview';
import UserView from './Components/views/Usersview';

import s from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import PublicRoute from './Components/Routes/PublicRoute';
import PrivateRoute from './Components/Routes/PrivateRoute';

export default function App() {
  return (
    <div className={s.app}>
      <AppBar />
      
      <Routes>
        <Route exact path="/" element={
              <PublicRoute>
                <HomeView />
              </PublicRoute>
            } />
        <Route exact path="/login" element={
              <PublicRoute restricted redirectTo="/contacts">
                <LoginView />
              </PublicRoute>
            }/>
        <Route exact path="/register" element={
              <PublicRoute restricted>
                <RegisterView />
              </PublicRoute>
            }/>
        <Route exact path="/contacts" element={
              <PrivateRoute redirectTo="/login">
                <UserView />
              </PrivateRoute>
            }/>
      </Routes>
    </div>);    
};
   