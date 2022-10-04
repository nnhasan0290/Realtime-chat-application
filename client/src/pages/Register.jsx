import styled from "styled-components";
import {Link} from "react-router-dom";
function Register() {
  return (
    <div>
      <FormContainer>
        <form action="">
          <div className="brand">
            <img src="/logo192.png" alt="" width={50} height={50}/>
            <h1>Msg</h1>
          </div>
          <input type="text" name="text" placeholder="name"/>
          <input type="email" placeholder="email" name="email" />
          <input type="password" name="password" placeholder="password"/>
          <input type="password" name="confirmPassword" placeholder="confirm password"/>
          <button type="submit">Submit</button>
          <span>Already have an account ? <Link to="/login">Login</Link></span>
        </form>
      </FormContainer>
    </div>
  );
}
const FormContainer = styled.div`
  background-color: dodgerblue;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  form{
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
    gap: 2rem;
    background-color: #00000076;
    padding: 3rem 5rem;
    border-radius: 2rem;
  }
  .brand{
    display: flex;
    align-items:center;
    justify-content: center;
    gap: 1rem;
  }
  input{
    padding: 1rem;
    border-radius: 0.4rem;
    border: none;
    font-size: 1rem;
    width: 100%;
    &:focus{
      outline: none;
    }
  }
  button{
    padding: 1rem;
    border-radius: 0.4rem;
    width: 100%;
    font-size: 1.2rem;
    cursor: pointer;
    border: none;
  }

`;
export default Register;
