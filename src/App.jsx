import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import CreateNewOrder from "./pages/Orders/CreateNewOrder";
import BulkOrder from "./pages/Orders/CreateNewOrder/BulkOrderUpload";
import OrderDetails from "./pages/Orders/OrderDetails";
import Settings from "./pages/Settings";
import Transactions from "./pages/Transactions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getLoginStatus } from "./Services/AuthService";
import { SET_LOGIN, CSRF_TOKEN_VALUE, selectIsLoggedIn } from "./redux/feature/AuthSlice";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Cookies from "js-cookie";
import UpdateCsrfToken from "./CustomHook/UpdateCsrfToken";

import BlockLoginPageWithToken from "./CustomHook/BlockLoginPageWithToken";
import ProtectedRoute from "./CustomHook/ProtectedRoute";



axios.defaults.withCredentials = true;
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={
            <ProtectedRoute isLoginPage={true} >
              <Navigate to="/dashboard" />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>

              <Layout>
                <Dashboard />
              </Layout>
            </ProtectedRoute>



          }
        />
        <Route
          path="orders"
          element={
            <Layout>
              <Orders />
            </Layout>

          }
        />
        <Route index path="orders/new-order" element={
          <Layout>
            <CreateNewOrder />
          </Layout>

        } />
        <Route index path="orders/bulk-upload" element={
          <Layout>
            <BulkOrder />
          </Layout>

        } />
        <Route index path="orders/:id" element={
          <Layout>
            <OrderDetails />
          </Layout>

        } />
        <Route
          path="/transaction"
          element={
            <Layout>
              <Transactions />
            </Layout>

          }
        />
        <Route
          path="/setting"
          element={
            <Layout>
              <Settings />
            </Layout>

          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
