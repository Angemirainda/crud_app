import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

//importation des composants
import ClientList from './components/ClientList';
import CreateClient from './components/CreateClient';
import ClientsDetails from './components/ClientsDetails';
import UpdateClient from './components/UpdateClient';

import './App.css'

 const App = () =>{

  return(
    <Router>
      <Routes>
        <Route path="/clients" element={<ClientList/>} />
        <Route path="/clients/create" element={<CreateClient/>} />
        <Route path="/clients/:id" element={<ClientsDetails/>} />
        <Route path="/clients/:id/update" element={<UpdateClient/>} />
      </Routes>
    </Router>
  );

 };

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//    <div>
//     <p>Application React CRUD</p>
//    </div>
//   )
// }

export default App
