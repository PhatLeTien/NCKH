import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../Style/HomeContent.css';
import { mainArticle, sideArticle, tipsGuides, latestUpdates, topGames, hadesEssentials, futureGames, additionalSections } from '../Scripts/DataHome';

const HomeContent = () => {
    return (
        <div className="home-container">
            <div className="main-article">
                <img src={mainArticle.img} alt="Zelda Lego Set" className="main-image" />
                <a href={mainArticle.link} className="main-article-link">
                    <div className="main-article-content">
                        <div className="article-title">
                            {mainArticle.title}
                        </div>
                        <div className="article-description">
                            {mainArticle.description}
                        </div>
                        <div className="article-author">{mainArticle.author}</div>
                    </div>
                </a>
            </div>
            <div className="side-articles">
                {sideArticle.map((sidearticle, index) => (
                    <div className="highlighted-article" key={index}>
                        <img src={sidearticle.img} alt="Spiderman Sale" className="highlighted-image" />
                        <div className="highlighted-title">{sidearticle.title}</div>
                    </div>
                ))}
            </div>
            <div className="tips-guides">
                <div className="tips-guides-header">
                    <div className="tips-guides-title">Tips & Guides</div>
                    <a href="/" className="view-all-link">View All</a>
                </div>
                <ul>
                    {tipsGuides.map((tipsguides, index) => (
                        <li key={index}>
                            <a href="/">
                                <div className="tips-item">
                                    <img src={tipsguides.img} alt="Hades 2" />
                                    <span>{tipsguides.span}</span>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="latest-updates">
                <div className="latest-updates-header">
                    <div className="latest-updates-title">PTGAMES's Latest</div>
                    <a href="/" className="latest-updates-view-all-link">View All</a>
                </div>
                <div className="latest-updates-grid">
                    {latestUpdates.map((update, index) => (
                        <div key={index} className="latest-updates-column">
                            <div className={`latest-updates-item ${update.size === "large" ? "large" : "small"}`}>
                                <img src={update.img} alt={update.alt} className="latest-updates-image" />
                                <div className="latest-updates-content">
                                    <div className="latest-updates-article-title">{update.title}</div>
                                    <div className="latest-updates-article-description">{update.description}</div>
                                    <div className="latest-updates-article-author">{update.author}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="top-games">
                <div className="top-games-header">
                    <div className="top-games-title">Top Games</div>
                    <div className="top-games-search-container">
                        <input type="text" className="top-games-search" placeholder="Search..." />
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    </div>
                </div>
                <div className="top-games-grid">
                    {/* Game 1 2 3 4 5*/}
                    {topGames.map((topgames, index) => (
                        <div key={index} className="top-games-column">
                            <div className="top-games-item">
                                <img src={topgames.img} alt={topgames.alt} className="top-games-image" />
                                <div className="top-games-content">
                                    <div className="top-games-article-title">{topgames.title}</div>
                                    <div className="top-games-article-author">{topgames.author}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="hades-essentials">
                <div className="essentials-header">
                    <div className="essentials-title">Summer Game Fest Essentials</div>
                </div>
                <div className="essentials-grid">
                    {hadesEssentials.map((hades, index) => (
                        <div key={index} className="essentials-item">
                            <img src={hades.img} alt={hades.alt} className="essentials-image" />
                            <div className="essentials-content">
                                <div className="essentials-article-title">{hades.title}</div>
                                <div className="essentials-article-author">{hades.author}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="future-games">
                <div className="future-header">
                    <div className="future-title">Future Games</div>
                </div>
                <div className="future-games-grid">
                    {futureGames.map((futuregames, index) => (
                        <div key={index} className="future-game-item">
                            <img src={futuregames.img} alt={futuregames.alt} className="future-game-image" />
                            <div className="future-game-content">
                                <div className="future-game-article-title">{futuregames.title}</div>
                                <div className="future-game-article-author">{futuregames.author}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="additional-sections">
                <div className="section tv-movies">
                    <h2 className="section-title">TV and Movies</h2>
                    <div className="section-content">
                        {additionalSections.tvMovies.map((tv, index) => (
                            <div key={index} className="article">
                                <img src={tv.img} alt={tv.alt} />
                                <div className="article-title">
                                    {tv.title}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="section commentary">
                    <h2 className="section-title">Commentary</h2>
                    <div className="section-content">
                        {additionalSections.commentary.map((commentary, index) => (
                            <div key={index} className="article">
                                <img src={commentary.img} alt={commentary.alt} />
                                <div className="article-title">{commentary.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="section retro">
                    <h2 className="section-title">Retro</h2>
                    <div className="section-content">
                        {additionalSections.retro.map((retro, index) => (
                            <div key={index} className="article">
                                <img src={retro.img} alt={retro.alt} />
                                <div className="article-title">{retro.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;
