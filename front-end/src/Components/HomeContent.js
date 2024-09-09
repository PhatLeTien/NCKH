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
           
        </div>
    );
};

export default HomeContent;
