export default function PortfolioHeaders() {
  return (
    <div className="flex justify-around pt-4 pb-4 text-center sticky top-0">
      <h1 className="font-medium text-xl text-white cursor-pointer">
        Max Chang
      </h1>
      <div className="flex flex-row">
        <a
          href="#about"
          className="px-6 pt-1 pb-1 bg-gradient-to-br text-white hover:text-main-color hover:from-main-color from-0% hover:via-main-blue via-5% hover:to-main-purple rounded-full to-90% font-bold"
        >
          Project
        </a>
        <a
          href="/blogs"
          className="px-6 pt-1 pb-1 bg-gradient-to-br text-white hover:text-main-color hover:from-main-color from-0% hover:via-main-blue via-5% hover:to-main-purple rounded-full to-90% font-bold"
        >
          Blog
        </a>
        <a
          href="#about"
          className="px-6 pt-1 pb-1 bg-gradient-to-br text-white hover:text-main-color hover:from-main-color from-0% hover:via-main-blue via-5% hover:to-main-purple rounded-full to-90% font-bold"
        >
          Resume
        </a>
      </div>
    </div>
  );
}
