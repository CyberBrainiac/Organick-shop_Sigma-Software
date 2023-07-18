
import { BrowserRouter as Router, Routes, Route}
from 'react-router-dom';
import MainLayout from './pages/MainLayout';
import Home from './pages/home/Home';
import Registration from './pages/registration/Registration';

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/registration" element={<Registration />}></Route>
          {/**Index element specifies standart element for root path*/}

          {/* <Route path="admin" element={<AdminLayout />}> */}
            {/* <Route path="dashboard" element={<Dashboard />} /> */}
            {/* <Route path="users" element={<Users />} /> */}
          {/* </Route> */}
        </Route>
      </Routes>
    </Router>
  )
}

