import logo from './logo.svg';
import './App.css';
import FormPage from './pages/FormPage';
import TablePage from './pages/TablePage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <div className="App">
     <LoginPage/>
       {/* <FormPage/> */}
       <TablePage/>         

    </div>
  );
}

export default App;
