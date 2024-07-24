import RoundedCard from "./card/RoundedCard";

export function Expertise() {
  const expertise = [
    {
      title: "Software Development",
      text: `Experienced in developing full-stack applications with JavaScript frameworks such as Vue.js, React 
      and Python Framework such as Flask. My skills include building user interfaces, creating API endpoints, and integrating APIs. Furthermore, I’m also experienced in writing test cases with Cypress.`,
    },
    {
      title: "DevOps Engineering",
      text: `Skilled in designing scalable systems, automating software deployment pipelines, and managing configurations for application deployment. 
      Proficient in Google Cloud Platform (GCP), Terraform, Shell scripting, and GitHub Actions.`,
    },
    {
      title: "Database Management",
      text: `Experienced in designing database schemas which includes relational database PostgreSQL and analytical database Clickhouse. 
      Proficient in designing database schemas, optimising query performance and monitoring database to ensure everything is running accordingly.`,
    },
  ];
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="text-white mb-5">
        <h1 className="text-2xl">Expertise</h1>
      </div>
      <div className="w-full max-h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        {expertise.map((expertise, idx) => (
          <RoundedCard
            title={expertise.title}
            text={expertise.text}
            key={"expertise-" + idx}
          />
        ))}
      </div>
    </div>
  );
}
