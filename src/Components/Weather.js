import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectDisplayCountry } from "../redux/slices/displayCountrySlice";

const Weather = () => {
    const [weather, setWeather] = useState();
    let display = useSelector(selectDisplayCountry);
    let latitude = display.capitalInfo.latlng[0];
    let longitude = display.capitalInfo.latlng[1];

    useEffect(() => {
        const options = {
            method: "GET",
            url: "https://weatherapi-com.p.rapidapi.com/current.json",
            params: { q: `${latitude}, ${longitude}` },
            headers: {
                "X-RapidAPI-Key":
                    "79ccfaed23msh682b7ea8536df9ap1dae16jsn6b9c2dd76294",
                "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
            },
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                setWeather(response.data);
            })
            .catch(function (error) {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <table className="overview-table">
                <tr>
                    <td>Conditions: </td>
                    <td>{weather?.current?.condition?.text}</td>
                </tr>
                <tr>
                    <td>Temperature: </td>
                    <td>{weather?.current.temp_f} degrees Fahrenheit</td>
                </tr>
                <tr>
                    <td>Feels Like: </td>
                    <td>{weather?.current?.feelslike_f} degrees Fahrenheit</td>
                </tr>
                <tr>
                    <td>Humidity: </td>
                    <td>{weather?.current?.humidity}%</td>
                </tr>
                <tr>
                    <td>Wind Speed: </td>
                    <td>
                        {weather?.current?.wind_mph} mph{" "}
                        {weather?.current?.wind_dir}
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default Weather;