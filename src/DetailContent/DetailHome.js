import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../Style/DetailHome.css';
import { mainArticle, sideArticle, tipsGuides, latestUpdates, topGames, hadesEssentials, futureGames, additionalSections } from '../Scripts/DataHome';
import Header from '../Components/Header';
import Footer from '../Components/Footer2';

const DetailHome = () => {
    const { t } = useTranslation();
    const { id } = useParams();

    const allArticles = [mainArticle, ...sideArticle, ...tipsGuides, ...latestUpdates, ...topGames, ...hadesEssentials, ...futureGames, ...additionalSections.tvMovies, ...additionalSections.commentary, ...additionalSections.retro];
    const article = allArticles.find(article => article.id === id);

    if (!article) {
        return <div>{t('articleNotFound')}</div>;
    }

    return (
        <div className="detail-page">
            <Header/>
            <div className="detail-wrapper">
                <div className="detail-container">
                    <div className="detail-header">
                        <img src={article.img} alt={article.alt} className="detail-image" />
                        <div className="detail-header-content">
                            <h1 className="detail-title">{t(article.title)}</h1>
                            <div className="detail-author">{article.author}</div>
                            <p>{t(article.description)}</p>
                        </div>
                    </div>
                    <div className="detail-body">

                    </div>
                </div>
            </div>
            <Footer/>
        </div >
    );
};

export default DetailHome;
