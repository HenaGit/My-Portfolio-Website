import React from "react";
import { education } from "../data";
import { FaUniversity} from "react-icons/fa";
export default function Education() {
  return (
    <section id="education">
      <div className="text-center mb-20">
      <FaUniversity className="w-12 h-12 inline-block mb-4"/>
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          Education &amp; Certification
        </h1>
        <div className="flex flex-wrap m-20">
          {education.map((item) => (
            <div className="w-5/6 sm:w-1/2 p-2" key={item.id}>
              <div className="flex items-center px-6 py-4 bg-gray-100 border border-gray-200 rounded-lg">
                <div className="flex-shrink-0">
                  <item.icon className="w-12 h-12 text-gray-800" />
                </div>
                <div className="ml-6">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm text-gray-600">{item.description}</p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-block px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded hover:bg-gray-700"
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
