import React, { useState } from 'react';
import '../Style/NewsContent.css';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { mainNews, sideNews, additionalNews1, additionalNews2 } from '../Scripts/DataNews';

const NewsContent = () => {
    const navigate = useNavigate();
    const { t } = useTranslation();
    const itemsPerPage = 8;
    const [currentPage, setCurrentPage] = useState(1);

    const totalItems = additionalNews1.length + additionalNews2.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const getCurrentItems = (newsArray) => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return newsArray.slice(startIndex, endIndex);
    };

    const handlePrevClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const openDetail = (article) => {
        navigate(`/news/article/${article.id}`);
    };

    const currentAdditionalNews1 = getCurrentItems(additionalNews1);
    const currentAdditionalNews2 = getCurrentItems(additionalNews2);

    const startIndex1 = (currentPage - 1) * itemsPerPage;

    return (
        <div className="news-container">
            <div className="news-header">
                <h1>News</h1>
            </div>
            <div className="columns-container">
                <div className="column main-news-column" onClick={() => openDetail(mainNews)}>
                    <div className="main-news">
                        <div className="main-news-image">
                            <img src={mainNews.imageUrl} alt="Main News" />
                        </div>
                        <div className="main-news-content">
                            <h1>{t('mainNewsContent.mainNewsTitle')}</h1>
                            <p>{t('mainNewsContent.mainNewsDescription')}</p>
                            <p className="author">{mainNews.author}</p>
                        </div>
                    </div>
                </div>
                <div className="column side-news-column">
                    {sideNews.slice(0, 2).map((news, index) => (
                        <div key={index} className="side-news-item" onClick={() => openDetail(news)}>
                            <div className="side-news-image">
                                <img src={news.imageUrl} alt={`Side News ${index + 1}`} />
                            </div>
                            <div className="side-news-content">
                                <p>{t(`sideNewsContent.sideNewsTitle${index+1}`)}</p>
                                <p className="author">{news.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="column side-news-column">
                    {sideNews.slice(2, 4).map((news, index) => (
                        <div key={index} className="side-news-item" onClick={() => openDetail(news)}>
                            <div className="side-news-image">
                                <img src={news.imageUrl} alt={`Side News ${index + 3}`} />
                            </div>
                            <div className="side-news-content">
                                <p>{t(`sideNewsContent.sideNewsTitle${index+3}`)}</p>
                                <p className="author">{news.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="news-additional-content">
                <div className="additional-news-container-1">
                    {currentAdditionalNews1.map((news, index) => (
                        <div key={index} className="additional-news-link" onClick={() => openDetail(news)}>
                            <div className="additional-news-item">
                                <div className="additional-news-image">
                                    <img src={news.imageUrl} alt={`Additional News ${index + 1}`} />
                                </div>
                                <div className="additional-news-content">
                                    <p className="article-latest-category">
                                        <span className="highlighted">{news.category1}</span> <span className="separator">»</span> <span className="highlighted">{news.category2}</span>
                                    </p>
                                    <p><span className="title">{t(`additionalNews1.addTitle${ startIndex1 + index + 1 }`)}</span></p>
                                    <p className="description">{t(`additionalNews1.addDesciption${ startIndex1 + index + 1 }`)}</p>
                                    <p className="author">{news.author} <span className="published">{t(`additionalNews1.addPublished${ startIndex1+ index + 1 }`)}</span></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="additional-news-container-2">
                    {currentAdditionalNews2.map((news, index) => (
                        <div key={index} className="additional-news-link" onClick={() => openDetail(news)}>
                            <div className="additional-news-item">
                                <div className="additional-news-image">
                                    <img src={news.imageUrl} alt={`Additional News ${index + 3}`} />
                                </div>
                                <div className="additional-news-content">
                                    <p className="article-latest-category">
                                        <span className="highlighted">{news.category1}</span> <span className="separator">»</span> <span className="highlighted">{news.category2}</span>
                                    </p>
                                    <p><span className="title">{t(`additionalNews2.addTitle${ index+1 }`)}</span></p>
                                    <p className="author">{news.author} <span className="published">{t(`additionalNews2.addPublished${ index+1 }`)}</span></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="pagination-news">
                <button onClick={handlePrevClick} disabled={currentPage === 1}>&#8249;</button>
                <span className="page-info">Page {currentPage} of {totalPages}</span>
                <button onClick={handleNextClick} disabled={currentPage === totalPages}>&#8250;</button>
            </div>
        </div>
    );
};

export default NewsContent;
