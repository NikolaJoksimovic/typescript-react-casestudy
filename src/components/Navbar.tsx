import { Navbar as NavbarBs, Nav, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useShoppingCart } from "../contex/shoppingCartContex";

const Navbar = () => {
  const { cartQuantity, openCart } = useShoppingCart();
  return (
    <NavbarBs sticky='top' className='bg-white shadow-lg mb-3 '>
      <Container>
        <Nav>
          <Nav.Item>
            <Nav.Link to='/' as={NavLink}>
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to='/about' as={NavLink}>
              About
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to='/store' as={NavLink}>
              Store
            </Nav.Link>
          </Nav.Item>
        </Nav>
        {cartQuantity > 0 && (
          <Button
            onClick={() => openCart()}
            style={{ width: "3rem", height: "3rem", position: "relative" }}
            variant='outline-dark'
            className='rounded-circle d-flex align-items-center justify-content-center'
          >
            <AiOutlineShoppingCart></AiOutlineShoppingCart>
            <div
              className='rounded-circle bg-danger d-flex align-items-center justify-content-center'
              style={{
                position: "absolute",
                bottom: "0",
                right: "0",
                height: "1.4rem",
                width: "1.4rem",
                transform: "translate(25%,25%)",
                color: "white",
              }}
            >
              {cartQuantity}
            </div>
          </Button>
        )}
      </Container>
    </NavbarBs>
  );
};

export default Navbar;
