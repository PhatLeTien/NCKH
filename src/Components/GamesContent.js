import React from 'react';
import '../Style/GamesContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Games } from '../Scripts/DataGames';

function GamesContent() {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const openDetail = (article) => {
        navigate(`/games/article/${article.id}`);
    };

    return (
        <div className="best-games">
            <div className="best-games-header">
                <h1>GAMES</h1>
                <div className="best-games-search-container">
                    <input type="text" className="best-games-search" placeholder={t('topGame.searchPlaceholder')} />
                    <FontAwesomeIcon icon={faSearch} className="best-search-icon" />
                </div>
                <div className="best-games-title">{t('topGame.topGameTitle1')}</div>
            </div>
            <div className="best-games-grid">
                {Games.bestGames.map((topgames, index) => (
                    <div key={index} className="best-games-column" onClick={() => openDetail(topgames)}>
                        <div className="best-games-item">
                            <img src={topgames.img} alt={topgames.alt} className="best-games-image" />
                            <div className="best-games-content">
                                <div className="best-games-article-title">{t(`bestGames.bestGamesTitle${index+1}`)}</div>
                                <div className="best-games-article-author">{topgames.author}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="rpg-games">
                <div className="rpg-games-header">
                    <div className="rpg-games-title">{t('topGame.topGameTitle2')}</div>
                    <div className="rpg-games-search-container">
                        <input type="text" className="rpg-games-search" placeholder={t('topGame.searchPlaceholder')} />
                        <FontAwesomeIcon icon={faSearch} className="rpg-search-icon" />
                    </div>
                </div>
                <div className="rpg-games-grid">
                    {Games.rpgGames.map((rpgGames, index) => (
                        <div key={index} className="rpg-games-column" onClick={() => openDetail(rpgGames)}>
                            <div className="rpg-games-item">
                                <img src={rpgGames.img} alt={rpgGames.alt} className="rpg-games-image" />
                                <div className="rpg-games-content">
                                    <div className="rpg-games-article-title">{t(`rpgGames.rpgGamesTitle${index+1}`)}</div>
                                    <div className="rpg-games-article-author">{rpgGames.author}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="racing-games">
                <div className="racing-games-header">
                    <div className="racing-games-title">{t('topGame.topGameTitle3')}</div>
                    <div className="racing-games-search-container">
                        <input type="text" className="racing-games-search" placeholder={t('topGame.searchPlaceholder')} />
                        <FontAwesomeIcon icon={faSearch} className="racing-search-icon" />
                    </div>
                </div>
                <div className="racing-games-grid">
                    {Games.racingGames.map((racinggames, index) => (
                        <div key={index} className="racing-games-column" onClick={() => openDetail(racinggames)}>
                            <div className="racing-games-item">
                                <img src={racinggames.img} alt={racinggames.alt} className="racing-games-image" />
                                <div className="racing-games-content">
                                    <div className="racing-games-article-title">{t(`racingGames.racingGamesTitle${index+1}`)}</div>
                                    <div className="racing-games-article-author">{racinggames.author}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="horror-games">
                <div className="horror-games-header">
                    <div className="horror-games-title">{t('topGame.topGameTitle4')}</div>
                    <div className="horror-games-search-container">
                        <input type="text" className="horror-games-search" placeholder={t('topGame.searchPlaceholder')} />
                        <FontAwesomeIcon icon={faSearch} className="horror-search-icon" />
                    </div>
                </div>
                <div className="horror-games-grid">
                    {Games.horrorGames.map((horrorgames, index) => (
                        <div key={index} className="horror-games-column" onClick={() => openDetail(horrorgames)}>
                            <div className="horror-games-item">
                                <img src={horrorgames.img} alt={horrorgames.alt} className="horror-games-image" />
                                <div className="horror-games-content">
                                    <div className="horror-games-article-title">{t(`horrorGames.horrorGamesTitle${index+1}`)}</div>
                                    <div className="horror-games-article-author">{horrorgames.author}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default GamesContent;