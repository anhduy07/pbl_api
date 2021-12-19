import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductManager from "./pages/ProductManager";
import UserManager from "./pages/UserManager";
import Add from "./pages/Add";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/' element={<Dashboard />} />
        <Route path='/ProductManager' element={<ProductManager />} />
        <Route path='/UserManager' element={<UserManager />} />
        <Route path='/Add' element={<Add />} />

      </Routes>
    </Router>
  );
}

export default App;
