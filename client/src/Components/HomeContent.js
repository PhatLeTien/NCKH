import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../Style/HomeContent.css';
import { mainArticle, sideArticle, tipsGuides, latestUpdates, topGames, hadesEssentials, futureGames, additionalSections } from '../Scripts/DataHome';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const HomeContent = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    const openDetail = (article) => {
        navigate(`/home/article/${article.id}`);
    };

    return (
        <div className="home-container">
            <div className="main-article">
                <img src={mainArticle.img} alt="Zelda Lego Set" className="main-image" />
                <div className="main-article-content" onClick={() => openDetail(mainArticle)}>
                    <div className="main-article-title">
                        {t('mainArticle.mainArticleTitle')}
                    </div>
                    <div className="main-article-description">
                        {t('mainArticle.mainArticleDescription')}
                    </div>
                    <div className="main-article-author">{mainArticle.author}</div>
                </div>
            </div>
            <div className="side-articles">
                {sideArticle.map((sidearticle, index) => (
                    <div className="highlighted-article" key={index} onClick={() => openDetail(sidearticle)}>
                        <img src={sidearticle.img} alt="Spiderman Sale" className="highlighted-image" />
                        <div className="highlighted-title">{t(`sideArticles.sideArticleTitle${index + 1}`)}</div>
                    </div>
                ))}
            </div>
            <div className="tips-guides">
                <div className="tips-guides-header">
                    <div className="tips-guides-title-header">{t('tipsGuides.tipsGuidesTitleHeader')}</div>
                    <a href="/guides" className="view-all-link">{t('tipsGuides.viewAll')}</a>
                </div>
                <ul>
                    {tipsGuides.map((tipsguides, index) => (
                        <li key={index} onClick={() => openDetail(tipsguides)}>
                            <div className="tips-guides-article-link">
                                <div className="tips-item">
                                    <img src={tipsguides.img} alt="Hades 2" />
                                    <div className="tips-guides-title">{t(`tipsGuides.tipGuideTitle${index + 1}`)}</div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="latest-updates">
                <div className="latest-updates-header">
                    <div className="latest-updates-title">{t('latestUpdates.latestUpdatesTitle')}</div>
                    <a href="/latest" className="latest-updates-view-all-link">{t('latestUpdates.viewAll')}</a>
                </div>
                <div className="latest-updates-grid">
                    {latestUpdates.map((update, index) => (
                        <div key={index} className="latest-updates-column" onClick={() => openDetail(update)}>
                            <div className={`latest-updates-item ${update.size === "large" ? "large" : "small"}`}>
                                <img src={update.img} alt={update.alt} className="latest-updates-image" />
                                <div className="latest-updates-content">
                                    <div className="latest-updates-article-title">{t(`latestUpdates.latestUpdateTitle${index + 1}`)}</div>
                                    <div className="latest-updates-article-description">{t(`latestUpdates.latestUpdateDescription${index + 1}`)}</div>
                                    <div className="latest-updates-article-author">{update.author}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="top-games">
                <div className="top-games-header">
                    <div className="top-games-title">{t('topGames.topGamesTitle')}</div>
                    <div className="top-games-search-container">
                        <input type="text" className="top-games-search" placeholder={t('topGames.searchPlaceholder')} />
                        <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    </div>
                </div>
                <div className="top-games-grid">
                    {topGames.map((topgames, index) => (
                        <div key={index} className="top-games-column" onClick={() => openDetail(topgames)}>
                            <div className="top-games-item">
                                <img src={topgames.img} alt={topgames.alt} className="top-games-image" />
                                <div className="top-games-content">
                                    <div className="top-games-article-title">{t(topgames.title)}</div>
                                    <div className="top-games-article-author">{topgames.author}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="hades-essentials">
                <div className="essentials-header">
                    <div className="essentials-title">{t('hadesEssential.hadesEssentialsTitleHeader')}</div>
                </div>
                <div className="essentials-grid">
                    {hadesEssentials.map((hades, index) => (
                        <div key={index} className="essentials-item" onClick={() => openDetail(hades)}>
                            <img src={hades.img} alt={hades.alt} className="essentials-image" />
                            <div className="essentials-content">
                                <div className="essentials-article-title">{t(`hadesEssential.hadesEssentialsTitle${index + 1}`)}</div>
                                <div className="essentials-article-author">{hades.author}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="future-games">
                <div className="future-header">
                    <div className="future-title">{t('futureGames.futureGamesTitleHeader')}</div>
                </div>
                <div className="future-games-grid">
                    {futureGames.map((futuregames, index) => (
                        <div key={index} className="future-game-item" onClick={() => openDetail(futuregames)}>
                            <img src={futuregames.img} alt={futuregames.alt} className="future-game-image" />
                            <div className="future-game-content">
                                <div className="future-game-article-title">{t(`futureGames.futureGamesTitle${index + 1}`)}</div>
                                <div className="future-game-article-author">{futuregames.author}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="additional-sections">
                <div className="section tv-movies">
                    <h2 className="section-title">{t('tvMovies.tvMoviesTitle')}</h2>
                    <div className="section-content">
                        {additionalSections.tvMovies.map((tv, index) => (
                            <div key={index} className="article" onClick={() => openDetail(tv)}>
                                <img src={tv.img} alt={tv.alt} />
                                <div className="additional-article-title">
                                    {t(`tvMovies.tvMovies${index + 1}`)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="section commentary">
                    <h2 className="section-title">{t('commentary.commentaryTitle')}</h2>
                    <div className="section-content">
                        {additionalSections.commentary.map((commentary, index) => (
                            <div key={index} className="article" onClick={() => openDetail(commentary)}>
                                <img src={commentary.img} alt={commentary.alt} />
                                <div className="commentary-article-title">{t(`commentary.commentary${index + 1}`)}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="section retro">
                    <h2 className="section-title">{t('retro.retroTitle')}</h2>
                    <div className="section-content">
                        {additionalSections.retro.map((retro, index) => (
                            <div key={index} className="article" onClick={() => openDetail(retro)}>
                                <img src={retro.img} alt={retro.alt} />
                                <div className="retro-article-title">{t(`retro.retro${index + 1}`)}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;
