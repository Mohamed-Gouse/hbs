import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useSelector } from "react-redux";
import HotelDetailPage from "./pages/HotelDetailPage";
import NotFoundPage from "./pages/NotFoundPage";
import LoginPage from "./pages/LoginPage";
import SelectionPage from "./pages/SelectionPage";
import ProfilePage from "./pages/ProfilePage";
import Dashboard from "./hotel/pages/Dashboard";
import HotelPage from "./hotel/pages/HotelPage";
import HotelAddPage from "./hotel/pages/HotelAddPage";
import AdminHotelDetailPage from "./hotel/pages/AdminHotelDetailPage";
import SuccessPage from "./pages/SuccessPage";
import AdminBookings from "./hotel/pages/AdminBookings";
import AdminMessages from "./hotel/pages/AdminMessages";
import AdminBookingDetailPage from "./hotel/pages/AdminBookingDetailPage";
import BookingDetailPage from "./pages/BookingDetailPage";
import AdminReservationPage from "./hotel/pages/AdminReservationPage";
import AdminReservationDetailPage from "./hotel/pages/AdminReservationDetailPage";

const AppRoutes = () => {
  const { isLogged, user } = useSelector((state) => state.auth);
  return (
    <Routes>
      <Route
        path="/login"
        element={
          !isLogged ? (
            <LoginPage />
          ) : (
            <Navigate
              to={
                user.role === "user"
                  ? "/"
                  : user.role === "hotel"
                  ? "/admin/dashboard"
                  : "/super-admin/dashboard"
              }
            />
          )
        }
      />

      {/* UserRouters */}
      <Route path="/" element={isLogged && user.role !== 'user' ? <Navigate to={'/login'} /> : <HomePage />} />
      <Route path="/hotel/:slug" element={<HotelDetailPage />} />
      <Route
        path="/selection"
        element={
          isLogged && user.role === "user" ? (
            <SelectionPage />
          ) : (
            <Navigate to={"/login"} />
          )
        }
      />
      <Route
        path="/profile"
        element={
          isLogged && user.role === "user" ? (
            <ProfilePage />
          ) : (
            <Navigate to={"/login"} />
          )
        }
      />
      <Route
        path="/success"
        element={
          isLogged && user.role === "user" ? (
            <SuccessPage />
          ) : (
            <Navigate to={"/login"} />
          )
        }
      />
      <Route
        path="/profile/booking/:id"
        element={
          isLogged && user.role === "user" ? (
            <BookingDetailPage />
          ) : (
            <Navigate to={"/login"} />
          )
        }
      />


      {/* HotelRouter */}
      <Route
        path="/admin/dashboard"
        element={
          isLogged && user.role === "hotel" ? (
            <Dashboard />
          ) : (
            <Navigate to={"/"} />
          )
        }
      />
      <Route
        path="/admin/hotels"
        element={
          isLogged && user.role === "hotel" ? (
            <HotelPage />
          ) : (
            <Navigate to={"/"} />
          )
        }
      />
      <Route
        path="/admin/add-hotel"
        element={
          isLogged && user.role === "hotel" ? (
            <HotelAddPage />
          ) : (
            <Navigate to={"/"} />
          )
        }
      />
      <Route
        path="/admin/hotel/:slug"
        element={
          isLogged && user.role === "hotel" ? (
            <AdminHotelDetailPage />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/admin/bookings"
        element={
          isLogged && user.role === "hotel" ? (
            <AdminBookings />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/admin/bookings/:id"
        element={
          isLogged && user.role === "hotel" ? (
            <AdminBookingDetailPage />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/admin/bookings/reservation"
        element={
          isLogged && user.role === "hotel" ? (
            <AdminReservationPage />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/admin/bookings/reservation/:id"
        element={
          isLogged && user.role === "hotel" ? (
            <AdminReservationDetailPage />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/admin/messages"
        element={
          isLogged && user.role === "hotel" ? (
            <AdminMessages />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* CommonRouter */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
