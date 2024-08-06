import '../../../styles/MainSlaider.css'

import large_picture from "../../../images/large_picture.svg";
import icon_magnifier from "../../../images/icon_magnifier.svg";
import icon_shield from "../../../images/icon_shield.svg";
import icon_watch from "../../../images/icon_watch.svg";
import arrow from "../../../images/arrow.svg";
import {useRef} from "react";


function MainSlaider (){

    const carouselRef = useRef ( null );

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft -= window.innerWidth / 3;
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {

            carouselRef.current.scrollLeft += window.innerWidth / 3;
        }
    };


    return (
        <div className="whyUs-block">
            <h2>Почему именно мы</h2>

            <div className="carousel">
                <div className="carousel-arrow left-arrow" onClick={scrollLeft}>
                    <img src={arrow} alt="arrow" role="button"/>
                </div>

                <div className="carousel-content" ref={carouselRef}>
                    <div className="carousel-item">
                        <img className="why_us_icon" src={icon_shield} alt="shield icon"/>
                        <p>Защита конфиденциальных сведений, <br/>не подлежащих разглашению по <br/>федеральному
                            законодательству</p>
                    </div>
                    <div className="carousel-item">
                        <img className="why_us_icon" src={icon_watch} alt="watch icon"/>
                        <p>Высокая и оперативная скорость <br/>обработки заявки</p>
                    </div>
                    <div className="carousel-item">
                        <img className="why_us_icon" src={icon_magnifier} alt="magnifier icon"/>
                        <p>Огромная комплексная база <br/>данных, обеспечивающая <br/>объективный ответ на запрос</p>
                    </div>
                    <div className="carousel-item">
                        <img className="why_us_icon" src={icon_shield} alt="shield icon"/>
                        <p>Защита конфиденциальных сведений, <br/>не подлежащих разглашению по <br/>федеральному
                            законодательству</p>
                    </div>
                    <div className="carousel-item">
                        <img className="why_us_icon" src={icon_watch} alt="watch icon"/>
                        <img className="why_us_icon" src={icon_watch} alt="watch icon"/>
                        <p>Тест<br/>Тест</p>
                    </div>

                </div>

                <div className="carousel-arrow right-arrow" onClick={scrollRight}>
                    <img src={arrow} alt="arrow" role="button"/>
                </div>
            </div>

            <div className="why-us-image-container">
                <img className="why-us-large-image" src={large_picture} alt="Why us Scan image"/>
            </div>

        </div>
    )
}

export default MainSlaider;