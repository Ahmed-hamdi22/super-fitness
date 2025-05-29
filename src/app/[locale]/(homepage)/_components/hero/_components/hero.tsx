// export default function Hero() {
//   return <h1>hero</h1>;
// }
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div>
      <p>
        name: {user.firstName} {user.lastName}
      </p>
      <p>email: {user.email}</p>

      <button onClick={handleLogout} className="bg-red-500 text-white">
        Logout
      </button>
    </div>
  );
}
