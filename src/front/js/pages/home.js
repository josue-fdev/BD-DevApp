import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CardsList } from "../component/cards.js";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <main className="text-center mt-5">
      <h1 className="titulo">Welcome to a classic handly game</h1>
      <section className="container">
        <ul className="row">
          <CardsList />
        </ul>
      </section>
      <section className="alert alert-info mt-5">
        {store.message ||
          "Loading message from the backend (make sure your python backend is running)..."}
      </section>
    </main>
  );
};
