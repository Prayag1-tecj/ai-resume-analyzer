import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Login() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    }

  }, [navigate]);

  const login = async () => {

    try {

      setLoading(true);

      const res = await api.post(
        "/login/",
        {
          username,
          password
        }
      );

      localStorage.setItem(
        "token",
        res.data.access
      );

      navigate("/dashboard");

    } catch (error) {

      console.error(error);

      alert("Invalid username or password");

    } finally {

      setLoading(false);
    }
  };

  return (

    <div
      className="
      min-h-screen
      flex
      justify-center
      items-center
      bg-gray-100
      "
    >

      <div
        className="
        bg-white
        p-8
        rounded-xl
        shadow-lg
        w-96
        "
      >

        <h1
          className="
          text-3xl
          font-bold
          mb-6
          text-center
          "
        >
          AI Resume Analyzer
        </h1>

        <input
          className="
          border
          p-2
          w-full
          mb-3
          rounded
          "
          placeholder="Username"
          value={username}
          onChange={(e) =>
            setUsername(e.target.value)
          }
        />

        <input
          type="password"
          className="
          border
          p-2
          w-full
          mb-4
          rounded
          "
          placeholder="Password"
          value={password}
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={login}
          disabled={loading}
          className="
          bg-blue-600
          hover:bg-blue-700
          text-white
          p-2
          w-full
          rounded
          "
        >
          {loading
            ? "Logging In..."
            : "Login"}
        </button>

        <p className="text-center mt-4">

          Don't have an account?

          <span
            onClick={() =>
              navigate("/")
            }
            className="
    text-blue-600
    cursor-pointer
    ml-1
    font-medium
    "
          >
            Register
          </span>

        </p>

      </div>

    </div>
  );
}


