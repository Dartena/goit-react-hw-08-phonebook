import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { AppDiv } from "./components/styles/styled";
import { Navigate, Route, Routes } from "react-router-dom";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import AppBar from "./components/AppBar/AppBar";
import SignupForm from "./components/Signup/Signup";
import LoginForm from "./components/Login/Login";
import Contacts from "./components/Contacts/Contacts";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import About from "./components/About/About";

function App() {
  const isFetchingCurrentUser = useSelector((state) => state.isFetchingCurrent);

  return !isFetchingCurrentUser ? (
    <AppDiv>
      <AppBar />
      <Routes>
        <Route
          path="register"
          element={<PublicRoute component={SignupForm} restricted />}
        />
        <Route
          path="login"
          element={<PublicRoute component={LoginForm} restricted />}
        />
        <Route
          path="contacts"
          element={<PrivateRoute component={Contacts} />}
        />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Navigate to="about" />} />
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
    </AppDiv>
  ) : (
    <div>Loading...</div>
  );
}

export default App;
