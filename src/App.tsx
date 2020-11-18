import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddNote from './components/AddNote';

function App() {
  return (
    <Provider store={store}>
      <Header></Header>
      <AddNote></AddNote>
      <Dashboard></Dashboard>
      <Footer></Footer>
    </Provider>
  );
}

export default App;
