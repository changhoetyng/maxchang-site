import RoundedCard from "./card/RoundedCard";

export function Expertise() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="text-white mb-5">
        <h1 className="text-2xl">Expertise</h1>
      </div>
      <div className="w-full max-h-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-items-center">
        <RoundedCard title="Hello" text="hello" />
        <RoundedCard title="Hello" text="hello" />
        <RoundedCard title="Hello" text="hello" />
      </div>
    </div>
  );
}
