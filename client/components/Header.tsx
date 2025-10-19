import { ArrowUpRight } from "lucide-react";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-10 px-4">
      <nav className="flex items-center justify-between gap-8 px-5 py-5 rounded-full border-2 border-white/20 bg-black/15 backdrop-blur-[40px] shadow-lg max-w-[755px] w-full">
        <div className="flex items-center gap-2">
          <svg
            width="142"
            height="27"
            viewBox="0 0 142 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.186 0.598137H17.8147V10.4992H27.4817V0.608386H33.136V26.1143H27.5073V16.2269H17.8403V26.1177H12.186V0.598137Z"
              fill="white"
            />
            <path
              d="M34.0284 16.1423V10.5248H38.8337C39.4401 10.5248 39.6929 10.7811 39.6929 11.3892V15.3951C39.6929 15.9007 39.4248 16.1945 38.9482 16.1945C37.3509 16.2014 35.7571 16.1945 34.1582 16.1945C34.124 16.1945 34.1017 16.1945 34.0284 16.1945V16.1423Z"
              fill="white"
            />
            <path
              d="M11.2776 16.198C9.7299 16.198 8.20956 16.2048 6.68409 16.1945C6.27752 16.1945 5.98883 15.8973 5.98883 15.4942C5.98029 14.0763 5.98029 12.655 5.98883 11.2372C5.98883 10.8272 6.27581 10.5334 6.67725 10.53C8.20272 10.5197 9.72649 10.5266 11.2776 10.5266V16.1997V16.1963V16.198Z"
              fill="white"
            />
            <path
              d="M135.608 4.86909L129.403 14.9336V21.8468H125.788V14.9336L119.583 4.86909H123.638L127.596 11.8068L131.553 4.86909H135.608Z"
              fill="white"
            />
            <path
              d="M114.443 4.86909H118.083V21.8468H114.443V14.8114H107.969V21.8468H104.329V4.86909H107.969V11.5625H114.443V4.86909Z"
              fill="white"
            />
            <path
              d="M102.45 4.86909V8.09364H97.4423V21.8468H93.8025V8.09364H88.7947V4.86909H102.45Z"
              fill="white"
            />
            <path
              d="M83.112 18.6223H90.8802V21.8468H79.4721V4.86909H83.112V18.6223Z"
              fill="white"
            />
            <path
              d="M69.1322 18.6956H77.0225V21.8468H65.4923V4.86909H76.876V8.02035H69.1322V11.6358H75.9721V14.787H69.1322V18.6956Z"
              fill="white"
            />
            <path
              d="M58.7158 4.86909H62.3556V21.8468H58.7158V14.8115H52.2423V21.8468H48.6024V4.86909H52.2423V11.5625H58.7158V4.86909Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="hidden md:flex items-center gap-7">
          <a
            href="#about"
            className="text-white font-semibold text-base leading-[22.4px] tracking-[0.17px] hover:text-helthy-lemon transition-colors"
          >
            About Us
          </a>
          <a
            href="#contact"
            className="text-white font-semibold text-base leading-[22.4px] tracking-[0.17px] hover:text-helthy-lemon transition-colors"
          >
            Contact Us
          </a>
          <a
            href="#blog"
            className="text-white font-semibold text-base leading-[22.4px] tracking-[0.17px] hover:text-helthy-lemon transition-colors"
          >
            Blogs
          </a>
          <button className="flex items-center gap-5 px-6 py-2 pl-6 pr-2 rounded-full border-2 border-white/30 bg-white/10 hover:bg-white/20 transition-all">
            <span className="text-white font-semibold text-base leading-[22.4px] tracking-[0.17px]">
              Download App
            </span>
            <div className="flex items-center justify-center w-[34px] h-[34px] rounded-full bg-white/35">
              <ArrowUpRight className="w-6 h-6 text-white" strokeWidth={3} />
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}
