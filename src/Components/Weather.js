import axios from "axios";
import React, { useEffect, useState } from "react";

const Weather = () => {
    const [weather, setWeather] = useState();

    // ------------------------------------
    // PASTE RAPIDAPI CODE SNIPPET IN A USEEFFECT HERE
    // ------------------------------------

    return (
        <div>
            <table className="overview-table">
                <tr>
                    <td>Conditions: </td>
                </tr>
                <tr>
                    <td>Temperature: </td>
                </tr>
                <tr>
                    <td>Feels Like: </td>
                </tr>
                <tr>
                    <td>Humidity: </td>
                </tr>
                <tr>
                    <td>Wind Speed: </td>
                </tr>
            </table>
        </div>
    );
};

export default Weather;
