const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,

      gameRules: [
        {
          id: 1,
          name: "Rock",
          rule: "Rock crushes scissors or breaks scissors ), but will lose to one who has played paper (paper covers rock)",
        },
        {
          id: 2,
          name: "Paper",
          rule: "A play of paper will wins against who a play of rock but scissors cuts paper)",
        },
        {
          id: 3,
          name: "Scissors",
          rule: "Play of scissors (scissors cuts paper), but are destroy by rock.",
        },
      ],
      playerValues: [],
    },
    actions: {
      // Use getActions to call a function within a fuction

      storePlayerValue: (buttonId, counter) => {
        const store = getStore();
        let playerElection = buttonId;
        let counterPlayers = counter;
        //store.playerValues = counterPlayers
        //var playerElect = store.playerValues;
        console.log(counterPlayers);

        /*if (store.playerValues.length === 1) {
          playerElect[0] = playerElection;
          setStore({ playerValues: playerElect });
          return console.log(
            "El valor obtenido en la posicion 0 del playerElect es: " +
              playerElect[0] +
              " y el contador es: " +
              contadorPlayers
          );
        }*/
        /*if (counterPlayers === 2) {
          playerElect[1] = playerElection;
          let playersArray = [];
          playersArray = playerElect;
          console.log(" deberia de tener de largo 2: " + playersArray.length);
          playerElect = [];
          contadorPlayers = 0;
          setStore({ playerValues: [] });
          return console.log(
            "tiene de largo " +
              playersArray.length +
              " y el valor es " +
              playersArray[1]
          );
        }*/
      },
      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
    },
  };
};
export default getState;
