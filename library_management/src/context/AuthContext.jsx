import { createContext, useCallback, useEffect, useState } from "react";
import axios from "../api/axios";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(
    localStorage.getItem("token") || null
  );
  const [loading, setLoading] = useState(true);

  // LOGOUT
  const logoutUser = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh_token");
    setToken(null);
    setUser(null);
  }, []);

  // FETCH USER — receives token as param to avoid stale closure bug
  const fetchUser = useCallback(async (tkn) => {
    try {
      const response = await axios.get("users/profile/", {
        headers: {
          Authorization: `Bearer ${tkn}`,
        },
      });
      setUser(response.data);
    } catch (error) {
      logoutUser();
    } finally {
      setLoading(false);
    }
  }, [logoutUser]);

  useEffect(() => {
    if (token) {
      fetchUser(token); // pass token directly — no stale closure
    } else {
      setLoading(false);
    }
  }, [token, fetchUser]);

  // LOGIN — uses "username" to match Login.jsx & SimpleJWT default
  const loginUser = async (username, password) => {
    try {
      const response = await axios.post("token/", {
        username, // ✅ was "email" — mismatched with Login.jsx
        password,
      });

      const accessToken = response.data.access;
      const refreshToken = response.data.refresh;

      localStorage.setItem("token", accessToken);           // ✅ consistent key
      localStorage.setItem("refresh_token", refreshToken);  // ✅ was missing

      setToken(accessToken);

      return { success: true };
    } catch (error) {
      return {
        success: false,
        message:
          error.response?.data?.detail || "Invalid credentials",
      };
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;