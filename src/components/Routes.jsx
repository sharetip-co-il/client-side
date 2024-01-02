import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import PaymentPage from "./PaymentPage/PaymentPage";
import QRCodeGenPage from "./QRCodeGenPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="HomePage" />} />
      <Route path="HomePage" element={<HomePage />} />
      <Route path="QRCodeGenPage" element={<QRCodeGenPage />} />
      <Route
        path="PaymentPage/:hall_name/:hall_sub_name/:table_number"
        element={<PaymentPage />}
      />
    </Routes>
  );
};

export default App;
