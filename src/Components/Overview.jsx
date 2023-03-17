import { useSelector } from "react-redux";
import { selectDisplay } from "../redux/slices/displayCountrySlice";

const Overview = () => {
    let currentDisplay = useSelector(selectDisplay);
    return (
        <div className="stack">
            <h1>{currentDisplay.name.official}</h1>
            <h3>"{currentDisplay.name.common}"</h3>

            <table className="overview-table">
                <tbody>
                    <tr>
                        <td>Capital: </td>
                        {currentDisplay.capital.map((capital) => (
                            <td key={currentDisplay.name.official}>{capital}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Population: </td>
                        <td>{currentDisplay.population}</td>
                    </tr>
                    <tr>
                        <td>Languages: </td>
                        {Object.values(currentDisplay.languages).map(
                            (language) => (
                                <td key={currentDisplay.name.official}>{language}</td>
                            )
                        )}
                    </tr>
                    <tr>
                        <td>Currency: </td>
                        {Object.keys(currentDisplay.currencies).map(
                            (key, index) => (
                                <td key={currentDisplay.name.official}>
                                    {currentDisplay.currencies[key].name}
                                    {" - "}
                                    {key}
                                    {" - "}
                                    {currentDisplay.currencies[key].symbol}
                                </td>
                            )
                        )}
                    </tr>
                    <tr>
                        <td>Continents: </td>
                        {currentDisplay.continents.map((continent) => (
                            <td key={currentDisplay.name.official}>{continent}</td>
                        ))}
                    </tr>
                    <tr>
                        <td>Independent: </td>
                        <td>{currentDisplay.independent ? "Yes" : "No"}</td>
                    </tr>
                    <tr>
                        <td>Landlocked: </td>
                        <td>{currentDisplay.landlocked ? "Yes" : "No"}</td>
                    </tr>
                    <tr>
                        <td>Member of UN: </td>
                        <td>{currentDisplay.unMember ? "Yes" : "No"}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Overview;

/*
maps?
*/
