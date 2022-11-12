import React from "react";
import { useSelector } from "react-redux";
import { selectDisplayCountry } from "../redux/slices/displayCountrySlice";


const Symbols = () => {
    let currentDisplay = useSelector(selectDisplayCountry);
    return <div className="symbols">Symbols
                <div className="stack">
                    <h2>Flag of {currentDisplay.name.common}:</h2>
                    {currentDisplay.flags ? (
                        <img src={currentDisplay.flags.png} />
                    ) : ( "(No Data Found)"
                    )}
                </div>
                <div className="stack">
                    <h2>Coat of Arms of {currentDisplay.name.common}:</h2>
                    {currentDisplay.coatOfArms ? (
                        <img src={currentDisplay.coatOfArms.png} />
                    ) : ( "(No Data Found)"
                    )}
                </div>
            </div>
}

export default Symbols;