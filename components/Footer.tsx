import Image from "next/image";
import Logo from "@/public/assests/logo.png";
import {
  FaLinkedin,
  FaXTwitter,
  FaGithub,
  FaInstagram 
} from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row bg-black text-white p-16 gap-8 justify-between md:px-20 xl:px-44">
      <div className="flex flex-col gap-8 text-gray-300/85 max-w-[300px]">
        <Image src={Logo} alt="Logo" className="cursor-pointer" />
        <div>
          Built with care and creativity by{" "}
          <div className="font-semibold text-white hover:underline text-lg">
            <a href="https://github.com/irohandev" className="underline text-blue-500">
              Rohan Dev Singh <MdOutlineArrowOutward className="inline" />
            </a>
          </div>
        </div>
        <div className="flex gap-4 text-2xl cursor-pointer">
          <a href="https://x.com/irohandev" target="_blank" rel="noopener noreferrer">
            <FaXTwitter className="hover:scale-125" />
          </a>
          <a href="https://github.com/irohandev" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:scale-125" />
          </a>
          <a href="https://www.instagram.com/irohandev/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:scale-125" />
          </a>
          <a href="https://www.linkedin.com/in/irohandev/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:scale-125" />
          </a>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="font-bold text-lg">Services</div>
        <div className="cursor-pointer text-gray-300/85">Features</div>
        <div className="cursor-pointer text-gray-300/85">Solutions</div>
        <div className="cursor-pointer text-gray-300/85">Updates</div>
        <div className="cursor-pointer text-gray-300/85">Help Center</div>
        <div className="cursor-pointer text-gray-300/85">Pricing</div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="font-bold text-lg">About Us</div>
        <div className="cursor-pointer text-gray-300/85">Our Story</div>
        <div className="cursor-pointer text-gray-300/85">News</div>
        <div className="cursor-pointer text-gray-300/85">Careers</div>
        <div className="cursor-pointer text-gray-300/85">Values</div>
        <div className="cursor-pointer text-gray-300/85">Contact Us</div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="font-bold text-lg">Support</div>
        <div className="cursor-pointer text-gray-300/85">Tutorials</div>
        <div className="cursor-pointer text-gray-300/85">Forums</div>
        <div className="cursor-pointer text-gray-300/85">Documentation</div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="font-bold text-lg">Policies</div>
        <div className="cursor-pointer text-gray-300/85">Privacy Policy</div>
        <div className="cursor-pointer text-gray-300/85">Terms of Service</div>
        <div className="cursor-pointer text-gray-300/85">Security</div>
      </div>
    </div>
  );
};

export default Footer;
