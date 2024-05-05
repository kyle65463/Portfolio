import React from "react";
import Image from "next/image";

interface ProjectSectionProps {
  title: string;
  content: any;
  image: string;
  transparent: boolean;
  link?: string;
  appstore?: string;
  playstore?: string;
  github?: string;
  imageWidth?: number;
  imageHeight?: number;
}

export default function projectSection({
  title,
  content,
  image,
  transparent,
  link,
  appstore,
  playstore,
  github,
  imageWidth = 180,
  imageHeight = 180,
}: ProjectSectionProps) {
  const bgColor = transparent ? "bg-transparent" : "bg-base-300";

  const appStoreIcon = (
    <a target="_blank" href={appstore}>
      <div className="avatar">
        <div className="w-20 rounded-full">
          <img src="/icons/appstore.png" alt="appstore" />
        </div>
      </div>
    </a>
  );
  const playStoreIcon = (
    <a target="_blank" href={playstore}>
      <div className="avatar">
        <div className="w-20 rounded-full">
          <img src="/icons/playstore.png" alt="playstore" />
        </div>
      </div>
    </a>
  );
  const githubIcon = (
    <a target="_blank" href={github}>
      <div className="avatar">
        <div className="rounded-full w-7">
          <img src="/icons/github-sm.png" alt="github" />
        </div>
      </div>
    </a>
  );
  const linkIcon = (
    <a
      className="h-10 px-5 mt-4 text-white btn btn-primary btn-sm"
      href={link}
      target="_blank"
    >
      Link
    </a>
  );

  const displayImage = (
    <div className="flex items-center md:flex-col md:justify-center">
      <div
        className={`pb-3 ${
          link ? "transform hover:scale-105 cursor-pointer" : ""
        } md:w-auto`}
      >
        <a href={link}>
          <Image
            src={image}
            width={imageWidth}
            height={imageHeight}
            layout="fixed"
            className="w-12 rounded-xl"
          />
        </a>
      </div>
      <div className="flex flex-col items-center pl-7 md:pl-0 ">
        {appstore ? appStoreIcon : <></>}
        {playstore ? playStoreIcon : <></>}
        {github ? githubIcon : <></>}
      </div>
    </div>
  );

  return (
    <div className={`${bgColor} page-px pt-20 pb-24`}>
      <div
        className={`flex md:items-center pb-8 ${
          transparent ? "flex-col" : "flex-col-reverse"
        } md:flex-row justify-between`}
      >
        {transparent ? <div className="md:pr-12"> {displayImage}</div> : <></>}
        <div>
          <h2 className={`text-2xl md:text-4xl font-bold pb-5`}>{title}</h2>
          <p
            className={`text-content-mid text-lg transition-all duration-500 ease-in-out`}
          >
            {content}
          </p>
          {link ? linkIcon : <></>}
        </div>
        {transparent ? <></> : <div className="md:pl-12"> {displayImage}</div>}
      </div>
    </div>
  );
}
