import Login from './pages/login/Login.js';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import CorporateUserDetails from './components/CorporateUserDetails';
import CorporateAccountDetails from './components/CorporateAccountDetails';
import { AuthContext } from './context/authContext';
import { useContext } from 'react';
import Home from "./pages/home/Home";

import 'mdb-ui-kit/css/mdb.min.css';


function App() {

  const { currentUser } = useContext(AuthContext);

  const Layout = () => {
    return (
      <div style={{ display: "flex" }}>
        <Home />
        <div style={{ flex: 6 }}>
          <Outlet />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <CorporateUserDetails />
        },
        {
          path: "/corporateaccountdetails",
          element: <CorporateAccountDetails />
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);


  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
