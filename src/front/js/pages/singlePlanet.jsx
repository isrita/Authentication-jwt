import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
 
const SinglePlanet = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();
    const [planet, setPlanet] = useState({})

    useEffect(() => {
        const cargaDatos = async () => {
            let { respuestaJson, response } = await actions.useFetch(`/planets/${params.uid}`)
            if (response.ok) {
                console.log(respuestaJson)
                setPlanet(respuestaJson.result.properties)
            }
        }
        cargaDatos()
        console.log(planet.name)
    }, [params.uid])


    return (<>
     <img src="https://www.lafinestradigital.com/wp-content/uploads/2011/09/starwars-planetes.jpg" className="img" alt="..." style={{ width: "100%" }}/>
        
        <h1>Este es el planeta {planet.name ? planet.name : "" }</h1>
        <h2>Mi uid {params.uid}</h2>
        <h2>Población: {planet.population}</h2>
        <h2>Gravedad: {planet.gravity}</h2>
    </>)
}

export default SinglePlanet