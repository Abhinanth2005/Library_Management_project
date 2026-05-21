import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Books from "../pages/Books";
import Authors from "../pages/Authors";
import BorrowBooks from "../pages/BorrowBooks";
import MyBorrowedBooks from "../pages/MyBorrowedBooks";
import NotFound from "../pages/NotFound";
import Signup from "../pages/Signup";

import ProtectedRoute from "../components/ProtectedRoute";

const AppRoutes = () => {

  return (

    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Login />}
        />
        <Route
          path="/signup"
          element={<Signup />}
        />
        

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/books"
          element={
            <ProtectedRoute>
              <Books />
            </ProtectedRoute>
          }
        />

        <Route
          path="/authors"
          element={
            <ProtectedRoute>
              <Authors />
            </ProtectedRoute>
          }
        />

        <Route
          path="/borrow"
          element={
            <ProtectedRoute>
              <BorrowBooks />
            </ProtectedRoute>
          }
        />

        <Route
          path="/my-books"
          element={
            <ProtectedRoute>
              <MyBorrowedBooks />
            </ProtectedRoute>
          }
        />

        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

    </BrowserRouter>
  );
};

export default AppRoutes;