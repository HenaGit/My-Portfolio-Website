import React from "react";
import { FaGithub, FaLinkedin, FaFacebook} from "react-icons/fa";

function SocialMediaIcons() {
  return (
    <div className="flex justify-center space-x-4">
      <a
        href="https://github.com/HenaGit"
        target="_blank"
        rel="noreferrer"
        className="text-white-800 hover:text-gray-600"
      >
        <FaGithub className="w-8 h-8" />
      </a>
      <a
        href="https://www.linkedin.com/in/henok-gebrehiwot-a9001024b"
        target="_blank"
        rel="noreferrer"
        className="text-white-800 hover:text-gray-600"
      >
        <FaLinkedin className="w-8 h-8" />
      </a>
      <a
        href="https://www.facebook.com/henock.a.gebrehiwot"
        target="_blank"
        rel="noreferrer"
        className="text-white-800 hover:text-gray-600"
      >
        <FaFacebook className="w-8 h-8" />
      </a>
     {/*  <a
        href="https://youtube.com/channel/UC-aZ0CSSVM8ul1JPcPkS_8A"
        target="_blank"
        rel="noreferrer"
        className="text-white-800 hover:text-gray-600"
      >
        <FaYoutube className="w-8 h-8" />
      </a> */}
    </div>
  );
}

export default SocialMediaIcons;
