import { gql } from "graphql-request";

export const allProducts = gql`
  query getAllProducts {
    products {
      slug
      name
      id
    }
  }
`;

export const productQuery = gql`
  query GetProduct($slug: String!) {
    product(where: { slug: $slug }) {
      slug
      name
      id
      description
      price
    }
  }
`;