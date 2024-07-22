import React from 'react';
import '../Style/EntertainmentContent.css';
import { useTranslation } from 'react-i18next';
import { additionalEntertainments, mainEntertainments } from '../Scripts/DataEntertainment';
import { sideEntertainments, actionGamesEntertainments, fantasyGamesEntertainments, horrorGamesEntertainments } from '../Scripts/DataEntertainment';

const EntertainmentContent = () => {
    const { t } = useTranslation();

    const openDetail = (game) => {
        // Define the logic to open the detail view of the game
        console.log('Opening detail for:', game);
    };

    return (
        <div className="entertainment-container">
            <div className="entertainment-header">
                <h1>Entertainment</h1>
                <p>Your Guide To The Biggest Movies And Hottest TV Shows</p>
                <div className="entertainment-categories">
                    <span>Action</span>
                    <span>Fantasy</span>
                    <span>Horror</span>
                    {/* <span>Sci-Fi</span>
                    <span>Superhero</span> */}
                </div>
            </div>
            <div className="entertainment-main-content">
                <div className="entertainment-main-article">
                    <img src={mainEntertainments.image} alt="Main article" />
                    <h2>{t('mainEnt.mainTitle')}</h2>
                    <p>{t('mainEnt.mainDescription')}</p>
                    <p className="entertainment-author">{t('mainEnt.mainAuthor')}</p>
                </div>
                <div className="entertainment-side-articles">
                    {sideEntertainments.slice(0, 10).map((sideentertainments, index) => (
                        <div key={index} className="entertainment-side-article">
                            <a href={sideentertainments.link}>
                                <h3>{t(`sideEnt.sideTitle${ index + 1 }`)}</h3>
                                {/* <p>{review.description}</p> */}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className="entertainment-additional-articles">
                {additionalEntertainments.map((additional, index) => (
                    <div key={index} className="entertainment-additional-article">
                        <a href={additional.link}>
                            <img src={additional.image} alt={`Article ${index}`} />
                            <h3>{t(`addEnt.addEnt${ index + 1 }`)}</h3>
                            {/* <p>{review.description}</p> */}
                        </a>
                    </div>
                ))}
            </div>
            <div className="action-games-ent">
                <div className="action-header-ent">
                    <div className="action-title-ent">{t('titleHeaderEnt.titleHeaderEnt1')}</div>
                </div>
                <div className="action-games-grid-ent">
                    {actionGamesEntertainments.map((actiongames, index) => (
                        <div key={index} className="action-game-item-ent" onClick={() => openDetail(actiongames)}>
                            <img src={actiongames.img} alt={actiongames.alt} className="action-game-image-ent" />
                            <div className="action-game-content-ent">
                                <div className="action-game-article-title-ent">{t(`actionEntGames.actionEnt${index + 1}`)}</div>
                                {/* <div className="action-game-article-author-ent">{actiongames.author}</div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="fantasy-games-ent">
                <div className="fantasy-header-ent">
                    <div className="fantasy-title-ent">{t('titleHeaderEnt.titleHeaderEnt2')}</div>
                </div>
                <div className="fantasy-games-grid-ent">
                    {fantasyGamesEntertainments.map((fantasygames, index) => (
                        <div key={index} className="fantasy-game-item-ent" onClick={() => openDetail(fantasygames)}>
                            <img src={fantasygames.img} alt={fantasygames.alt} className="fantasy-game-image-ent" />
                            <div className="fantasy-game-content-ent">
                                <div className="fantasy-game-article-title-ent">{t(`fantasyEntGames.fantasyEnt${index + 1}`)}</div>
                                {/* <div className="fantasy-game-article-author-ent">{fantasygames.author}</div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="horror-games-ent">
                <div className="horror-header-ent">
                    <div className="horror-title-ent">{t('titleHeaderEnt.titleHeaderEnt3')}</div>
                </div>
                <div className="horror-games-grid-ent">
                    {horrorGamesEntertainments.map((horrorgames, index) => (
                        <div key={index} className="horror-game-item-ent" onClick={() => openDetail(horrorgames)}>
                            <img src={horrorgames.img} alt={horrorgames.alt} className="horror-game-image-ent" />
                            <div className="horror-game-content-ent">
                                <div className="horror-game-article-title-ent">{t(`horrorEntGames.horrorEnt${index + 1}`)}</div>
                                {/* <div className="horror-game-article-author-ent">{horrorgames.author}</div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EntertainmentContent;
