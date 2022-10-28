import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { login_host } from "../utils/apiRoutes";


function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // methods ======================================
  const submitHandle = async (e) => {
    e.preventDefault();
    if (handleValidation()) {
      const { email, password } = user;
      console.log(email, password);
      try {
        const { data } = await axios.post(login_host, {
          email,
          password,
        });
        if(data.success){
          localStorage.setItem("user", JSON.stringify(data.user));
          navigate("/")
        }
      } catch (error) {
        console.log(error);
        toast.error("Something wrong with your email or password")
      }
    }

  };

  const handleValidation = () => {
    const { email, password } = user;
     if (email === "" ) {
      toast.error("Email is required");
      return false;
    }
    if(password === ""){
      toast.error("password is required")
      return false;
    }
    return true;
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
          <button type="submit">Login</button>
          <span>
            Don't have an account ? <Link to="/login">Register</Link>
          </span>
        </form>
      </FormContainer>
      <ToastContainer position="bottom-right" />
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
export default Login;
