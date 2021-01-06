import React, { useState, useEffect } from 'react'
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown,
  Badge,
} from 'react-bootstrap'
import '../../style/header.scss'

import { NavLink } from 'react-router-dom'
import Logo from '../../logo.svg'
import { FiShoppingCart } from 'react-icons/fi'
import { FaCoins } from 'react-icons/fa'
import { FaRegBell } from 'react-icons/fa'
import '../../style/header.scss'
function Header(props) {
  const imagePath = './images/testImage.jpg'

  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg={'primary'} variant="dark">
        <Navbar.Brand href="#home" className="Navbar-Logo">
          <img src={Logo} width="150" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/" exact className="Navbar-Title h5 ">
              行程規劃
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="Navbar-Title h5 ">
              揪團旅行
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login" className="Navbar-Title h5 ">
              達人講座
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              <FaCoins className="Navbar-icon" />
            </Nav.Link>
            <Nav.Link href="#memes">
              <FiShoppingCart className="Navbar-icon" />
            </Nav.Link>
            <Nav.Link href="#mell">
              <FaRegBell className="Navbar-icon" />
              <Badge variant="light">5</Badge>
            </Nav.Link>
            <NavDropdown
              title={
                <figure className="Navebar-figure">
                  <img src={imagePath} alt="User Avatar" />
                </figure>
              }
            >
              <NavDropdown.Item as={NavLink} to="/login">
                會員中心
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to="/home">
                登出
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default Header
