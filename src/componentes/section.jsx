import React, { useEffect } from "react";
import '../css/section.css'

function Section(props) {
  useEffect(() => {
    const seccionesOcultas = document.querySelectorAll('.hidden');
    const threshold = .5; // Se activará si el 50% o más del elemento está visible

    // Definir las opciones del IntersectionObserver
    const options = {
      threshold: threshold
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('show', entry.isIntersecting);
      })
    }, options)

    // Observar los elementos
    seccionesOcultas.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div id={props.color}>
      <section className="hidden" >
        <div className="section_container">
          <h1 className="section_title">{props.titulo}</h1>
          {props.children}
        </div>
      </section>
    </div>
  );
}

export default Section;