import Head from 'next/head';
import Layout from '@/components/layout';
import ProjectItem from '@/components/projects/project-item';
import { TOKEN, DATABASE_ID } from '../config';

export default function Projects({ projects }) {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen px-5 py-24 mb-10 px-6">
        <Head>
          <title>gaori's portfolio</title>
          <meta name="description" content="gaori's portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="grid grid-cols-1 md:grid-cols-2 m-6 py-10 gap-8 w-full">
          {projects.results.map((project) => (
            <ProjectItem key={project.id} data={project} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

// 빌드 타임에 호출
export async function getStaticProps() {
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Notion-Version': '2022-06-28',
      'content-type': 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
    body: JSON.stringify({
      sorts: [
        {
          property: 'Name',
          direction: 'ascending',
        },
      ],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );
  const projects = await res.json();
  const projectNames = projects.results.map(
    (project) => project.properties.Name.title[0].plain_text
  );

  return {
    props: { projects }, // will be passed to the page component as props
  };
}
