import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { todoActions } from "../store/todos";

const Corazon = () => {
  const corazonEmoji = "\u2764\uFE0F"; // el corazón rojo con estilo normal
  return <span>{corazonEmoji}</span>;
};

const CardPeople = (props) => {
  const { store, actions } = useContext(Context);
  return (
    <>
      <div className="card" style={{ width: "18rem" }}>
        <img src="https://i.blogs.es/05d040/espinof-star-wars-jarjarbinks/840_560.jpg" className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link
            to={`/people/${props.uid}`}
            className="btn btn-primary"
            style={{
              backgroundColor: "black",
              color: "white",
              padding: "10px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "red")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "black")}
          >
            Learn More!
          </Link>

          <button
            className="btn ms-9"
            type="button"
            onClick={() => {
              actions.agregarFavorito({
                name: props.name,
                uid: props.uid,
                category: "people",
                link: `/people/${props.uid}`,
              });
            }}
          >
            <Corazon />
          </button>
        </div>
      </div>
    </>
  );
};

export default CardPeople;
