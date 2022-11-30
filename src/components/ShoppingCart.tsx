import { useState } from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../contex/shoppingCartContex";
import CartItem from "../components/CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";

type shoppingCartProps = {
  isCartOpen: boolean;
};

const ShoppingCart = ({ isCartOpen }: shoppingCartProps) => {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isCartOpen} onHide={closeCart} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item}></CartItem>;
          })}
        </Stack>
        <h1 className='pt-4 fs-4 fw-bold text-end'>
          Total:{" "}
          {formatCurrency(
            cartItems.reduce((total, item) => {
              const product =
                storeItems.find((prod) => prod.id === item.id)?.price || 0;
              return total + product * item.quantity;
            }, 0)
          )}
        </h1>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
