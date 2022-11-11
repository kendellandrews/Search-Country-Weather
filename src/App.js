import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import {selectPotentials} from "./redux/slices/potentialCountriesSlice"
import {useSelector} from "react-redux"
import {selectDisplay} from "./redux/slices/displayCountrySlice";


function App() {
    let potentials = useSelector(selectPotentials)
    console.log(potentials);
    let currentDisplay = useSelector(selectDisplay)
    console.log("Display", currentDisplay);
    return (
        <div className="App font-link">
            <Header />
            <OptionDisplay />
        </div>
    );

}

export default App;
