import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Login from './components/Login';
import MainPage from './components/MainPage';
import Registration from './components/Registration';


export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<Registration />} />
        <Route path='/pagina-principal' element={<MainPage />} />
      </Routes>
    </Router>
  )
}
