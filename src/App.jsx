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

import "react-toastify/dist/ReactToastify.css";

import axios from "axios";

import ProtectedRoute from "./CustomHook/ProtectedRoute";
import ResetPassword from "./pages/auth/ResetPassword";
import Otp from "./pages/auth/Login/Otp";



axios.defaults.withCredentials = true;
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={


            <Login />


          }
        />




        {/* <Route
          path="/"
          element={
            <ProtectedRoute isLoginPage={true} >
              <Navigate to="/dashboard" />
            </ProtectedRoute>
          }
        /> */}
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
        resetpassword
        <Route
          path="/resetpassword/:id"
          element={
            <ResetPassword />
          }
        />
        <Route
          path="orders"
          element={
            <ProtectedRoute>

              <Layout>
                <Orders />
              </Layout>
            </ProtectedRoute>

          }
        />
        <Route index path="orders/new-order" element={
          <ProtectedRoute>

            <Layout>
              <CreateNewOrder />
            </Layout>
          </ProtectedRoute>

        } />
        <Route index path="orders/bulk-upload" element={
          <ProtectedRoute>

            <Layout>
              <BulkOrder />
            </Layout>
          </ProtectedRoute>

        } />
        <Route index path="orders/:id" element={
          <ProtectedRoute>

            <Layout>
              <OrderDetails />
            </Layout>
          </ProtectedRoute>

        } />
        <Route
          path="/transaction"
          element={
            <ProtectedRoute>

              <Layout>
                <Transactions />
              </Layout>
            </ProtectedRoute>

          }
        />
        <Route
          path="/setting"
          element={
            <ProtectedRoute>

              <Layout>
                <Settings />
              </Layout>
            </ProtectedRoute>

          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
