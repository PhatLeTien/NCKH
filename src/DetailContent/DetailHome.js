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
        <div className="detail-page-home">
            <Header />
            <div className="detail-wrapper-home">
                <div className="detail-container-home">
                    <div className="detail-header-home">
                        <img src={article.img} alt={article.alt} className="detail-image" />
                        <div className="detail-header-content-home">
                            <h1 className="detail-title-home">{t(article.title)}</h1>
                            <div className="detail-author-home">{article.author}</div>
                            <p className="detail-description-home">{t(article.description)}</p>
                        </div>
                    </div>
                    <div className="detail-body-home">
                        <div>{article.detail}</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div >
    );
};

export default DetailHome;
