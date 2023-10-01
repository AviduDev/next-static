import { GraphQLClient } from "graphql-request"
import Link from "next/link"
import { client } from "@/lib/graphql-client";
import { productQuery } from "@/lib/graphql-queries";



const getProduct = async (params) => {
  const { product } = await client.request(
  productQuery,
    {
      slug: params.slug,
    }
  );

  return product;
};

export default async function Project({ params }) {
  const product = await getProduct(params);

    return (
      <main>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.price / 100}</p>
      </main>
    );
}