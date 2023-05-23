import React, { useContext } from "react";
import { Context } from "../store/appContext";

export function Button({ itemName }) {
  const { actions } = useContext(Context);

  let counter = 0;
  function handleClick() {
    //setButtonId(name);
    counter = counter + 1;
    actions.storePlayerValue(itemName, counter);
  }
  return (
    <Button variant="primary" onClick={handleClick}>
      Go for {itemName}
    </Button>
  );
}
