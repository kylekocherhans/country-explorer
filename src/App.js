import "./App.css";
import Header from "./Components/Header";
import MainDisplay from "./Components/MainDisplay";
import OptionDisplay from "./Components/OptionDisplay";
import Loading from "./Components/Loading";
import { useSelector } from "react-redux";
import { selectPotentials } from "./redux/slices/potentialCountriesSlice";
import { selectDisplay } from "./redux/slices/displayCountrySlice";
import { selectLoading } from "./redux/slices/loadingSlice";

function App() {
    let potentials = useSelector(selectPotentials);
    let currentDisplay = useSelector(selectDisplay);
    let isLoading= useSelector(selectLoading);
    console.log('Potentials', potentials);
    console.log('Display', currentDisplay);
    return (
        <div className="App font-link">
            <Header />
            {currentDisplay ? <MainDisplay /> : isLoading ? <Loading /> : <OptionDisplay />}
        </div>
    );
}

export default App;
