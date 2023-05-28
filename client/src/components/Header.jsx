import React from "react";
// import { Route } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
// import SearchBox from "./SearchBox";
// import { logout } from "../actions/userActions";

const Header = () => {
  // const dispatch = useDispatch()

  // const userLogin = useSelector((state) => state.userLogin)
  // const { userInfo } = userLogin

  // const logoutHandler = () => {
  //   dispatch(logout())
  // }

  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link to="/">
            <Navbar.Brand>ProShop</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* <Route render={({ history }) => <SearchBox history={history} />} /> */}
            <Nav className="ml-auto">
              <Link to="/cart">
                <div>
                  <i className="fas fa-shopping-cart"></i> Cart
                </div>
              </Link>
              {/* {userInfo ? ( */}
              {/* <NavDropdown title={userInfo.name} id="username"> */}
              <NavDropdown id="username">
                <Link to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </Link>
                {/* <NavDropdown.Item onClick={logoutHandler}> */}
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </NavDropdown>
              {/* ) : ( */}
              <Link to="/login">
                <div>
                  <i className="fas fa-user"></i> Sign In
                </div>
              </Link>
              {/* )} */}
              {/* {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <Link to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </Link>
                  <Link to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </Link>
                  <Link to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </Link>
                </NavDropdown>
              )} */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
