import { Col, Row } from "react-bootstrap";
import sotreItems from "../data/items.json";
import StoreItem from "../components/StoreItem";

const Store = () => {
  return (
    <>
      <h1 className='text-dark'>Store</h1>
      <Row md={2} xs={1} lg={3} className='g-3'>
        {sotreItems.map((item) => {
          return (
            <Col key={item.id}>
              <StoreItem {...item}></StoreItem>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Store;
