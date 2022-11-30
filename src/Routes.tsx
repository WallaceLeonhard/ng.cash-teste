import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Main from './pages/Main';
import Login from './pages/Login';
import Registration from './pages/Registration';

import { AuthProvider } from './contexts/Auth';
import Private from './components/Private';



export function AppRoutes() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/cadastro' element={<Registration />} />
          <Route path='/pagina-principal' element={
            <Private>
              <Main />
            </Private>
          } />
        </Routes>
      </AuthProvider>
    </Router>
  )
}
