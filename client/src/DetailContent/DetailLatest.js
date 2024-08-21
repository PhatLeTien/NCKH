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
        <div className="detail-page-latest"> {/* Add your className here */}
            <Header />
            <div className="detail-wrapper-latest"> {/* New class name added */}
                <div className="detail-container-latest">
                    <img src={article.imgSrc} alt={article.title} className="detail-image-latest" />
                    <div className="detail-content-latest">
                        <h1 className="detail-title-latest">{article.title}</h1>
                        <p className="detail-category-latest">
                            <span className="highlighted-latest">{article.category1}</span>
                            <span className="separator-latest"> » </span>
                            <span className="highlighted-latest">{article.category2}</span>
                        </p>
                        <p className="detail-description-latest">{article.description}</p>
                        <p className="detail-author-latest">
                            {article.author} <span className="detail-published-latest">{article.published}</span>
                        </p>
                    </div>
                    <div className="detail-body-latest">
                        <div>{article.detail}</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DetailLatest;
