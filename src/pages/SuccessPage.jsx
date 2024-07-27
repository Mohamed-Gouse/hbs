import React from "react";
import FullLayout from "../layout/FullLayout";
import "../assets/styles/success.css";

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
          <div className="d-flex justify-content-around my-2">
            <a className="btn btn-purple" href="#" id="" name="" role="button">
              View Bookings
            </a>
            <a className="btn btn-purple" href="#" id="" name="" role="button">
              Download Invoice
            </a>
          </div>
        </div>
      </main>
    </FullLayout>
  );
}

export default SuccessPage;
