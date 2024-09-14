import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../Home/HomeContent.css';
import { mainArticle, sideArticle, tipsGuides } from '../../Scripts/DataHome';
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
                <img src={mainArticle.img} alt="Main Article" className="main-image" />
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
                        <img src={sidearticle.img} alt={`Side Article ${index + 1}`} className="highlighted-image" />
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
                            <div className="tips-item">
                                <img src={tipsguides.img} alt={`Tips Guide ${index + 1}`} />
                                <div className="tips-guides-title">{t(`tipsGuides.tipGuideTitle${index + 1}`)}</div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HomeContent;
