// import './App.css';
import { Routes, Route } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import DashboardContent from "./components/DashboardContent";
import Keyword from "./components/Keyword";
import LoginForm from './components/forms/login'

function App() {
  return (
    <>
      <Routes>
        <Route index element={ <Dashboard><DashboardContent /></Dashboard>} />
        <Route path="/keywords" element={ <Dashboard><Keyword /></Dashboard>} />
        <Route path="/login" element={<LoginForm/>} />
      </Routes>
    </>
  );
}

export default App;
