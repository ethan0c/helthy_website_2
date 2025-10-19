import { Mail, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-helthy-black pt-20 pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 mb-16 max-w-7xl mx-auto">
          <div className="flex flex-col gap-18 max-w-[216px]">
            <p className="text-white/70 text-sm font-light leading-[20px]">
              Helthy is a fitness app that makes staying active simple and
              enjoyable.
            </p>

            <div className="flex flex-col gap-7 mt-18">
              <div className="flex items-center gap-4">
                <div className="w-5 h-5 flex items-center justify-center opacity-50">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.8278 9.62993L16.9883 3.63135H15.7654L11.2846 8.83985L7.70574 3.63135H3.578L8.98992 11.5075L3.578 17.798H4.80094L9.53284 12.2977L13.3123 17.798H17.44L11.8278 9.62993Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <Mail className="w-5 h-5 text-white opacity-50" />
                <Instagram className="w-5 h-5 text-white opacity-50" />
              </div>

              <div className="flex flex-col gap-4">
                <span className="text-white/50 text-xs font-normal leading-4">
                  © 2025 Helthy. All rights reserved.
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    className="text-neutral-300 text-xs font-light leading-4 border-b border-neutral-700 hover:text-white transition-colors"
                  >
                    Terms
                  </a>
                  <span className="text-white/50 text-xs">-</span>
                  <a
                    href="#"
                    className="text-neutral-300 text-xs font-light leading-4 border-b border-neutral-700 hover:text-white transition-colors"
                  >
                    Privacy
                  </a>
                  <span className="text-white/50 text-xs">-</span>
                  <button className="text-neutral-300 text-xs font-light leading-4 border-b border-neutral-700 hover:text-white transition-colors text-left">
                    Manage Cookies
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 flex-1">
            <h3 className="text-white text-sm font-medium leading-5">
              Newsletter
            </h3>
            <p className="text-white/70 text-sm font-light leading-[20px] max-w-[215px]">
              Get the latest updates, news, and special offers. No spam, just
              quality content.
            </p>
            <div className="flex flex-col gap-4 max-w-[224px]">
              <input
                type="email"
                placeholder="Email address"
                className="px-4 py-3 rounded-xl border border-neutral-800/50 bg-white/5 text-white/50 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-helthy-lemon"
              />
              <button className="px-8 py-2 rounded-full bg-gradient-to-b from-white/10 to-white/0 border-t border-white/30 bg-helthy-lemon shadow-lg hover:shadow-xl transition-all">
                <span className="text-helthy-black text-center text-xs font-medium leading-4">
                  Subscribe
                </span>
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white text-sm font-medium leading-5 px-3">
              Company
            </h3>
            <div className="flex flex-col">
              <a
                href="#"
                className="px-2 py-2.5 text-white/70 text-sm font-light leading-5 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                About Us
              </a>
              <a
                href="#"
                className="px-2 py-2.5 text-white/70 text-sm font-light leading-5 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                Blog
              </a>
              <a
                href="#"
                className="px-2 py-2.5 text-white/70 text-sm font-light leading-5 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                Contact US
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white text-sm font-medium leading-5 px-3">
              Product
            </h3>
            <div className="flex flex-col">
              <a
                href="#"
                className="px-2 py-2.5 text-white/70 text-sm font-light leading-5 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                Download App
              </a>
              <a
                href="#"
                className="px-2 py-2.5 text-white/70 text-sm font-light leading-5 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                Pricing
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white text-sm font-medium leading-5 px-3">
              Legal
            </h3>
            <div className="flex flex-col">
              <a
                href="#"
                className="px-2 py-2.5 text-white/70 text-sm font-light leading-5 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="px-2 py-2.5 text-white/70 text-sm font-light leading-5 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <svg
            width="1282"
            height="249"
            viewBox="0 0 1282 249"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[1281px]"
          >
            <path
              d="M62.293 0.758301H118.063V96.8113H213.845V0.857735H269.869V248.299H214.099V152.378H118.317V248.332H62.293V0.758301Z"
              fill="#CDFB50"
            />
            <path
              d="M278.705 151.557V97.0601H326.317C332.326 97.0601 334.831 99.5459 334.831 105.446V144.308C334.831 149.213 332.173 152.064 327.451 152.064C311.626 152.13 295.834 152.064 279.992 152.064C279.653 152.064 279.432 152.064 278.705 152.064V151.557Z"
              fill="#CDFB50"
            />
            <path
              d="M53.2885 152.097C37.9539 152.097 22.8901 152.164 7.77545 152.064C3.74715 152.064 0.886713 149.181 0.886713 145.27C0.802085 131.515 0.802085 117.726 0.886713 103.971C0.886713 99.994 3.73022 97.1436 7.70775 97.1105C22.8223 97.011 37.92 97.0773 53.2885 97.0773V152.114V152.081V152.097Z"
              fill="#CDFB50"
            />
            <path
              d="M1281.39 42.1919L1220.09 139.831V206.898H1184.36V139.831L1123.06 42.1919H1163.12L1202.23 109.496L1241.33 42.1919H1281.39Z"
              fill="#CDFB50"
            />
            <path
              d="M1072.27 42.1919H1108.24V206.898H1072.27V138.646H1008.31V206.898H972.347V42.1919H1008.31V107.126H1072.27V42.1919Z"
              fill="#CDFB50"
            />
            <path
              d="M953.769 42.1919V73.4742H904.288V206.898H868.324V73.4742H818.844V42.1919H953.769Z"
              fill="#CDFB50"
            />
            <path
              d="M762.7 175.616H839.455V206.898H726.736V42.1919H762.7V175.616Z"
              fill="#CDFB50"
            />
            <path
              d="M624.572 176.327H702.534V206.898H588.608V42.1919H701.086V72.7633H624.572V107.837H692.155V138.409H624.572V176.327Z"
              fill="#CDFB50"
            />
            <path
              d="M521.651 42.1919H557.615V206.898H521.651V138.646H457.688V206.898H421.725V42.1919H457.688V107.126H521.651V42.1919Z"
              fill="#CDFB50"
            />
          </svg>
        </div>
      </div>
    </footer>
  );
}
