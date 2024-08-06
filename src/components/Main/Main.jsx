
import '../../styles/Main.css';
import AboutService from './AboutService/AboutService.jsx';
// import WhyUs from "./WhyUs/WhyUs";
import Rates from "./Rates/Rates.jsx";
import MainSlaider from "./MainSlider/MainSlaider.jsx";



function Main ({isLoggedIn, userTariff}) {
  return (
    <div className="main-content">
        <AboutService isLoggedIn={isLoggedIn} />
        <MainSlaider />
        <Rates isLoggedIn={isLoggedIn} userTariff={userTariff} />
    </div>
  )
}

export default Main;