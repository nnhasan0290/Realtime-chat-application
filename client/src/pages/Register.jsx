import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { register_host } from "../utils/apiRoutes";
console.log(register_host);
function Register() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  

  // methods ======================================
  const submitHandle = async(e) => {
    e.preventDefault();
    handleValidation();
    const {data} = await axios.post(register_host, user);
    console.log(data)
  };

  const handleValidation = () => {
    const { name, email, password, confirmPassword } = user;
    if (password !== confirmPassword || password.length < 8) {
      toast.error("Password need to be matched and contained more than 7 characters");
      return false;
    } else if (name.length < 4) {
      toast.error("Name should contain at least 4 characters");
      return false;
    } else if (email.length < 8) {
      toast.error("Email should contain at least 8 characters");
      return false;
    }
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <FormContainer>
        <form action="" onSubmit={submitHandle}>
          <div className="brand">
            <img src="/logo192.png" alt="" width={50} height={50} />
            <h1>Msg</h1>
          </div>
          <input
            onChange={handleChange}
            value={user.name}
            type="text"
            name="name"
            placeholder="name"
            required
          />
          <input
            onChange={handleChange}
            value={user.email}
            type="email"
            placeholder="email"
            name="email"
            required
          />
          <input
            onChange={handleChange}
            value={user.password}
            type="password"
            name="password"
            placeholder="password"
          />
          <input
            onChange={handleChange}
            value={user.confirmPassword}
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
          />
          <button type="submit">Create User</button>
          <span>
            Already have an account ? <Link to="/login">Login</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer position= "bottom-right" />
    </div>
  );
}
const FormContainer = styled.div`
  background-color: dodgerblue;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    background-color: #00000076;
    padding: 3rem 5rem;
    border-radius: 2rem;
  }
  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  input {
    padding: 1rem;
    border-radius: 0.4rem;
    border: none;
    font-size: 1rem;
    width: 100%;
    &:focus {
      outline: none;
    }
  }
  button {
    padding: 1rem;
    border-radius: 0.4rem;
    width: 100%;
    font-size: 1.2rem;
    cursor: pointer;
    border: none;
    &:hover {
      background-color: dodgerblue;
      color: white;
    }
    transition: all 0.3s ease;
  }
`;
export default Register;
