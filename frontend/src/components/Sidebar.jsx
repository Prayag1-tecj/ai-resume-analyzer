import {
  Link,
  useNavigate,
  useLocation
} from "react-router-dom";

import {
  useEffect,
  useState
} from "react";

import api from "../services/api";

export default function Sidebar() {

  const navigate = useNavigate();

  const location = useLocation();

  const [profile, setProfile] =
    useState(null);

  useEffect(() => {

    fetchProfile();

  }, []);

  const fetchProfile = async () => {

    try {

      const res = await api.get(
        "/auth/profile/"
      );

      setProfile(
        res.data
      );

    } catch (error) {

      console.error(error);

    }

  };

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/login");
  };

  const navItem = (path) => {

    return location.pathname === path
      ? "bg-blue-600 text-white"
      : "text-gray-300 hover:bg-slate-800";
  };

  return (

    <div
      className="
      w-full md:w-64
      min-h-screen
      bg-slate-900
      text-white
      p-6
      "
    >

      <h1
        className="
        text-2xl
        font-bold
        border-b
        border-slate-700
        pb-4
        "
      >
        AI Resume Analyzer
      </h1>

      {profile && (

        <div
          className="
          bg-slate-800
          rounded-xl
          p-4
          mt-4
          mb-8
          "
        >

          <p className="font-semibold">
            👤 {profile.username}
          </p>

          <p
            className="
            text-sm
            text-gray-400
            mt-1
            break-all
            "
          >
            {profile.email}
          </p>

        </div>

      )}

      <div className="flex flex-col gap-2">

        <Link
          to="/dashboard"
          className={`
            px-4
            py-3
            rounded-lg
            transition
            ${navItem("/dashboard")}
          `}
        >
          🏠 Dashboard
        </Link>

        <Link
          to="/upload"
          className={`
            px-4
            py-3
            rounded-lg
            transition
            ${navItem("/upload")}
          `}
        >
          📄 Upload Resume
        </Link>

        <Link
          to="/history"
          className={`
            px-4
            py-3
            rounded-lg
            transition
            ${navItem("/history")}
          `}
        >
          📊 History
        </Link>

        <button
          onClick={logout}
          className="
          mt-6
          px-4
          py-3
          rounded-lg
          text-left
          text-red-300
          hover:bg-red-900/30
          transition
          "
        >
          🚪 Logout
        </button>

      </div>

    </div>

  );
}