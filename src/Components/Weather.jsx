import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";
import { selectLoading, setLoadingTrue, setLoadingFalse } from "../redux/slices/loadingSlice";
import Loading from "./Loading";

const Weather = () => {
    const [weather, setWeather] = useState();
    let dispatch = useDispatch();
    let isLoading = useSelector(selectLoading);
    let display = useSelector(selectDisplay);
    let latitude = display.capitalInfo.latlng[0];
    let longitude = display.capitalInfo.latlng[1];

    useEffect(() => {
        dispatch(setLoadingTrue());
        const options = {
            method: "GET",
            url: "https://weatherapi-com.p.rapidapi.com/current.json",
            params: { q: `${latitude}, ${longitude}` },
            headers: {
                "X-RapidAPI-Key":
                    "18a66488d4msh6cc186c91a76481p13612fjsn44ac274c1bc6",
                "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
            }
        };

        axios
            .request(options)
            .then(function (response) {
                console.log(response.data);
                setWeather(response.data);
                dispatch(setLoadingFalse());
            })
            .catch(function (error) {
                console.error(error);
                dispatch(setLoadingFalse());
                alert("Couldn't get weather data");
            });
    }, []);

    return (
        <div>
            {isLoading ? (
                <Loading />
            ) : (
                <table className="overview-table">
                    <tbody>
                        <tr>
                            <td>Conditions: </td>
                            <td>{weather?.current?.condition?.text}</td>
                        </tr>
                        <tr>
                            <td>Temperature: </td>
                            <td>{weather?.current?.temp_f} degrees Fahrenheit</td>
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
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Weather;
