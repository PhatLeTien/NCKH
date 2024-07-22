import React from 'react';
import { useParams } from 'react-router-dom';
import '../Style/DetailLatest.css';
import { articles } from '../Scripts/DataLatest';
import Header from '../Components/Header';
import Footer from '../Components/Footer2';

const DetailLatest = () => {
    const { id } = useParams();
    const article = articles.find(article => article.id === parseInt(id, 10));

    if (!article) {
        return <div>Article not found</div>;
    }

    return (
        <div className="detail-page"> {/* Add your className here */}
            <Header />
            <div className="detail-wrapper"> {/* New class name added */}
                <div className="detail-container">
                    <img src={article.imgSrc} alt={article.title} className="detail-image" />
                    <div className="detail-content">
                        <h1 className="detail-title">{article.title}</h1>
                        <p className="detail-category">
                            <span className="highlighted">{article.category1}</span>
                            <span className="separator"> » </span>
                            <span className="highlighted">{article.category2}</span>
                        </p>
                        <p className="detail-description">{article.description}</p>
                        <p className="detail-author">
                            {article.author} <span className="detail-published">{article.published}</span>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DetailLatest;
