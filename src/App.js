import './App.scss'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HomePage from './page/Homepage/HomePage';
import Admin from './page/Admin/Admin';
import ManageUser from './page/Admin/MangeUser/ManageUser';
import ManageCar from './page/Admin/ManageCar/ManageCar';
import CreateCar from './page/Admin/ManageCar/CreateCar/CreateCar';
import UpdateCar from './page/Admin/ManageCar/UpdateCar/UpdateCar';
import DetailCar from './page/Admin/ManageCar/DetailCar/DetailCar';
import ManageTrip from './page/Admin/ManageTrip/ManageTrip';
import CreateTrip from './page/Admin/ManageTrip/CreateTrip/CreateTrip';
import Login from './components/Information/Login';
import Register from './components/Information/Register';
import VerifyEmail from './components/Information/VerifyEmail';
import Trips from './page/Trips/Trips';
import Profile from './components/Profile/Profile';
import HistoryBookTicket from './page/HistoryBookTicket/HistoryBookTicket';
import ManageTicketCar from './page/Admin/ManageTicketCar/ManageTicketCar';
import LoginSuccess from './components/Information/LoginSuccess';
import Statistics from './page/Admin/Statistics/Statistics';
import RentalCar from './page/RentalCar/RentalCar';
import SendCodeEmail from './components/Information/SendCodeEmail';

function App() {
  return (
    <Router>
      <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route path="/trips" element={<Trips />}></Route>
          <Route path="/book-ticket" element={<HistoryBookTicket />}></Route>
          <Route path="/rental-car" element={<RentalCar />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/send-code-email" element={<SendCodeEmail />}></Route>
          <Route path="/login-success/:id/:tokenLogin" element={<LoginSuccess />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/verify-email" element={<VerifyEmail />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/admin/manage-user" element={<ManageUser />}></Route>
          <Route path="/admin/manage-ticket" element={<ManageTicketCar />}></Route>
          <Route path="/admin/manage-car" element={<ManageCar />}></Route>
          <Route path="/admin/manage-car/create" element={<CreateCar />}></Route>
          <Route path="/admin/manage-car/update" element={<UpdateCar />}></Route>
          <Route path="/admin/manage-car/detail" element={<DetailCar />}></Route>
          <Route path="/admin/manage-trip" element={<ManageTrip />}></Route>
          <Route path="/admin/statistics" element={<Statistics />}></Route>
          <Route path="/admin/manage-trip/create" element={<CreateTrip />}></Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
  </Router>
  
  );
}

export default App;
