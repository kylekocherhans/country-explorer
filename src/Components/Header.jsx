import axios from "axios";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePotentialCountries, setPotentialCountries } from "../redux/slices/potentialCountriesSlice";
import { selectDisplay, deleteDisplayCountry } from "../redux/slices/displayCountrySlice";
import { setLoadingTrue, setLoadingFalse } from "../redux/slices/loadingSlice";
import { BsFillFlagFill } from "react-icons/bs";

const Header = () => {
    const [input, setInput] = useState();
    let dispatch = useDispatch();
    let currentDisplay = useSelector(selectDisplay);

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
                        dispatch(setLoadingTrue());
                        axios
                            .get(`https://restcountries.com/v3.1/name/${input}`)
                            .then((res) => {
                                console.log(res.data);
                                dispatch(deleteDisplayCountry());
                                dispatch(deletePotentialCountries());
                                dispatch(setPotentialCountries(res.data));
                                dispatch(setLoadingFalse());
                            })
                            .catch((err) => {
                                dispatch(setLoadingFalse());
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
