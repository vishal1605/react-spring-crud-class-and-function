import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Table from './components/Table';
import ClassHomeCrud from './components/ClassHomeCrud';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return ( 
      <div className="container">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/class-crud' element={<ClassHomeCrud />} />
          <Route path='*' element={<Navigate to="/"/>} />
        </Routes>
      </div>
     );
  }
}
 
export default App;