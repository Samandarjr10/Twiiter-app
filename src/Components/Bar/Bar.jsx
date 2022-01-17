import data from "../../Localization/Data";
import "./Bar.scss" 
import React from "react";
import { Context } from "../../Сontext/Localization";
import Home from "../../Assets/Images/home.svg"
import List from "../../Assets/Images/list.svg"
import More from "../../Assets/Images/more.svg"
import Explore from "../../Assets/Images/panjara.svg"
import Profil from "../../Assets/Images/profil.svg"
import Qongiroq from "../../Assets/Images/qo'ngiroq.svg"
import PapkaSms from "../../Assets/Images/sms-papka.svg"
import Bookmark from "../../Assets/Images/zametka.svg"
import Twitter from "../../Assets/Images/twitter-logo.svg"
import Movlonov2 from "../../Assets/Images/movlonov1.png"
import Nuqta from "../../Assets/Images/nuqta.svg"

function Main() {
    const {state} = React.useContext(Context)
    
    return <div className="wrapper">
        <img className="twitter" src={Twitter} alt="twitter-logo" width={40} height={33}/>
        <ul className="list">
            <li className="list__item">
                <img className="list__item-image" src={Home} alt="home" width={25} height={24}/>
                <a className="list__item-link" href="#">
                    {data[state].sitebar.wrapper.list.listItem.listItemLink.Home}
                </a>
            </li>
            <li className="list__item">
                <img className="list__item-image" src={Explore} alt="home" width={25} height={24}/>
                <a className="list__item-link" href="">
                    {data[state].sitebar.wrapper.list.listItem.listItemLink.Explore}
                </a>
            </li>
            <li className="list__item">
                <img className="list__item-image" src={Qongiroq} alt="home" width={25} height={24}/>
                <a className="list__item-link" href="">
                    {data[state].sitebar.wrapper.list.listItem.listItemLink.Notifications}
                </a>
            </li>
            <li className="list__item">
                <img className="list__item-image" src={PapkaSms} alt="home" width={25} height={24}/>
                <a className="list__item-link" href="">
                    {data[state].sitebar.wrapper.list.listItem.listItemLink.Messeges}
                </a>
            </li>
            <li className="list__item">
                <img className="list__item-image" src={Bookmark} alt="home" width={25} height={24}/>
                <a className="list__item-link"  href="">
                    {data[state].sitebar.wrapper.list.listItem.listItemLink.Bookmarks}   
                </a>
            </li>
            <li className="list__item">
                <img className="list__item-image" src={List} alt="home" width={25} height={24}/>
                <a className="list__item-link" href="">
                    {data[state].sitebar.wrapper.list.listItem.listItemLink.Lists}
                </a>
            </li>
            <li className="list__item">
                <img className="list__item-image" src={Profil} alt="home" width={25} height={24}/>
                <a className="list__item-link" href="">
                    {data[state].sitebar.wrapper.list.listItem.listItemLink.Profill}
                </a>
            </li>
            <li className="list__item">
                <img className="list__item-image" src={More} alt="home" width={25} height={24}/>
                <a className="list__item-link" href="">
                    {data[state].sitebar.wrapper.list.listItem.listItemLink.More}
                </a>
            </li>
        </ul>
        <a className="btn" href="#">{data[state].home.hero.homeListWrapper.button.Tweet}</a>

        <div className="wrap">
            <img className="wrap__img" src={Movlonov2} alt="movlonov2" width={50} height={50} />
            <div className="wrap__inner">
                <h4 className="wrap__heading">Bobur</h4>
                <a href="#" className="wrap__text">@bobur_mavlonov</a>
            </div>
            <img className="wrap__image" src={Nuqta} alt="nuqtalar" width={17} height={4} />
        </div>
    </div>
}

export default Main;