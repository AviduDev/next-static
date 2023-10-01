import ProjectCard from "../../components/ProjectCard"
import client from "../../lib/graphql-client"
import { allProducts } from "../../lib/graphql-queries";
import Link from "next/link";



const getProducts = async () => {

  const { products } = await client.request(allProducts);
  return products;
};

export function generateMetadata() {
  return { title: "Products" };
}

export default async function Projects() {
  const products = await getProducts();

  return (
    <main>
      <h1>Projects</h1>

      <ul>
        {products.map(({ slug, name, id }) => (
          <ProjectCard title={name} key={id} slug={slug} />
        ))}
      </ul>
    </main>
  );
}
