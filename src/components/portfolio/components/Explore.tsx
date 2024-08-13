export default function Explore() {
  return (
    <div className="text-white flex flex-col">
      <h1 style={{ fontSize: "50px" }} className="font-bold">
        Max Chang
      </h1>
      <h1 style={{ fontSize: "40px" }} className="font-semibold mt-3">
        Explore
      </h1>
      {/* <a
        className="mt-5 w-fit underline hover:text-main-pink"
        style={{ fontSize: "25px" }}
        href="/blogs/1"
      >
        Blog
      </a> */}
      <a
        href="https://drive.google.com/file/d/1p14TXTrO4ckIDP4We292-3CDC2tpv-0N/view?usp=drive_link"
        target="_blank"
        className="w-fit mt-4 underline hover:text-main-pink"
        style={{ fontSize: "25px" }}
      >
        Resume
      </a>
      <a
        href="https://github.com/changhoetyng"
        target="_blank"
        className="w-fit mt-4 underline hover:text-main-pink"
        style={{ fontSize: "25px" }}
      >
        Github
      </a>
      <a
        href="https://www.linkedin.com/in/hoe-tyng-chang/"
        target="_blank"
        className="w-fit mt-4 underline hover:text-main-pink"
        style={{ fontSize: "25px" }}
      >
        LinkedIn
      </a>
    </div>
  );
}
