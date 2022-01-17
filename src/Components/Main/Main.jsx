import "./Main.scss";
import React from "react";
import { Context } from "../../Сontext/Localization";
import Movlonov from "../../Assets/Images/movlonov.png"
import Stark from "../../Assets/Images/yulduz.svg"
import Picture from "../../Assets/Images/izabrajeniya.svg"
import Gif from "../../Assets/Images/gif.svg"
import Stats from "../../Assets/Images/stats.svg"
import Smile from "../../Assets/Images/smile.svg"
import Data from "../../Assets/Images/data.svg"
import data from "../../Localization/Data";
import CamBoy from "../../Assets/Images/Ellipsecamer.png"
import BestBoy from "../../Assets/Images/Ellipse3.png"
import Lunchb from "../../Assets/Images/Ellipse-obed.png"
import Nuqta from "../../Assets/Images/nuqta.svg"
import Komment from "../../Assets/Images/komment.svg"
import Return from "../../Assets/Images/return.svg"
import Return2 from "../../Assets/Images/return2.svg"
import Like from "../../Assets/Images/like.svg"
import Like2 from "../../Assets/Images/like2.svg"
import Skachat from "../../Assets/Images/skachat.svg"
import Statistika from "../../Assets/Images/statistika.svg"
import Obed from "../../Assets/Images/obed.png"

