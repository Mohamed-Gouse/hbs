import React from "react";
import Carousel from "../../components/common/Carousel";
import Details from "./components/Details";

function HotelDetail({hotel, gallery, room_type, rooms, features}) {

  return (
    <React.Fragment>
      <Carousel gallery={gallery} />
      <Details hotel={hotel} room_type={room_type} features={features} rooms={rooms} />
    </React.Fragment>
  );
}

export default HotelDetail;
