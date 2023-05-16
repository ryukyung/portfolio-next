import Image from 'next/image';
import Link from 'next/link';

export default function ProjectItem({ data }) {
  const project = {
    title: data.properties.Name.title[0].plain_text,
    github: data.properties.GitHub.url,
    description: data.properties.Description.rich_text[0].plain_text,
    imgSrc: data.cover.file?.url || data.cover.external.url,
    tags: data.properties.Tags.multi_select,
    start: data.properties.WorkPeriod.date.start,
    end: data.properties.WorkPeriod.date.end,
  };

  return (
    <div className="project-card">
      <Image
        src={project.imgSrc}
        alt="cover image"
        width="0"
        height="0"
        style={{ objectFit: 'cover' }}
        quality={100}
        alt="cover image"
        sizes="100vw"
        className="rounded-t-xl w-full h-[200px]"
      />
      <div className="p-4 flex flex-col w-full">
        <h1 className="text-2xl font-bold">{project.title}</h1>
        <p className="mt-4">{project.description}</p>
        <Link href={project.github}>GitHub</Link>
        <p className="mt-4">
          {project.start} ~ {project.end}
        </p>
        <div className="flex items-start mt-2 ">
          {project.tags.map((tag) => (
            <h1
              key={tag.id}
              className="px-2 py-1 mr-2 rounded-md bg-sky-200 dark:bg-sky-700 w-30">
              {tag.name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
