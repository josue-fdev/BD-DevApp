//react dependencies
import React, { useContext, useState } from "react";
import "../../styles/cards.css";
import { Context } from "../store/appContext";
//bootstrap dependencies
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
//fontawesome api icons library setttings
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, icon } from "@fortawesome/fontawesome-svg-core";
import {
  faHandBackFist,
  faHand,
  faHandScissors,
} from "@fortawesome/free-solid-svg-icons";
library.add(faHandBackFist, faHand, faHandScissors);
const hand = icon(faHand);
const handScissors = icon(faHandScissors);
const handBackFist = icon(faHandBackFist);
const iconsArray = [handBackFist, hand, handScissors];

//cardsList component
export function CardsList() {
  const { store, actions } = useContext(Context);
  const [buttonId, setButtonId] = useState(0);
  const [counter, setCounter] = useState(0);

  function onButtonEvent(name, counter) {
    setButtonId(name);
    setCounter(counter);
    actions.storePlayerValue(buttonId, counter);
  }
  return (
    <>
      {store.gameRules.map((item, index) => {
        <li className="col-4" key={index}>
          <Card
            style={{ width: "15rem", height: "20rem" }}
            key={index}
            className="cards"
          >
            <Card.Img variant="top" />
            <FontAwesomeIcon
              icon={iconsArray[index]}
              className="iconHands"
              id={item.name}
            />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.rule}</Card.Text>
              <Button
                variant="primary"
                onClick={() => onButtonEvent(item.name, counter)}
              >
                Go for {item.name}
              </Button>
            </Card.Body>
          </Card>
        </li>
      })}
    </>
  );
}
