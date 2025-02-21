import Link from "next/link";
import Image from "next/image";
import config from "@/config";
import logo from "@/app/icon.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="flex flex-col md:flex-row md:justify-between">
          
          {/* Brand Section */}
          <div className="mb-10 md:mb-0 text-center md:text-left">
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
              <strong className="font-extrabold tracking-tight text-white text-lg">
                {config.appName}
              </strong>
            </Link>

            <p className="mt-3 text-sm text-gray-400">
              {config.appDescription}
            </p>
            <p className="mt-3 text-sm text-gray-500">
              Copyright © {new Date().getFullYear()} - All rights reserved
            </p>

            <a
              href="https://digitallab.dev"
              title="Built by Digital Lab"
              target="_blank"
              className="mt-4 inline-block cursor-pointer rounded bg-gray-700 px-2 py-1 text-sm text-gray-300 ring-1 ring-gray-600 duration-200 hover:ring-gray-500"
            >
              <div className="flex items-center gap-1">
                <span className="opacity-80">Built by</span>
                <span className="flex items-center gap-0.5 font-semibold tracking-tight">
                  💻 Digital Lab
                </span>
              </div>
            </a>
          </div>

          {/* Links Section */}
          <div className="flex justify-center md:justify-start space-x-20">
            <div>
              <h4 className="footer-title font-semibold tracking-widest text-sm mb-4 text-white">
                LINKS
              </h4>
              <ul className="space-y-2 text-sm">
                {config.resend.supportEmail && (
                  <li>
                    <a
                      href={`mailto:${config.resend.supportEmail}`}
                      className="hover:text-gray-100"
                      aria-label="Contact Support"
                    >
                      Support
                    </a>
                  </li>
                )}
                <li>
                  <Link href="/#pricing" className="hover:text-gray-100">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-gray-100">
                    Blog
                  </Link>
                </li>
                <li>
                  <a
                    href="/#"
                    target="_blank"
                    className="hover:text-gray-100"
                  >
                    Affiliates
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="footer-title font-semibold tracking-widest text-sm mb-4 text-white">
                LEGAL
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/tos" className="hover:text-gray-100">
                    Terms of services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className="hover:text-gray-100"
                  >
                    Privacy policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
