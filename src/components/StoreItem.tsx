import { Button, Card } from "react-bootstrap";
import { formatCurrency } from "../utilities/formatCurrency";
import { useShoppingCart } from "../contex/shoppingCartContex";

type storeItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl?: string;
};

const StoreItem = ({ id, name, price, imgUrl }: storeItemProps) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);

  return (
    <Card className='h-100'>
      <Card.Img
        src={imgUrl}
        height='200px'
        style={{ objectFit: "cover" }}
      ></Card.Img>
      <Card.Body className='d-flex flex-column'>
        <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
          <span className='f-2'>{name}</span>
          <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
        </Card.Title>
      </Card.Body>
      <div className='p-3'>
        {quantity === 0 ? (
          <Button
            className='w-100 btn-dark'
            onClick={() => increaseCartQuantity(id)}
          >
            + Add To Cart{" "}
          </Button>
        ) : (
          <div
            className='d-flex flex-column align-items-center justify-content-center'
            style={{ gap: ".5rem" }}
          >
            <div
              className='d-flex align-items-center justify-content-center '
              style={{ gap: ".5rem" }}
            >
              <Button
                className='btn-dark'
                onClick={() => increaseCartQuantity(id)}
              >
                +
              </Button>
              <div>
                <span className='fs-2'>{quantity} </span>
                in cart
              </div>
              <Button
                className='btn-dark'
                onClick={() => decreaseCartQuantity(id)}
              >
                -
              </Button>
            </div>
            <Button className='btn-danger' onClick={() => removeFromCart(id)}>
              remove
            </Button>
          </div>
        )}
      </div>
    </Card>
  );
};

export default StoreItem;
