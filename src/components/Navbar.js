import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'

import styled from 'styled-components'

const NavBar = styled.nav`
  box-shadow: none;
  background-color: #111;
  position: fixed;
  width: 100%;
`
const Container = styled.div`
  max-width: 1210px;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
`
const NavMenu = styled.div`
  box-shadow: none;
`
const Logo = styled.div`
  margin: 0 auto;
  width: 80px;
`
const NavbarStart = styled.div`
  max-width: 1100px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 10px auto;
`
const StyledLink = styled(props => <Link {...props} />)`
  flex: 0 1 auto;
  color: #fff;
  position: relative;
  text-align: center;

  &:hover {
    color: #fff;
  }

  &:before, &:after {
    position: absolute;
    top: 0;
    width: 15px;
    height: 100%;
    opacity: 0;
    transition: opacity 0.3s, transform 0.3s;
  }

  &:before {
    text-align: right;
    padding: 0 4px 0 0;
    left: -14px;
    content: '<';
    transform: translateX(10px);
  }

  &:after {
    text-align: left;
    padding: 0 0 0 3px;
    left: 100%;
    content: '/>';
    transform: translateX(-10px);
  }

  &:hover:before, &:focus:before {
    opacity: 1;
    transform: translateX(0px);
  }

  &:hover:after, &:focus:after {
    opacity: 1;
    transform: translateX(0px);
  }
`


const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <NavBar
        role="navigation"
        aria-label="main-navigation"
      >
        <Container>
          <div className="navbar-brand">
            <Logo>
              <Link to="/" title="Logo">
                <img src={logo} alt="We Are Kick" />
              </Link>
            </Logo>
            {/* Hamburger menu */}
            <div
              className={`navbar-burger burger ${this.state.navBarActiveClass}`}
              data-target="navMenu"
              onClick={() => this.toggleHamburger()}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <NavMenu
            id="navMenu"
            className={`${this.state.navBarActiveClass}`}
          >
            <NavbarStart>
              <StyledLink to="/about">
                About
              </StyledLink>
              <StyledLink to="/products">
                Our Work
              </StyledLink>
              <StyledLink to="/blog">
                What We Do
              </StyledLink>
              <StyledLink to="/contact/examples">
                Start a Project
              </StyledLink>
              <StyledLink to="/contact">
                Contact
              </StyledLink>
            </NavbarStart>
          </NavMenu>
        </Container>
      </NavBar>
    )
  }
}

export default Navbar
