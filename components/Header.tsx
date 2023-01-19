import Image from "next/image";
import InstagramLogo from "../public/instagram-logo.png";
import InstagramLogoText from "../public/instagram-logo-text.png";
import ProfilePicture from "../public/profile-picture.png";
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";

import { HomeIcon } from "@heroicons/react/24/solid";

import React from "react";

type Props = {};

function Header({}: Props) {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-20">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto ">
        {/* Left */}
        <div className="relative w-24 mt-1 lg:hidden flex-shrink-0 cursor-pointer">
          <Image src={InstagramLogo} alt={"logo"} />
        </div>

        <div className="relative w-24 mt-1 hidden lg:inline-grid cursor-pointer">
          <Image src={InstagramLogoText} alt={"logo"} />
        </div>

        {/* Middle - Search Box */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border border-gray-300 focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="search"
            />
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <Bars3Icon className="h-6 md:hidden cursor-pointer hover:scale-125 transition-all duration-150 ease-out" />
          <div className="relative">
            <PaperAirplaneIcon className="navBtn -rotate-90" />
            <div className="absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">
              3
            </div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <HeartIcon className="navBtn" />
          <Image
            className=" w-10 rounded-full cursor-pointer"
            src={ProfilePicture}
            alt={"It's Me"}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
