import React from "react";
import WE from "../images/weatherapp.png";

import { FormattedMessage } from "react-intl";

function Projects() {
  return (
    <section className="font-Over  bg-gradient-to-r bg-gradient-to-r from-lime-400 to-sky-600 to-indigo-400">
      <div className="conteiner lg:mx-20 px-5 py-24">
        <div className="flex flex-wrap w-full mb-10">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="text-4xl font-bold uppercase mb-12 text-teal-50">
              {" "}
              <FormattedMessage id="nav.projects" defaultMessage="PROYECTOS" />
            </h1>
          </div>
        </div>
        {/* //__________________ */}
        <div className="card bg-opacity-75 mb-5 lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-fit h-52" src={WE} alt="weather app" />
          </figure>
          <div className="card-body">
            <h2 className="card-title uppercase">
              <FormattedMessage
                id="title.weatherapp"
                defaultMessage="Weather app"
              />
            </h2>
            <p>
              <FormattedMessage
                id="description.weatherapp"
                defaultMessage="Proyecto para llamar una api e ilustrar desde formulario caracteristicas de tiempo. Aplicación de una página que consume una API. Hecha con JS, HTML, CSS, React, Redux."
              />
            </p>
            <div className="card-actions justify-end">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://weatherapp-kennethdevpc.netlify.app/"
              >
                <button className="btn btn-primary uppercase">
                  <FormattedMessage
                    id="button.deploy"
                    defaultMessage="DEPLOY"
                  />
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* //__________________ */}
      </div>
    </section>
  );
}

export default Projects;
