import React from "react";
import FullLayout from "../layout/FullLayout";
import "../assets/styles/success.css";
import {Link} from 'react-router-dom'

function SuccessPage() {
  return (
    <FullLayout>
      <main className="min-vh-100 d-flex justify-content-center align-items-center bg-light">
        <div className="text-center">
          <i
            className="bi bi-check2-circle text-success m-0 p-0"
            style={{
              fontSize: "7rem",
            }}
          />
          <p className="h3 m-0 p-0">Checkout & Payment Successfull!</p>
          <small>
            We have sent your booking summary to your e-mail. Kindly verify it.
          </small>
          <p className="font-weight-bold">Thank you!</p>
          <Link to={'/profile'} className="btn btn-purple">Goto Profile</Link>
        </div>
      </main>
    </FullLayout>
  );
}

export default SuccessPage;
