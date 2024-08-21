import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/LatestContent.css';
import { articles } from '../Scripts/DataLatest';
import { useTranslation } from 'react-i18next';

const LatestContent = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;

  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="latest-container">
      {currentArticles.map((article, index) => (
        <div key={index} className="article-latest">
          <Link to={`/latest/article/${indexOfFirstArticle + index + 1}`}>
            <img src={article.imgSrc} alt={article.title} className="article-latest-image" />
            <div className="article-latest-content">
              <p className="article-latest-category">
                <span className="highlighted">{article.category1}</span>
                <span className="separator"> » </span>
                <span className="highlighted">{article.category2}</span>
              </p>
              <h2 className="article-latest-title">{t(`articles.ArticleTitle${indexOfFirstArticle + index + 1}`)}</h2>
              <p className="article-latest-description">{t(`articles.ArticleDescription${indexOfFirstArticle + index + 1}`)}</p>
              <p className="article-latest-author">
                {article.author} <span className="article-latest-published">{t(`articles.ArticlePublished${indexOfFirstArticle + index + 1}`)}</span>
              </p>
            </div>
          </Link>
        </div>
      ))}
      <div className="pagination-latest">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>&#8249;</button>
        <span>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>&#8250;</button>
      </div>
    </div>
  );
};

export default LatestContent;
