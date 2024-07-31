import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAllHotels } from "./services/api";

function Hotels() {
  const [hotels, setHotels] = useState([]);
  const navigation = useNavigate();

  const { access } = useSelector((state) => state.auth);

  useEffect(() => {
    fetchHotels();
  }, []);

  const fetchHotels = async () => {
    try {
      const data = await fetchAllHotels(access)
      setHotels(data);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  };

  const handleHotelView = (id) => {
    navigation(`/super/hotels/${id}`);
  };

  return (
    <React.Fragment>
      <div className="d-flex justify-content-between align-items-center pt-3">
        <h1 className="h2">Hotels</h1>
      </div>
      <hr />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Hotel name</th>
            <th>Image</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {hotels.map((hotel) => (
            <tr key={hotel.id}>
              <td>{hotel.name}</td>
              <td>
                <img src={hotel.image} alt="" style={{ height: "70px" }} />
              </td>
              <td>{hotel.phone_number}</td>
              <td>{hotel.email}</td>
              <td>{hotel.status}</td>
              <td>
                <button
                  className="btn btn-sm btn-secondary"
                  onClick={() => {
                    handleHotelView(hotel.id);
                  }}
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default Hotels;
