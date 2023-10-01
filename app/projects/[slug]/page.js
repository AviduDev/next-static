import { client } from "../../../lib/contentful/client";
import RichText from "../../../lib/contentful/RichText"

export async function generateStaticParams() {
  const entries = await client.getEntries({
    content_type: "project",
  });
  const projects = entries.items;
  return projects.map((project) => ({ slug: project.fields.slug }));
}

export default async function Project({ params }) {

  const entries = await client.getEntries({
    content_type: 'project',
    'fields.slug': params.slug,
  })

  const project = entries.items[0]

  return (
    <main>
      <h1>project</h1>
      <h2>{project.fields.title}</h2>
    </main>
  );
}