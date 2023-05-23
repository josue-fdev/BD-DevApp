//to get react dependencies
import React, { useContext } from "react";
import "../../styles/cards.css";
import { Context } from "../store/appContext";
//to get bootstrap dependencies
import Card from "react-bootstrap/Card";
//to set fontawesome api icons library
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
//to get the button component
import { Button } from "./button";

//cardsList component
export function CardsList() {
  const { store, actions } = useContext(Context);

  return (
    <>
      {store.gameRules.map((item, index) => {
        <li className="col-4" key={index}>
          <Card key={index} className="cards">
            <Card.Img variant="top" />
            <FontAwesomeIcon
              icon={iconsArray[index]}
              className="iconHands"
              id={item.name}
            />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.rule}</Card.Text>
              <Button itemName={item.name} />
            </Card.Body>
          </Card>
        </li>;
      })}
      ;
    </>
  );
}
