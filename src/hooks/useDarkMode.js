import useLocalStorage from "./useLocalStorage";

export default useDarkMode = () => {
    const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);

    const toggle = () => {
        setDarkMode(!darkMode);
    }

    return [darkMode, toggle];
};