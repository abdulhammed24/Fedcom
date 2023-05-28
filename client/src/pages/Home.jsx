import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import { useGetProductsQuery } from "../redux/productSlice";
// import Paginate from "../components/Paginate";
// import ProductCarousel from "../components/ProductCarousel";
// import Meta from "../components/Meta";

// const Home = ({ match }) => {
const Home = () => {
  const { data = [], error, isLoading } = useGetProductsQuery();
  console.log(data);

  return (
    <>
      {/* <Meta />
      {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light">
          Go Back
        </Link>
      )} */}
      <h1>Latest Products</h1>

      {error ? (
        <Message variant="danger">{error}</Message>
      ) : isLoading ? (
        <Loader />
      ) : data ? (
        <>
          <Row>
            {data?.products?.map((product, id) => {
              return (
                <Col key={id} sm={12} md={6} lg={4} xl={3}>
                  <Product product={product} />
                </Col>
              );
            })}
          </Row>
          {/* <Paginate pages={pages} page={page} keyword={keyword ? keyword : ""} /> */}
        </>
      ) : null}
    </>
  );
};

export default Home;
