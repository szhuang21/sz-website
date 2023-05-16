import React from "react";
import Skills from "../components/Skills";

const ProjectCard = (props) => {
  return (
    <div>
      {" "}
      <div class="flex pr-8 pb-8">
        <div class="flex">
          <a class="relative block w-96 h-80 bg-gray-900 group rounded-lg cursor-pointer">
            <img
              class="absolute inset-0 object-cover block w-96 h-80 group-hover:opacity-50 rounded-lg"
              src={props.image}
            />
            <div class="relative p-5">
              <div class="mt-40">
                <div
                  class="transition-all transform
                                 translate-y-8 opacity-0
                                 group-hover:opacity-100
                                 group-hover:translate-y-0"
                >
                  <div class="p-2">
                    <div class="text-lg text-left text-white font-bold font-poppins pb-1">
                      {props.name}
                    </div>
                    <div class="text-sm text-left text-white font-poppins">
                      {props.blurb}
                    </div>
                    <div class="text-sm text-gray-200 font-poppins pb-2">
                      {props.price}
                    </div>
                    <Skills skills={props.skills} />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
