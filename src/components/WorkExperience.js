import React from "react";
import { experience } from "../data";
import { CodeIcon } from "@heroicons/react/solid";
export default function WorkExperience() {
  return (
    <section id="experiences">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
      <div className="flex flex-col w-full mb-0">
      <CodeIcon className="mx-auto inline-block w-10 mb-1" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
          Work Experience
        </h1>
        </div>
        <div className="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4">
          {experience.map((item) => (
            <div className="flex flex-col w-5/6 mx-auto lg:mx-0 p-2" key={item.id}>
              <div className="flex flex-row">
                <div className="flex-1 text-center">
                  <p className="text-md font-bold text-white-800">
                    {item.date}
                  </p>
                </div> 
              </div>
              <div className="flex flex-col mt-3">
                <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
                  <div className="p-4 text-gray-800 text-md font-bold">
                    {item.title}
                  </div>
                  <div className="p-2 text-gray-800 text-sm">
                    {item.description}
                  </div>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-gray-800 text-white font-bold text-sm uppercase rounded-b py-3 flex items-center justify-center"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

