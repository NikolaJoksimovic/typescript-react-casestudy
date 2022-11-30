import { Button, Card, CardImg, Stack } from "react-bootstrap";
import { useShoppingCart } from "../contex/shoppingCartContex";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type cartItemProps = {
  id: number;
  quantity: number;
};

const CartItem = ({ id, quantity }: cartItemProps) => {
  const item = storeItems.find((item) => item.id === id);
  const { removeFromCart } = useShoppingCart();

  if (item == null) return null;
  const totalPrice = quantity * item.price;
  return (
    <Stack
      direction='horizontal'
      gap={2}
      className='d-flex justify-content-between'
    >
      <div className='d-flex align-items-center'>
        <img src={item.imgUrl} style={{ width: "125px" }} alt='' />
        <div className='d-flex flex-column align-items-center ms-3'>
          <div className='text-dark'>
            <span className='fs-5'>{item.name} </span>x{quantity}
          </div>
          <div className='text-dark'>{formatCurrency(item.price)}</div>
        </div>
      </div>
      <div className='d-flex justfy-content-center align-items-center '>
        <span>{formatCurrency(totalPrice)}</span>
        <Button
          variant='outline-danger'
          className='ms-2'
          onClick={() => removeFromCart(id)}
        >
          &times;
        </Button>
      </div>
    </Stack>
  );
};
export default CartItem;
