import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import logo from "@/app/icon.png";

// Add the Footer to the bottom of your landing page and more.
// The support link is connected to the config.js file. If there's no config.resend.supportEmail, the link won't be displayed.

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 via-teal-500 to-green-400 text-white border-t border-base-content/10">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <div className=" flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="/#"
              aria-current="page"
              className="flex gap-2 justify-center md:justify-start items-center"
            >
              <Image
                src={logo}
                alt={`${config.appName} logo`}
                priority={true}
                className="w-6 h-6"
                width={24}
                height={24}
              />
              <strong className="font-extrabold tracking-tight text-base md:text-lg">
                {config.appName}
              </strong>
            </Link>

            <p className="mt-3 text-sm text-base-content/80">
              {config.appDescription}
            </p>
            <p className="mt-3 text-sm text-base-content/60">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>
             
              <a
              href="https://shipfa.st/?ref=shipfast_badge"
              title="Go to ShipFast"
              target="_blank"
              className="mt-4 inline-block cursor-pointer rounded bg-neutral px-2 py-1 text-sm text-neutral-content ring-1 ring-base-content/10 duration-200 hover:ring-neutral"
            >
              <div className="flex items-center gap-1">
                <span className="opacity-90">Built by</span>
                <span className="flex items-center gap-0.5 font-semibold tracking-tight">
                <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 640 512"
  className="size-4"
  fill="currentColor"
>
  <path d="M128 64h384c17.7 0 32 14.3 32 32v256H96V96c0-17.7 14.3-32 32-32zM64 384h512l32 48H32l32-48zm96-320c-35.3 0-64 28.7-64 64v192h448V128c0-35.3-28.7-64-64-64H160zm64 288c0 17.7-14.3 32-32 32s-32-14.3-32-32H96c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64H416c0 17.7-14.3 32-32 32s-32-14.3-32-32H224z"/>
</svg>
                  Digital Lab
                </span>
              </div>
            </a>
          </div>
          <div className="flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3 text-white">
                LINKS
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                {config.resend.supportEmail && (
                  <a
                    href={`mailto:${config.resend.supportEmail}`}
                    target="_blank"
                    className="text-white link link-hover hover:text-purple-700"
                    aria-label="Contact Support"
                  >
                    Support
                  </a>
                )}
                <Link href="/#pricing" className="text-white link link-hover hover:text-purple-700">
                  Pricing
                </Link>
                <Link href="/blog" className="text-white link link-hover hover:text-purple-700">
                  Blog
                </Link>
                <a href="/#" target="_blank" className="text-white link link-hover hover:text-purple-700">
                  Affiliates
                </a>
              </div>
            </div>

            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="footer-title font-semibold text-base-content tracking-widest text-sm md:text-left mb-3 text-white">
                LEGAL
              </div>

              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link href="/tos" className="text-white link link-hover hover:text-purple-700">
                  Terms of services
                </Link>
                <Link href="/privacy-policy" className="text-white link link-hover hover:text-purple-700">
                  Privacy policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
