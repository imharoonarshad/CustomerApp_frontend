import './App.css';
import { Route, Routes } from "react-router-dom";
import CustomerForm from './components/form/form';
import ShowData from './components/view/showData';
import Signup from './components/view/signup';
import Login from './components/view/login';
import Protected from './components/view/protected';

function App() {

  return (
    <Routes>
      <Route path="/" element={<>

        <ShowData />
        

      </>} />

      {/* <Route path="/form" element={<CustomerForm />} /> */}
      <Route path="/form" element={<Protected Component={CustomerForm}/>} />

      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />


    </Routes>
  );
}

export default App;
