import { createContext } from "react";

const addCard = createContext({
    project: "Select Project",
    setValue: (auth) => {
        console.log("asdjbakjs", auth);

    }
});

export default addCard;