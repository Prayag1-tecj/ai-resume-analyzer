

import { Link } from "react-router-dom";

export default function Navbar() {

  const logout = () => {

    localStorage.removeItem("token");

    window.location.href = "/login";
  };

  return (

    <nav className="bg-slate-900 text-white px-8 py-4 flex justify-between">

      <h1 className="text-xl font-bold">
        AI Resume Analyzer
      </h1>

      <div className="flex gap-6">

        <Link to="/dashboard">
          Dashboard
        </Link>

        <Link to="/upload">
          Upload Resume
        </Link>

        <button onClick={logout}>
          Logout
        </button>

      </div>

    </nav>
  );
}