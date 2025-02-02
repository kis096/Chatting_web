import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useProductContext } from './Contex/ContextProduct';
import PageNavigation from './PageNavigation';
import MyImage from './MyImage';

const API = "https://api.pujakaitem.com/api/products";

function SingleProduct() {
  const { getSingleProduct, singleProduct, isSingleLoading } = useProductContext();
  const { id } = useParams();

  const {
    id: alias = "",
    name = "",
    company = "",
    price = 0,
    description = "",
    category = "",
    stock = 0,
    stars = 0,
    review = 0,
    image = [],
  } = singleProduct || {};

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, [id]);

  if (isSingleLoading) {
    return <div className="page_loading">Loading.....</div>;
  }

  return (
    <Wrapper>
      <PageNavigation title={name} />
      <div className="container">
        <div className="grid grid-two-column">
          {/* Product Image */}
          <div className="product_images">
            <MyImage imgs={image} />
          </div>
          {/* Additional Product Data */}
          <div className="product-data">
            <h2>{name}</h2>
            <p className="product-data-price">Price: ₹{price}</p>
            <p>{description}</p>
            <p>Category: {category}</p>
            <p>Company: {company}</p>
            <p>In Stock: {stock > 0 ? "Yes" : "No"}</p>
            <p>Stars: {stars} ({review} reviews)</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  .container {
    padding: 9rem 0;
  }
  .product-data {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    h2 {
      font-size: 2.4rem;
    }
    .product-data-price {
      font-weight: bold;
      font-size: 1.8rem;
    }
  }
  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
