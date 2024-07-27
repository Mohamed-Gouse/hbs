import React, { useEffect, useState } from "react";
import Booking from "./components/Booking";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { reservationDetails } from "./services/api";

function ReservationDetail() {
  const { id } = useParams();
  const [booking, setBooking] = useState({});
  const { access } = useSelector((state) => state.auth);

  const fetchReservation = async () => {
    try {
      const data = await reservationDetails(access, id);
      setBooking(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchReservation();
  }, []);

  const updateCheckInOut = async (bookingId) => {
    // try {
    //   console.log("BTN Clicked");
    //   const response = await CheckInOut({access, bookingId});
    //   console.log(response);
    //   fetchBooking();
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return <Booking booking={booking} updateCheckInOut={updateCheckInOut} />;
}

export default ReservationDetail;
