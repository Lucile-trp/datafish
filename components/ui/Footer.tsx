import { Logo } from "./logo_white";

export const Footer = () => {
  const author = "Lucile Tripier";
  const version = "v0.0.1";
  return (
    <footer className="bottom-0 w-full h-[50px]">
      <div className="inline-flex items-center w-full px-5 py-3 mx-auto gap-x-3 ">
        <Logo className="w-[22px] h-[22px]"/>
        <p className="items-center mt-0 text-xs text-gray-300">
          © {new Date().getFullYear()} {author} — Contact
        </p>

        <span className="inline-flex items-center justify-center mt-0 ml-auto select-none">
          <p className="text-xs rounded-full px-2 py-0.5 border text-white hover:bg-blue-900">
            version
            <span className="ml-1 font-extrabold">{version}</span>
          </p>
        </span>
      </div>
    </footer>
  );
};
