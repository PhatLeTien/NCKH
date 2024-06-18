import React, { useState } from 'react';
import '../Style/NewsContent.css';
import { mainNews, sideNews, additionalNews1, additionalNews2 } from '../Scripts/DataNews';

const NewsContent = () => {
    const itemsPerPage = 8; // Number of items to show per page
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the total number of pages
    const totalItems = additionalNews1.length + additionalNews2.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Helper function to get the current items based on the page
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

    const currentAdditionalNews1 = getCurrentItems(additionalNews1);
    const currentAdditionalNews2 = getCurrentItems(additionalNews2);

    return (
        <div className="news-container">
            <div className="news-header">
                <h1>News</h1>
            </div>
            <div className="columns-container">
                <div className="column main-news-column">
                    <div className="main-news">
                        <div className="main-news-image">
                            <img src={mainNews.imageUrl} alt="Main News" />
                        </div>
                        <div className="main-news-content">
                            <a href={mainNews.link}>
                                <h1>{mainNews.title}</h1>
                                <p>{mainNews.description}</p>
                                <p className="author">{mainNews.author}</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="column side-news-column">
                    {sideNews.slice(0, 2).map((news, index) => (
                        <div key={index} className="side-news-item">
                            <div className="side-news-image">
                                <img src={news.imageUrl} alt={`Side News ${index + 1}`} />
                            </div>
                            <div className="side-news-content">
                                <a href={news.link}>
                                    <p>{news.title}</p>
                                    <p className="author">{news.author}</p>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="column side-news-column">
                    {sideNews.slice(2, 4).map((news, index) => (
                        <div key={index} className="side-news-item">
                            <div className="side-news-image">
                                <img src={news.imageUrl} alt={`Side News ${index + 3}`} />
                            </div>
                            <div className="side-news-content">
                                <a href={news.link}>
                                    <p>{news.title}</p>
                                    <p className="author">{news.author}</p>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="news-additional-content">
                <div className="additional-news-container-1">
                    {currentAdditionalNews1.map((news, index) => (
                        <a href={news.link} key={index} className="additional-news-link">
                            <div className="additional-news-item">
                                <div className="additional-news-image">
                                    <img src={news.imageUrl} alt={`Additional News ${index + 1}`} />
                                </div>
                                <div className="additional-news-content">
                                    <p className="article-latest-category">
                                        <span className="highlighted">{news.category1}</span> <span className="separator">»</span> <span className="highlighted">{news.category2}</span>
                                    </p>
                                    <p><span className="title">{news.title}</span></p>
                                    <p className="description">{news.description}</p>
                                    <p className="author">{news.author} <span className="published">{news.published}</span></p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                <div className="additional-news-container-2">
                    {currentAdditionalNews2.map((news, index) => (
                        <a href={news.link} key={index} className="additional-news-link">
                            <div className="additional-news-item">
                                <div className="additional-news-image">
                                    <img src={news.imageUrl} alt={`Additional News ${index + 3}`} />
                                </div>
                                <div className="additional-news-content">
                                    <p className="article-latest-category">
                                        <span className="highlighted">{news.category1}</span> <span className="separator">»</span> <span className="highlighted">{news.category2}</span>
                                    </p>
                                    <p><span className="title">{news.title}</span></p>
                                    <p className="description">{news.description}</p>
                                    <p className="author">{news.author} <span className="published">{news.published}</span></p>
                                </div>
                            </div>
                        </a>
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
