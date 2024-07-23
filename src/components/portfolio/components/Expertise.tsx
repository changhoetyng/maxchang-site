import RoundedCard from "./card/RoundedCard";

export function Expertise() {
  const expertise = [
    {
      title: "Software Development",
      text: "I'm experienced in developing full-stack applications. I'm experienced with React, Vue on the front-end, and Flask and Express on the back-end.",
    },
    {
      title: "DevOps Engineering",
      text: `Experienced in designing scalable systems, automating software deployment pipelines, and managing configurations.
       Proficient in Google Cloud Platform (GCP), Terraform, Shell scripting, and GitHub Actions.`,
    },
    {
      title: "Database Management",
      text: `My experience includes cleaning and making sure the data is fit .`,
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
