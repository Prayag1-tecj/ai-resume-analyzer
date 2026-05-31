import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Register() {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: ""
  });

  const register = async () => {

    try {

      setLoading(true);

      await api.post(
        "/auth/register/",
        form
      );

      navigate("/login");

    } catch (error) {

      console.error(error);

      alert(
        "Registration Failed"
      );

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
          Create Account
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
          onChange={(e) =>
            setForm({
              ...form,
              username: e.target.value
            })
          }
        />

        <input
          className="
          border
          p-2
          w-full
          mb-3
          rounded
          "
          placeholder="Email"
          onChange={(e) =>
            setForm({
              ...form,
              email: e.target.value
            })
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
          onChange={(e) =>
            setForm({
              ...form,
              password: e.target.value
            })
          }
        />

        <button
          onClick={register}
          disabled={loading}
          className="
          bg-green-600
          text-white
          p-2
          w-full
          rounded
          disabled:bg-gray-400
          "
        >

          {loading
            ? "Creating Account..."
            : "Register"}

        </button>

        <p className="text-center mt-4">

          Already have an account?

          <span
            onClick={() =>
              navigate("/login")
            }
            className="
            text-blue-600
            cursor-pointer
            ml-1
            font-medium
            "
          >
            Login
          </span>

        </p>

      </div>

    </div>
  );
}