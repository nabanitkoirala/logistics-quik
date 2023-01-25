import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Orders from "./pages/Orders";
import CreateNewOrder from "./pages/Orders/CreateNewOrder";
import OrderDetails from "./pages/Orders/OrderDetails";
import Settings from "./pages/Settings";
import Transactions from "./pages/Transactions";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Dashboard />
            </Layout>

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
