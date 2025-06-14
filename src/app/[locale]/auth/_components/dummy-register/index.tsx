import { useState } from "react";
import { useRegister } from "../../../../../hooks/auth/use-register";

// NOTE: This is a dummy register form for demonstration purposes.
export default function DummyRegister() {
  const { register, isPending, error } = useRegister();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    rePassword: "",
    gender: "male",
    height: "",
    weight: "",
    age: "",
    goal: "Gain weight",
    activityLevel: "level1",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Very basic validation
    if (formData.password !== formData.rePassword) {
      alert("Passwords don't match!");
      return;
    }

    register({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      rePassword: formData.password,
      gender: formData.gender as "male" | "female",
      height: Number(formData.height),
      weight: Number(formData.weight),
      age: Number(formData.age),
      goal: formData.goal,
      activityLevel: formData.activityLevel,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ maxWidth: "500px", margin: "0 auto", padding: "20px" }}
    >
      <h2>Register</h2>

      <div style={{ marginBottom: "15px" }}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="Ele"
          required
          style={{ width: "100%", padding: "8px" }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Tech"
          required
          style={{ width: "100%", padding: "8px" }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="ahmedmutt@gmail.com"
          required
          style={{ width: "100%", padding: "8px" }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Ahmed@123"
          required
          style={{ width: "100%", padding: "8px" }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Confirm Password:</label>
        <input
          type="password"
          name="rePassword"
          value={formData.rePassword}
          onChange={handleChange}
          placeholder="Ahmed@123"
          required
          style={{ width: "100%", padding: "8px" }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Gender:</label>
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={handleChange}
            />{" "}
            Male
          </label>
          <label style={{ marginLeft: "10px" }}>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={handleChange}
            />{" "}
            Female
          </label>
        </div>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Height (cm):</label>
        <input
          type="number"
          name="height"
          value={formData.height}
          onChange={handleChange}
          placeholder="170"
          required
          style={{ width: "100%", padding: "8px" }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Weight (kg):</label>
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          placeholder="70"
          required
          style={{ width: "100%", padding: "8px" }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="25"
          required
          style={{ width: "100%", padding: "8px" }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Goal:</label>
        <select
          name="goal"
          value={formData.goal}
          onChange={handleChange}
          style={{ width: "100%", padding: "8px" }}
        >
          <option value="Gain weight">Gain Weight</option>
          <option value="Lose weight">Lose Weight</option>
          <option value="Maintain weight">Maintain Weight</option>
        </select>
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Activity Level:</label>
        <div>
          <label>
            <input
              type="radio"
              name="activityLevel"
              value="level1"
              checked={formData.activityLevel === "level1"}
              onChange={handleChange}
            />{" "}
            Level 1 (Beginner)
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="activityLevel"
              value="level2"
              checked={formData.activityLevel === "level2"}
              onChange={handleChange}
            />{" "}
            Level 2 (Intermediate)
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="activityLevel"
              value="level3"
              checked={formData.activityLevel === "level3"}
              onChange={handleChange}
            />{" "}
            Level 3 (Advanced)
          </label>
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        style={{
          width: "100%",
          padding: "10px",
          background: isPending ? "#ccc" : "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {isPending ? "Registering..." : "Register"}
      </button>

      {error && (
        <div style={{ color: "red", marginTop: "10px" }}>
          Error: {error.message}
        </div>
      )}
    </form>
  );
}
