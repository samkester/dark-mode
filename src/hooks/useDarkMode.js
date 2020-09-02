import useLocalStorage from "./useLocalStorage";

const useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

    const toggle = () => {
        setDarkMode(!darkMode);
    }

    return [darkMode, toggle];
};

export default useDarkMode;