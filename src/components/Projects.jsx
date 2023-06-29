import React from 'react';
import WE from '../images/weatherapp.png';
import CO from '../images/countries.png';
import PO from '../images/pokemon.png';
import TR from '../images/textReverse.png';
import EM from '../images/crudEmploye.png';
import CA from '../images/cafeteria.png';

import { FormattedMessage } from 'react-intl';

function Projects() {
  return (
    <section className="font-Over  bg-gradient-to-r bg-gradient-to-r from-lime-400 to-sky-600 to-indigo-400">
      <div className="conteiner lg:mx-20 px-5 py-24">
        <div className="flex flex-wrap w-full mb-10">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="text-4xl font-bold uppercase mb-12 text-teal-50">
              {' '}
              <FormattedMessage id="nav.projects" defaultMessage="PROYECTOS" />
            </h1>
          </div>
        </div>
        {/* //__________________ */}
        <div className="card bg-opacity-75 mb-5 lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-100 h-52" width="300" height="180" src={CA} alt="cafeteria app" />
          </figure>
          <div className="card-body">
            <h2 className="card-title uppercase">
              <FormattedMessage id="title.cafeteria" defaultMessage="cafeteria app" />
            </h2>
            <p>
              <FormattedMessage
                id="description.cafeteria"
                defaultMessage="Un E-commerce para una caferia, con autenticacion, en laravel:uso de php y .blade"
              />
            </p>
            <div className="card-actions justify-end">
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/kennethdevpc/cafeteria">
                <button className="btn btn-primary uppercase">
                  <FormattedMessage id="button.deploy" defaultMessage="PROJECT" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-opacity-75 mb-5 lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-100 h-52" width="300" height="180" src={EM} alt="crudEmploye app" />
          </figure>
          <div className="card-body">
            <h2 className="card-title uppercase">
              <FormattedMessage id="title.crudEmploye" defaultMessage="crudEmploye app" />
            </h2>
            <p>
              <FormattedMessage
                id="description.crudEmploye"
                defaultMessage="Un Sistema para creacion de empleados, con autenticacion, en laravel:uso de php y .blade"
              />
            </p>
            <div className="card-actions justify-end">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/kennethdevpc/php_nexura_test"
              >
                <button className="btn btn-primary uppercase">
                  <FormattedMessage id="button.deploy" defaultMessage="PROJECT" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-opacity-75 mb-5 lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-100 h-52" width="300" height="180" src={TR} alt="textReverse app" />
          </figure>
          <div className="card-body">
            <h2 className="card-title uppercase">
              <FormattedMessage id="title.textReverse" defaultMessage="textReverse app" />
            </h2>
            <p>
              <FormattedMessage
                id="description.textReverse"
                defaultMessage="Un API REST, a la cual se le envía un texto y responde con el mismo texto invertido."
              />
            </p>
            <div className="card-actions justify-end">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/kenpulicorre/text_reverse"
              >
                <button className="btn btn-primary uppercase">
                  <FormattedMessage id="button.deploy" defaultMessage="PROJECT" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-opacity-75 mb-5 lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-100 h-52" width="300" height="180" src={PO} alt="pokemon app" />
          </figure>
          <div className="card-body">
            <h2 className="card-title uppercase">
              <FormattedMessage id="title.poekemon" defaultMessage="pokemon app" />
            </h2>
            <p>
              <FormattedMessage
                id="description.pokemon"
                defaultMessage="Proyecto api con react y node de pokemones. Consume API externa y se utiliza JS, HTML, CSS, React, Redux."
              />
            </p>
            <div className="card-actions justify-end">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/kenpulicorre/React_node_apiPok"
              >
                <button className="btn btn-primary uppercase">
                  <FormattedMessage id="button.deploy" defaultMessage="PROJECT" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-opacity-75 mb-5 lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-100 h-52" width="300" height="180" src={CO} alt="countries app" />
          </figure>
          <div className="card-body">
            <h2 className="card-title uppercase">
              <FormattedMessage id="title.countries" defaultMessage="Countries app" />
            </h2>
            <p>
              <FormattedMessage
                id="description.countries"
                defaultMessage="Proyecto para llamar una api e ilustrar desde formulario caracteristicas de tiempo. Aplicación de una página que consume una API. Hecha con JS, HTML, CSS, React, Redux."
              />
            </p>
            <div className="card-actions justify-end">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/kenpulicorre/React_node_apiCount"
              >
                <button className="btn btn-primary uppercase">
                  <FormattedMessage id="button.deploy" defaultMessage="PROJECT" />
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="card bg-opacity-75 mb-5 lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className="w-fit h-52" width="300" height="200" src={WE} alt="weather app" />
          </figure>
          <div className="card-body">
            <h2 className="card-title uppercase">
              <FormattedMessage id="title.weatherapp" defaultMessage="Weather app" />
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
                  <FormattedMessage id="button.deploy" defaultMessage="DEPLOY" />
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
