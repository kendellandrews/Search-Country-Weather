import axios from "axios";
import React, { useState } from "react";
import { BsFillFlagFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux"
import { deletePotentialCountries, setPotentialCountries } from "../redux/slices/potentialCountriesSlice";
import { selectDisplayCountry , deleteDisplayCountry} from "../redux/slices/displayCountrySlice"


const Header = () => {
    const [input, setInput] = useState();
    let dispatch = useDispatch();
    let currentDisplay = useSelector(selectDisplayCountry);

    return (
        <div className="header">
            <div className="home">
                <BsFillFlagFill
                    style={{ marginRight: "10px" }}
                    fontSize="1.6em"
                />
                <h3 className="home-country">{currentDisplay && currentDisplay.name.common}</h3>
            </div>
            <div className="country-input">
                <input
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                />
                <button
                    onClick={() => {
                        axios
                            .get(`https://restcountries.com/v3.1/name/${input}`)
                            .then((res) => {
                                console.log(res.data);
                                dispatch(deleteDisplayCountry());
                                dispatch(deletePotentialCountries());
                                dispatch(setPotentialCountries(res.data));
                            })
                            .catch((err) => {
                                alert(
                                    "No countries found that match your search!"
                                );
                            });
                    }}
                >
                    search
                </button>
            </div>
        </div>
    );
};

export default Header;
