import React, { useContext } from "react"
import styled from "styled-components"
import logo from "../images/logo.svg"
import { GoThreeBars } from "react-icons/go"
import { Link } from "gatsby"
import NavLink from "./NavLink"

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="Logo Pérola Negra Marcenaria"/>
          </Link>
          <button className="toggle-btn">
            <GoThreeBars size={30} />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button>Serviços</button>
          </li>
          <li>
            <button>Empresa</button>
          </li>
          <li>
            <button>Suporte</button>
          </li>
        </ul>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.nav`
  position: relative;
  z-index: 1;
  height: 5rem;
  display: flex;
  align-items: center;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
  }
  .nav-header {
    color: var(--clr-white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 5rem;
    }
    .toggle-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      border: transparent;
      color: var(--clr-white);
      background: transparent;
      cursor: pointer;
      transition: var(--transition);
      &:hover {
        background: var(--clr-primary-3);
      }
    }
  }
  .nav-links {
    display: none;
  }
  @media (min-width: 800px) {
    .nav-header {
      .toggle-btn {
        display: none;
      }
      img {
        width: 6rem;
      }
    }

    .nav-center {
      display: flex;
      margin-top: 2rem;
      justify-content: center;
      gap: 0 2rem;
      grid-gap: 0 4rem;
      align-items: center;
    }
    .nav-links {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      max-width: 500px;
    }
    li {
      padding: 1rem 0;
      position: relative;
    }
    button {
      color: var(--clr-white);
      background: transparent;
      border: transparent;
      font-size: 1.1rem;
      letter-spacing: 2px;
      font-weight: 400;
      padding: 10px 20px;
      width: 100%;
      text-transform: capitalize;
      position: relative;
    }
  }
`

export default Navbar
