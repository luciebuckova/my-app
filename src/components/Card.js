export default function Card({ title, description, linkWeb, linkRepo, stack }) {
  return (
    <div className="flex h-full flex-col justify-between rounded-xl border border-neutral-300 p-8 backdrop-blur-md duration-300 hover:scale-105 hover:shadow-xl dark:border-neutral-600">
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="mb-8 flex flex-wrap items-start justify-center gap-2">
          {stack.map((stackItem) => (
            <Flag key={stackItem}> {stackItem} </Flag>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <a
          href={linkWeb}
          className="uppercase text-teal-400 duration-300 hover:text-purple-600"
        >
          🌎 Web
        </a>
        <a
          href={linkRepo}
          className="uppercase text-teal-400 duration-300 hover:text-purple-600"
        >
          📁 Repozitář
        </a>
      </div>
    </div>
  );
}

function Flag({ children }) {
  return (
    <span className="rounded-md bg-purple-300 p-2 dark:bg-purple-600">
      {children}
    </span>
  );
}
