import logo from './logo.svg';
import './App.css';
import FormPage from './pages/FormPage';
import TablePage from './pages/TablePage';
import LoginPage from './pages/LoginPage';
import {Routes,Route} from 'react-router-dom';
import UserReport from './pages/UserReport';

function App() {
  return (
    <div className="App">
     {/* <LoginPage/> */}
       {/* <FormPage/> */}
       {/* <TablePage/>    */}

        <Routes>
        <Route path="/loginpage" element={ <LoginPage/>} />
        <Route index element={<LoginPage/>} />
        <Route path="/userreport" element={<UserReport/>} />
        {/* <Route path="/industries" element={<Industries/>} /> */}

    </Routes>      

    </div>
  );
}

export default App;
