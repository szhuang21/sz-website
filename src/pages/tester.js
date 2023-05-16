import React from "react";
import Header from "../components/Header";
import wcsImage from "../images/wcs.jpg";
const Projects = () => {
  return (
    <div>
      <Header />
      <div class="pl-20 pt-10">
        <div class="text-xl text-left font-bold font-poppins pb-8">
          👩‍💻 Projects
        </div>

        <div class="flex">
          <div class="flex mt-8 pr-8">
            <a
              class="relative block h-80 w-80 bg-gray-900 group rounded-lg"
              href="/resume"
            >
              <img
                class="absolute inset-0 object-cover 
                                w-full h-full group-hover:opacity-50 rounded-lg"
                src={wcsImage}
              />
              <div class="relative p-5">
                <div class="mt-44">
                  <div
                    class="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0"
                  >
                    <div class="p-2">
                      <div class="text-lg text-white font-bold font-poppins pb-1">
                        Women in Computer Science
                      </div>
                      <div class="text-sm text-gray-200 font-poppins">
                        Workshop lead for the technical resources committee.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
