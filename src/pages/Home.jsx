import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-4">
      <button
        onClick={() => navigate("/about")}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Go About
      </button>

      <button
        onClick={() => navigate(-1)}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Back
      </button>
    </div>
  );
};

export default Home;
