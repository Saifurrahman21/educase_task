import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";
import { validateRegisterForm } from "../utils/validateRegisters";
import "../styles/register.css";

const CreateAccount = () => {
  const navigate = useNavigate();

  const [agency, setAgency] = useState("yes");
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
  });

  const handleChange = (e) => {
    setError("");
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    const msg = validateRegisterForm(form);

    if (msg) {
      setError(msg);
      return;
    }

    const userData = { ...form, agency };
    localStorage.setItem("user", JSON.stringify(userData));

    navigate("/login");
  };

  return (
    <div className="signup-fullscreen">
      <div className="mobile-frame">
        <div className="form-wrapper">
          <h2>
            Create your <br /> PopX account
          </h2>

          {error && <p className="error-text">{error}</p>}

          <Input
            label="Full Name*"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />

          <Input
            label="Phone number*"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />

          <Input
            label="Email address*"
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />

          <Input
            label="Password*"
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          <Input
            label="Company name"
            name="company"
            placeholder="Company Name"
            value={form.company}
            onChange={handleChange}
          />

          <div className="radio-section">
            <p>Are you an Agency?*</p>

            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  checked={agency === "yes"}
                  onChange={() => setAgency("yes")}
                />
                Yes
              </label>

              <label>
                <input
                  type="radio"
                  checked={agency === "no"}
                  onChange={() => setAgency("no")}
                />
                No
              </label>
            </div>
          </div>
        </div>

        <div className="bottom-action">
          <Button text="Create Account" onClick={handleRegister} />
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
