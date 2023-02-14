import React from "react";
import Ken from "../images/happy.png";

function Header() {
  return (
    <section className="h-96 flex justify-center items-center font-Over bg-gradient-to-r from-lime-400 to-sky-700 to-indigo-400">
      <div className="container mr-10">
        <div className={`flex flex-col sm:flex-row `}>
          <img src={Ken} alt="Just me" className="max-w-[10%]  rounded-lg " />
          <h2
            className="flex justify-center items-center bg-cover text-7xl bg-clip-text bg-center uppercase text-transparent font-extrabold tracking-wide antialiased px-5"
            style={{
              backgroundImage:
                "url(https://i.pinimg.com/originals/b4/e3/71/b4e371619042d1e80918d09904e90f7d.gif)",
            }}
          >
            Kenneth Puliche Correa.
          </h2>
        </div>
        <h1 className="text-yellow-900 flex justify-center text-4xl ">
          {" "}
          {`<Full Stack Developer />`}
        </h1>
      </div>
    </section>
  );
}

export default Header;
