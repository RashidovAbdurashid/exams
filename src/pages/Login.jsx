import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("isAuth", "true");

    navigate("/dashboard");
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <div className="border p-8 rounded-2xl shadow w-[350px]">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>

        <input
          type="text"
          placeholder="Username"
          className="border w-full p-2 rounded mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-2 rounded mb-4"
        />

        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white w-full py-2 rounded"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
