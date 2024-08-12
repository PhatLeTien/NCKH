import React from 'react';
import { useParams } from 'react-router-dom';
import { mainNews, sideNews, additionalNews1, additionalNews2 } from '../Scripts/DataNews';
import '../Style/DetailNews.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer2';

const DetailNews = () => {
    const { id } = useParams();
    const allNews = [mainNews, ...sideNews, ...additionalNews1, ...additionalNews2];
    const article = allNews.find(news => news.id === id);

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <div className="detail-page-news">
            <Header />
            <div className="detail-news-container">
                <div className="detail-news-content">
                    <div className="detail-news-image">
                        <img src={article.imageUrl} alt={article.title} />
                    </div>
                    <div className="detail-news-info">
                        <div className="title-container">
                            <h1>{article.title}</h1>
                        </div>
                        <p>{article.description}</p>
                        <p className="author-news">{article.author}</p>
                        <p className="published-news">{article.published}</p>
                        <p className="categories-news">{article.category1} » {article.category2}</p>
                    </div>
                </div>
                <div className="detail-body-news">
                    <div>{article.detail}</div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DetailNews;
