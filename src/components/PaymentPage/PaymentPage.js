import React, { Fragment, useState, useEffect } from "react";
import Container from "@mui/material/Container";
import { useParams } from "react-router-dom";
import { usePaymentTo } from "../../requests/services/paymentPageRequests";
import Header from "../Header";
import Footer from "../Footer";
import CardPayment from "./CardPayment";
import SelectPaymentType from "./SelectPaymentType";


const PaymentPage = () => {
  const { hall_name, hall_sub_name, table_number } = useParams();
  const payTo = usePaymentTo();

  const [companyName, setCompanyName] = useState("");
  const [subCompanyName, setSubCompanyName] = useState("");
  const [table, setTable] = useState("");
  const [location, setLocation] = useState("");

  const fetchData = async () => {
    try {
      console.log("Params:", { hall_name, hall_sub_name, table_number });
      const params = { hall_name, hall_sub_name, table_number };
      const { message, data } = await payTo.doRequest({ params });
      console.log(message);

      setCompanyName(data?.companyName);
      setSubCompanyName(data?.subCompanyName);
      setTable(data?.table);
      setLocation(data?.location);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [hall_name, hall_sub_name, table_number]);

  return (
    <Fragment>
      <Header>
        {`${companyName || hall_name} -${
          subCompanyName || hall_sub_name
        } שולחן  ${table || table_number}  / ${location || ""}`}
      </Header>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <SelectPaymentType />
        {/* <CardPayment /> */}
      </Container>
      <Footer />
    </Fragment>
  );
};
export default PaymentPage;
