import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const Nav = () => {
  const [show, setShow] = useState("false");
  const { pathname } = useLocation();
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const listener = () => {
    if (window.screenY > 50) {
      setShow("true");
    } else {
      setShow("false");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => {
      window.removeEventListener("scroll", listener);
    };
  }, []);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    navigate(`/search?q=${e.target.value}`);
  };

  return (
    <NavWrapper show={show}>
      <Logo>
        <img
          alt="logo"
          src="public/images/apple-logo.png"
          onClick={() => (window.location.href = "/")}
        />
      </Logo>
      {pathname === "/" ? (
        <Login>Login</Login>
      ) : (
        <Input
          value={searchValue}
          className="nav_input"
          type="text"
          onChange={handleChange}
          placeholder="영화를 검색해주세요."
        />
      )}
    </NavWrapper>
  );
};

const Input = styled.input`
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: rgba(0, 0, 0, 0.582);
  border-radius: 5px;
  color: white;
  padding: 5px;
  border: 1px solid #656565;
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: #f9f9f9;
    color: #000;
    border-color: transparent;
  }
`;

const NavWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: ${(props) =>
    props.show === "true" ? "#000000" : "#000000"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 70px;
  font-size: 0;
  display: inline-block;
  margin-bottom: 10px;
  img {
    display: block;
    width: 100%;
  }
  cursor: pointer;
`;
export default Nav;
