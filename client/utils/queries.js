import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
    }
  }
`;

export const QUERY_PRODUCT = gql`
  query Product($_id: ID!){
    product(_id: $_id){
      _id
      name
      description
      price
      quantity
      image
      category {
        name
      }
    }
  }
`

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ProductInput]) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  query getAllProducts {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
  query getCategories {
    categories {
      _id
      name
    }
  }
`;

export const QUERY_USER = gql`
  {
    user {
      username
      email
      orders {
        _id
        products {
          _id
          name
          description
          price
          quantity
          image
        }
      }
    }
  }
`;