function Main() {
    const {state,  setState} = React.useContext(Context);
    return <div className="home">
    <select className='select' onChange={evt => setState(evt.target.value)}>
            <option value="en">EN</option>
            <option value="ru">RU</option>
            <option value="uz">UZ</option>
    </select>

    <section className="hero">
        <div className="home__wrapper">
            <h2 className="home__wrapper-heading">{data[state].home.hero.homeWrapper.homeWrapperHeading.Home}</h2>
            <img className="home__wrapper-star" src={Stark} alt="star" width={22} height={21} />
        </div>
        <span className="line"></span>
        <div className="home__inner-wrapper">
             <img className="home__inner-wrapper-img" src={Movlonov} alt="movlonov" width={60} height={61} />
             <h3 className="home__inner-wrapper-heading">{data[state].home.hero.homeInnerWrapper.homeInnerWrapperHeading.WhatsHappening}</h3>
        </div>
        <div className="home__list-wrapper">
            <ul className="home__list">
                <li className="home_list-item">
                    <button className="home__list-btn">
                        <img className="home__list-img" src={Picture} alt="future" width={20} height={20} />
                    </button>
                    </li>
                <li className="home_list-item">
                    <button className="home__list-btn">
                        <img className="home__list-img" src={Gif} alt="future" width={21} height={20} />
                    </button>
                </li>
                <li className="home__list-item">
                    <button className="home__list-btn">
                        <img className="home__list-img" src={Stats} alt="future" width={20} height={19} />
                    </button>
                </li>
                <li className="home__list-item">
                    <button className="home__list-btn">
                        <img className="home__list-img" src={Smile} alt="future" width={21} height={21} />
                    </button>
                </li>
                <li className="home__list-item">
                    <button className="home__list-btn">
                        <img className="home__list-img" src={Data} alt="future" width={20} height={20} />
                    </button>
                </li>
            </ul>
            <button className="button">{data[state].home.hero.homeListWrapper.button.Tweet}</button>
        </div>
        <span className="line line-2"></span>
    </section> 
    <section className="designsta">
        <div className="designsta__wrapper">
            <img className="designsta__img" src={CamBoy} alt="camerachi" width={60} height={60}/>
            <div className="designsta__inner-wrap">
                <div className="designsta__head">
                    <div className="designsta__tweet">
                        <h4 className="designsta__heading">Designsta</h4>
                        <p className="designsta__text">@inner · 25m</p>
                    </div>
                    <p className="designsta__komment">Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?</p>
                </div>
                <img src={Nuqta} alt="nuqta" width={17} height={4} />
            </div>
        </div>
        <ul className="designsta__list">
            <li className="designsta__list-item">
                <button className="designsta__list-btn">
                    <img className="designsta__list-img" src={Komment} alt="komment" width={20} height={20} />
                </button>
                <p>10</p>
            </li>
            <li className="designsta__list-item">
                <button className="designsta__list-btn">
                    <img className="designsta__list-img" src={Return} alt="komment" width={20} height={20} />
                </button>
                <p>1</p>
            </li>
            <li className="designsta__list-item">
                <button className="designsta__list-btn">
                    <img className="designsta__list-img" src={Like} alt="komment" width={20} height={20} />
                </button>
                <p>8</p>
            </li>
            <li className="designsta__list-item">
                <button className="designsta__list-btn">
                    <img className="designsta__list-img" src={Skachat} alt="komment" width={20} height={20} />
                </button>
            </li>
            <li className="designsta__list-item">
                <button className="designsta__list-btn">
                    <img className="designsta__list-img" src={Statistika} alt="komment" width={20} height={20} />
                </button>
            </li>
        </ul>
        <span className="line"></span>
    </section>
    <section className="clout">
        <div className="clout__wrapper">
            <img className="clout__img" src={BestBoy} alt="camerachi" width={60} height={60}/>
            <div className="clout__inner-wrap">
                <div className="clout__head">
                    <div className="clout__tweet">
                        <h4 className="clout__heading">cloutexhibition</h4>
                        <p className="clout__text">@RajLahoti · 22m</p>
                    </div>
                    <p className="clout__komment">YPIP dasturining bu yilgi sezoni ham o'z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o'sayotganini ko'rib hursand bo'ladi odam.</p>
                </div>
                <img src={Nuqta} alt="nuqta" width={17} height={4} />
            </div>
        </div>
        <ul className="clout__list">
            <li className="clout__list-item">
                <button className="clout__list-btn">
                    <img className="clout__list-img" src={Komment} alt="komment" width={20} height={20} />
                </button>
            </li>
            <li className="clout__list-item">
                <button className="clout__list-btn">
                    <img className="clout__list-img" src={Return2} alt="komment" width={20} height={20} />
                </button>
                <p>5</p>
            </li>
            <li className="clout__list-item">
                <button className="clout__list-btn">
                    <img className="clout__list-img" src={Like2} alt="komment" width={20} height={20} />
                </button>
                <p>9</p>
            </li>
            <li className="clout__list-item">
                <button className="clout__list-btn">
                    <img className="clout__list-img" src={Skachat} alt="komment" width={20} height={20} />
                </button>
            </li>
            <li className="clout__list-item">
                <button className="clout__list-btn">
                    <img className="clout__list-img" src={Statistika} alt="komment" width={20} height={20} />
                </button>
            </li>
        </ul>
        <span className="line"></span>
    </section>  
    <section className="creative">
        <div className="creative__wrapper">
            <img className="creative__img" src={Lunchb} alt="camerachi" width={60} height={60}/>
            <div className="creative__inner-wrap">
                <div className="creative__head">
                    <div className="creative__tweet">
                        <h4 className="creative__heading">CreativePhoto</h4>
                        <p className="creative__text">@cloutexhibition · 1h</p>
                    </div>
                    <p className="creative__komment">Обетда..... <br /> Кечиринглар</p>
                    <img className="creative__obed" src={Obed} alt="obed" width={679} height={453}/>
                </div>
                <img className="creative__image" src={Nuqta} alt="nuqta" width={17} height={4} />
            </div>
        </div>
        <ul className="creative__list">
            <li className="creative__list-item">
                <button className="creative__list-btn">
                    <img className="creative__list-img" src={Komment} alt="komment" width={20} height={20} />
                </button>
                <p>10</p>
            </li>
            <li className="creative__list-item">
                <button className="creative__list-btn">
                    <img className="creative__list-img" src={Return} alt="komment" width={20} height={20} />
                </button>
                <p>1</p>
            </li>
            <li className="creative__list-item">
                <button className="creative__list-btn">
                    <img className="creative__list-img" src={Like} alt="komment" width={20} height={20} />
                </button>
                <p>8</p>
            </li>
            <li className="creative__list-item">
                <button className="creative__list-btn">
                    <img className="creative__list-img" src={Skachat} alt="komment" width={20} height={20} />
                </button>
            </li>
            <li className="creative__list-item">
                <button className="creative__list-btn">
                    <img className="creative__list-img" src={Statistika} alt="komment" width={20} height={20} />
                </button>
            </li>
        </ul>
    </section>  
    </div>
}

export default Main