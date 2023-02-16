import React, { useContext, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { FormattedMessage } from "react-intl";
import { langContext } from "../Context/LangContext";

function Contact() {
  const lang = useContext(langContext);
  console.log(lang.locale);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8mcz3fn",
        "template_2hiu81r",
        e.target,
        "q-Hnwk3Kdmr5zJk9k"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    Swal.fire({
      title: `${lang.locale === "es-ES" ? "Gracias!" : "Thank you!"}`,
      text: `${
        lang.locale === "es-ES"
          ? "¡Tu mensaje fue enviado! "
          : "Your message was successfully sent! "
      }`,
      icon: "success",
      confirmButtonText: "Ok!",
    });
    setName("");
    setMail("");
    setMessage("");
  };

  return (
    <section className="z-50 font-Over bg-gradient-to-r from-lime-400 to-sky-600 to-indigo-400">
      <div className="px-5 py-5 mx-auto">
        <h1 className="text-4xl font-bold uppercase lg:ml-20 text-white">
          <FormattedMessage id="title.contact" defaultMessage="CONTACTO" />
        </h1>
      </div>

      <div className="px-5 py-5">
        <div className="lg:w-1/3 md:w-1/2 bg-opacity-75 bg-white rounded-lg p-8 mx-auto w-full mt-10 md:mt-0 shadow-md flex-col justify-items-center">
          <p className="leading-relaxed mb-5 text-gray-600">
            <FormattedMessage
              id="contact"
              defaultMessage="Envia un mensaje si deseas tener mi servicio."
            />
          </p>
          <form onSubmit={sendEmail}>
            <div className="relative mb-4">
              <label className="label-text">
                <FormattedMessage id="label.name" defaultMessage="Tu nombre" />
              </label>
              <br />
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="nombre"
                type="text"
                placeholder={
                  lang.locale === "es-ES" ? "Tu nombre..." : "Your name..."
                }
                className="input lg:ml-2 input-bordered w-full max-w-xs"
                required
              ></input>
            </div>
            <div className="relative mb-4">
              <label className="label-text">
                <FormattedMessage id="label.mail" defaultMessage="Tu mail" />
              </label>{" "}
              <br />
              <input
                value={mail}
                onChange={(e) => setMail(e.target.value)}
                name="mail"
                type="email"
                placeholder={
                  lang.locale === "es-ES" ? "Tu mail..." : "Your email..."
                }
                className="input input-bordered lg:ml-2 w-full max-w-xs"
                required
              ></input>
            </div>
            <div className="relative mb-4">
              <label className="label-text mb-6 " htmlFor="message">
                <FormattedMessage
                  id="label.message"
                  defaultMessage="Tu mensaje"
                />
              </label>
              <textarea
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={
                  lang.locale === "es-ES" ? "Tu mensaje..." : "Your message..."
                }
                id=""
                name="mensaje"
                className="w-full h-32 resize-none textarea textarea-primary"
                required
              ></textarea>
            </div>
            <button type="submit" className="flex mx-auto btn btn-primary">
              <FormattedMessage id="button.contact" defaultMessage="Enviar" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
