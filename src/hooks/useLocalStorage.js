import {useState} from "react";

const useLocalStorage = (name, initialValue) => {
    const [state, setState] = useState(JSON.parse(window.localStorage.getItem(name)) || initialValue);
    // set our initial state to the value of "name" if it exists, or to "initialValue" if it doesn't

    const setStateInternal = (value) => {
        //console.log(`Set ${name} to ${value}`);
        window.localStorage.setItem(name, JSON.stringify(value));
        // in theory we could check here for errors and decide how to handle them before setting our internal state
        // so we don't end up with a mismatch
        setState(value);
    }

    return [state, setStateInternal];
};

export default useLocalStorage;