import data from "../../Localization/Data";
import { Context } from "../../Сontext/Localization";
import "./Trends.scss"
import React from "react";
import Settings from "../../Assets/Images/settings.svg"
import Nuqta from "../../Assets/Images/nuqta.svg"
import Mushtariy from "../../Assets/Images/Ellipse2.png"
import Boy from "../../Assets/Images/Ellipse.png"

function Trend() {
    const {state} = React.useContext(Context);
    
    return <div className="trend-wrapper">
        <div className="trend">
            <input className="trend__input" type="text" placeholder={data[state].trend.trendWrapper.searchTwitter} />
        </div>
        <div className="revolition">
            <div className="revolition__wrapper">
                <h3 className="revolition__heading">
                    {data[state].trend.revolitionWrapper.revolitionHeading.Trendsforyou}
                </h3>
                <img src={Settings} alt="settings" width={21} height={21} />
            </div>
            <ul className="list">
                <li className="list__item">
                    <div className="list__wrapper">
                        <p className="list__treending-text">Trending in Germany</p>
                        <h5 className="list__heading">
                            Revolution
                        </h5>
                        <p className="list__text">
                            50.4K {data[state].trend.list.listWrapper.listText.Tweets}
                        </p>
                    </div>
                    <img src={Nuqta} alt="nuqta" width={17} height={4}/>
                </li>
                <li className="list__item">
                    <div className="list__wrapper">
                        <p className="list__treending-text">Trending in Germany</p>
                        <h5 className="list__heading">
                            Revolution
                        </h5>
                        <p className="list__text">
                            50.4K {data[state].trend.list.listWrapper.listText.Tweets}
                        </p>
                    </div>
                    <img src={Nuqta} alt="nuqta" width={17} height={4}/>
                </li>
                <li className="list__item">
                    <div className="list__wrapper">
                        <p className="list__treending-text">Trending in Germany</p>
                        <h5 className="list__heading">
                            Revolution
                        </h5>
                        <p className="list__text">
                            50.4K {data[state].trend.list.listWrapper.listText.Tweets}
                        </p>
                    </div>
                    <img src={Nuqta} alt="nuqta" width={17} height={4}/>
                </li>
            </ul>
            <a className="show-more" href="#">{data[state].trend.showMore.ShowMore}</a>
        </div>
        <div className="might">
            <h3 className="might__heading">{data[state].trend.might.mightHeading.YouMightLike.Youmightlike}</h3>
            <ul className="might__list">
                <li className="might__list-item">
                    <img className="might__list-img" src={Mushtariy} alt="img-mushtariy" width={60} height={60}/>
                    <div className="might__list-wrapper">
                        <h4 className="might__list-heading">Mushtariy</h4>
                        <p className="might__list-text">@Mushtar565266</p>
                    </div>
                    <a className="might__list-link" href="#">{data[state].trend.might.mightList.mightListItem.mightListLink.Follow}</a>
                </li>
                <li className="might__list-item">
                    <img className="might__list-img" src={Boy} alt="img-mushtariy" width={60} height={60}/>
                    <div className="might__list-wrapper">
                        <h4 className="might__list-heading">Mushtariy</h4>
                        <p className="might__list-text">@Mushtar565266</p>
                    </div>
                    <a className="might__list-link" href="#">{data[state].trend.might.mightList.mightListItem.mightListLink.Follow}</a>
                </li>
            </ul>
            <a className="show-more" href="#">{data[state].trend.showMore.ShowMore}</a>
        </div>
        <ul className="link__list">
            <li className="link__list-item">
                <a className="link__list-link" href="#">Terms of Service</a>
            </li>
            <li className="link__list-item">
                <a className="link__list-link" href="#">Privacy Policy</a>
            </li>
            <li className="link__list-item">
                <a className="link__list-link" href="#">Cookie Policy</a>
            </li>
            <li className="link__list-item">
                <a className="link__list-link" href="#">Imprint</a>
            </li>
            <li className="link__list-item">
                <a className="link__list-link" href="#">Ads Info</a>
            </li>
            <li className="link__list-item">
                <a className="link__list-link" href="#">More</a>
            </li>
            <li className="link__list-item">
                <a className="link__list-link" href="#">© 2021 Twitter, Inc.</a>
            </li>
        </ul>
    </div>
}

export default Trend;