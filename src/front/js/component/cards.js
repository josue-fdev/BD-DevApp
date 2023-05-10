import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
//importe componentes desde fontawesome
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHandBackFist,
  faHand,
  faHandScissors,
} from "@fortawesome/free-solid-svg-icons";
let icons = [faHandBackFist, faHand, faHandScissors];
library.add(faHandBackFist, faHand, faHandScissors);
console.log(icons);

export const CardsGroup = (icons) => {
  const { store, actions } = useContext(Context);
  const [buttonId, setButtonId] = useState(0);
  const [contador, setContador] = useState(0);

  const OnButtonEvent = () => {
    setButtonId(index + 1);
    setContador(contador + 1);
    actions.storePlayerValue(buttonId, contador);
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="row flexCards">
        {store.gameRules.map((item, index) => {
          return (
            <div className="col-4">
              <Card
                style={{ width: "15rem", height: "20rem" }}
                key={index}
                className="cards"
              >
                <Card.Img variant="top" />
                <FontAwesomeIcon
                  icon={icons[index]}
                  className="hand"
                  id={item.name}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.rule}</Card.Text>
                  <Button variant="primary" onClick={OnButtonEvent}>
                    Go for {item.name}
                  </Button>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};
