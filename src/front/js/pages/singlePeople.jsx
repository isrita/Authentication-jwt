import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

const SinglePeople = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [people, setPeople] = useState({})

    useEffect(() => {
        const cargaDatos = async () => {
            let { respuestaJson, response } = await actions.useFetch(`/people/${params.uid}`)
            if (response.ok) {
                console.log(respuestaJson)
                setPeople(respuestaJson.result.properties)
            }
        }
        cargaDatos()

    }, [params.uid])

    return (<>
     <img src="https://cdn6.dibujos.net/images/listas/los-mejores-personajes-de-star-wars.jpg" className="img" alt="..." style={{ width: "100%" }}/>
        <h1>Soy {people.name ? people.name : ""}</h1>
        <h2>Mi uid {params.uid} y mi género es {people?.gender}</h2>
        <h2>Fecha de nacimiento: {people.birth_year}</h2>
        <h3>Altura: {people.height}</h3>
    </>)
}

export default SinglePeople