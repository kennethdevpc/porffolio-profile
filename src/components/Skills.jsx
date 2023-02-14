import React from "react";
import {
  DiJsBadge,
  DiGithubBadge,
  DiHtml5,
  DiCss3,
  DiNodejsSmall,
  DiPostgresql,
  DiReact,
} from "react-icons/di";
import {
  SiRedux,
  SiPostman,
  SiExpress,
  SiSequelize,
  SiTailwindcss,
  SiPhp,
  SiLaravel,
  SiAngular,
  SiTypescript,
  SiBitbucket,
  SiPhpstorm,
  SiDocker,
  SiMysql,
} from "react-icons/si";
import { FormattedMessage } from "react-intl";

function Skills() {
  return (
    <section className=" font-Over bg-gradient-to-r from-lime-400 to-sky-600 to-indigo-400">
      <div className="lg:w-1/2 lg:mx-20 px-5 py-24 w-full lg:mb-0">
        <h1 className="text-4xl font-bold uppercase text-teal-50">
          {" "}
          <FormattedMessage id="nav.skills" defaultMessage="SKILLS" />
        </h1>
      </div>
      <div className="lg:mx-20 px-5 ">
        <div className="p-1 rounded opacity-80 bg-gradient-to-r from-blue-700 to-zinc-900 to-sky-500">
          <div className="p-1 mx-auto text-center"></div>
          <div className="flex flex-wrap justify-center mx-auto dark:text-red-400">
            <div
              className="flex justify-center tooltip tooltip-success w-1/2 p-6 align-middle md:w-1/4 xl:w-1/6"
              data-tip="Javascript"
            >
              <DiJsBadge className="w-12 hover:text-blue-600 h-12  fill-current md:mx-12 lg:m-0 text-green-500" />
            </div>
            <div
              className="flex justify-center tooltip tooltip-success w-1/2 p-6 align-middle md:w-1/4 xl:w-1/6"
              data-tip="HTML"
            >
              <DiHtml5 className="hover:text-gray-600 w-12 h-12  fill-current md:mx-12 lg:m-0 text-green-500" />
            </div>
            <div
              className="flex justify-center tooltip tooltip-success w-1/2 p-6 align-middle md:w-1/4 xl:w-1/6"
              data-tip="CSS"
            >
              <DiCss3 className="hover:text-gray-600 w-12 h-12  fill-current md:mx-12 lg:m-0 text-green-500" />
            </div>
            <div
              className="flex justify-center tooltip tooltip-success w-1/2 p-6 align-middle md:w-1/4 xl:w-1/6"
              data-tip="ReactJs"
            >
              <DiReact className="hover:text-gray-600 w-12 h-12 fill-current md:mx-12 lg:m-0 text-green-500" />
            </div>
            <div
              className="flex justify-center tooltip tooltip-success w-1/2 p-6 align-middle md:w-1/4 xl:w-1/6"
              data-tip="Redux"
            >
              <SiRedux className="hover:text-gray-600 w-12 h-12 fill-current md:mx-12 lg:m-0 text-green-500" />
            </div>
            <div
              className="flex justify-center tooltip tooltip-success w-1/2 p-6 align-middle md:w-1/4 xl:w-1/6"
              data-tip="Angular"
            >
              <SiAngular className="hover:text-gray-600 w-12 h-12 fill-current md:mx-12 lg:m-0 text-green-500" />
            </div>
            <div
              className="flex justify-center tooltip tooltip-warning w-1/2 p-6 align-middle md:w-1/4 xl:w-1/6"
              data-tip="PostgreSQL"
            >
              <DiPostgresql className="hover:text-gray-600 w-12 h-12  fill-current md:mx-12 lg:m-0 text-green-500" />
            </div>
            <div
              className="flex justify-center tooltip tooltip-warning w-1/2 p-6 align-middle md:w-1/4 xl:w-1/6"
              data-tip="MySQL"
            >
              <SiMysql className="hover:text-gray-600 w-12 h-12  fill-current md:mx-12 lg:m-0 text-green-500" />
            </div>
            <div
              className="flex justify-center tooltip tooltip-warning w-1/2 p-6 align-middle md:w-1/4 xl:w-1/6"
              data-tip="NodeJs"
            >
              <DiNodejsSmall className="hover:text-gray-600 w-12 h-12  fill-current md:mx-12 lg:m-0 text-green-500" />
            </div>
            <div
              className="flex justify-center tooltip tooltip-warning w-1/2 p-6 align-middle md:w-1/4 xl:w-1/6"
              data-tip="ExpressJs"
            >
              <SiExpress className="hover:text-gray-600 w-12 h-12  fill-current md:mx-12 lg:m-0 text-green-500" />
            </div>
            <div
              className="flex justify-center tooltip tooltip-warning w-1/2 p-6 align-middle md:w-1/4 xl:w-1/6"
              data-tip="Sequelize"
            >
              <SiSequelize className="hover:text-gray-600 w-12 h-12  fill-current md:mx-12 lg:m-0 text-green-500" />
            </div>
            <div
              className="flex justify-center tooltip tooltip-success w-1/2 p-6 align-middle md:w-1/4 xl:w-1/6"
              data-tip="GitHub"
            >
              <DiGithubBadge className="hover:text-gray-600 w-12 h-12  fill-current  text-green-500" />
            </div>
            <div
              className="flex justify-center tooltip tooltip-success  w-1/2 p-6 align-middle md:w-1/4 xl:w-1/6"
              data-tip="Postman"
            >
              <SiPostman className="hover:text-gray-600 w-12 h-12 fill-current md:mx-12 lg:m-0 text-green-500" />
            </div>
            <div
              className="flex justify-center tooltip tooltip-primary  w-1/2 p-6 align-middle md:w-1/4 xl:w-1/6"
              data-tip="Tailwind"
            >
              <SiTailwindcss className="hover:text-gray-600 w-12 h-12 fill-current md:mx-12 lg:m-0 text-green-500" />
            </div>
            <div
              className="flex justify-center tooltip tooltip-warning  w-1/2 p-6 align-middle md:w-1/4 xl:w-1/6"
              data-tip="Php"
            >
              <SiPhp className="hover:text-gray-600 w-12 h-12 fill-current md:mx-12 lg:m-0 text-green-500" />
            </div>
            <div
              className="flex justify-center tooltip tooltip-warning  w-1/2 p-6 align-middle md:w-1/4 xl:w-1/6"
              data-tip="Laravel"
            >
              <SiLaravel className="hover:text-gray-600 w-12 h-12 fill-current md:mx-12 lg:m-0 text-green-500" />
            </div>
            <div
              className="flex justify-center tooltip tooltip-warning  w-1/2 p-6 align-middle md:w-1/4 xl:w-1/6"
              data-tip="Typescript"
            >
              <SiTypescript className="hover:text-gray-600 w-12 h-12 fill-current md:mx-12 lg:m-0 text-green-500" />
            </div>
            <div
              className="flex justify-center tooltip tooltip-success  w-1/2 p-6 align-middle md:w-1/4 xl:w-1/6"
              data-tip="Bitbucket"
            >
              <SiBitbucket className="hover:text-gray-600 w-12 h-12 fill-current md:mx-12 lg:m-0 text-green-500" />
            </div>
            <div
              className="flex justify-center tooltip tooltip-warning  w-1/2 p-6 align-middle md:w-1/4 xl:w-1/6"
              data-tip="PhpStorm"
            >
              <SiPhpstorm className="hover:text-gray-600 w-12 h-12 fill-current md:mx-12 lg:m-0 text-green-500" />
            </div>
            <div
              className="flex justify-center tooltip tooltip-warning  w-1/2 p-6 align-middle md:w-1/4 xl:w-1/6"
              data-tip="Docker"
            >
              <SiDocker className="hover:text-gray-600 w-12 h-12 fill-current md:mx-12 lg:m-0 text-green-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
