import Link from "next/link";
import { client } from "../../lib/contentful/client";

// export const getStaticProps = async () => {
//   const response = await client.getEntries({ content_type: "project" });

//   return {
//     props: {
//       projects: response.items,
//       revalidate: 60,
//     },
//   };
// };



export default async function Projects() {

  const entries = await client.getEntries({
    content_type: 'project',
  })

  const projects = entries.items



  return (
    <main>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.fields.slug}>
            <Link href={`/projects/${project.fields.slug}`}>
              {project.fields.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
