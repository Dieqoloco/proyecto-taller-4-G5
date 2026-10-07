"use client"
import Image from "next/image";
import Link from "next/link";
import listas from "../../data/votaciones.json"
import { useState } from "react";

export default function Home(){
  // variable para ver si una opción fue seleccionada y la función que la altera
  const [seleccionada, setSeleccionada] = useState(null);
  return (
    <div >
      {/* botón para ir a home*/ }
      <Link className="bloque_link"href={"../"}>Home</Link>
      <h1> Titulo Página de votación </h1>
      {
        // función que irá opción por opción tomando sus datos poniéndolas en el div
        listas.map((e,i) => {
          return (
            <div className="bloque" key={i}>
              <div>identificador</div>
              {e.id}

              <div>Lista</div>
              {e.nombre}

              <div>Propuesta</div>
              {e.descripcion}
              <div></div>
              <input type="checkbox"
              checked={seleccionada === e.id}
              onChange={() => setSeleccionada(e.id)}
              />
            </div>  
          )
        })
      }
      <div className="bloque">
        {seleccionada ? 
        (
          <Link href={"../"}>
            <button className="btn_votar">Enviar votación</button>
          </Link>
        ) : (
          <button className="btn_enviar" disabled>
            Selecciona un postulante
          </button>
        )}
      </div>

    </div>
  )
}