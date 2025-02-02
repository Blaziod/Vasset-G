import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthPage from "./pages/AuthPage";
import Dashboard from "./pages/Dashboard";
import Wallet from "./pages/wallet";
import VerifyPage from "./pages/VerifyPage";
// import ProtectedRoute from "./routes/protectedRoute";
import GuestRoute from "./routes/guestRoute";
import Layout from "./components/layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthCallback from "./components/authCallback";

function App() {
  return (
    <Layout>
      <ToastContainer />
      <Routes>
        {/* Guest Routes */}
        <Route
          path="/auth"
          element={
            <GuestRoute>
              <AuthPage />
            </GuestRoute>
          }
        />
        <Route
          path="/auth/callback"
          element={
            <GuestRoute>
              <AuthCallback />
            </GuestRoute>
          }
        />
        <Route
          path="/verify"
          element={
            <GuestRoute>
              <VerifyPage />
            </GuestRoute>
          }
        />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/wallet" element={<Wallet />} />

        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  );
}

export default App;
