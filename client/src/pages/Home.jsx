import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
// import { useGetProductsQuery } from "../redux/productSlice";
import { useGetProductsQuery } from "../redux/productsApiSlice";
// import Paginate from "../components/Paginate";
// import ProductCarousel from "../components/ProductCarousel";
// import Meta from "../components/Meta";

const Home = () => {
  // const { pageNumber, keyword } = useParams();

  const { data, isLoading, error } = useGetProductsQuery({
    // keyword,
    // pageNumber,
  });

  return (
    <>
      {/* {!keyword ? (
        <ProductCarousel />
      ) : (
        <Link to="/" className="btn btn-light mb-4">
          Go Back
        </Link>
      )} */}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error?.data?.message || error.error}</Message>
      ) : (
        <>
          {/* <Meta /> */}
          <h1>Latest Products</h1>
          <Row>
            {data?.products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          {/* <Paginate pages={data.pages} page={data.page} keyword={keyword ? keyword : ""} /> */}
        </>
      )}
    </>
  );
};

export default Home;
