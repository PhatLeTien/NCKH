import React, { useState } from 'react';
import '../Style/LatestContent.css';
import { articles } from '../Scripts/DataLatest';

const LatestContent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;

  // Calculate total pages
  const totalPages = Math.ceil(articles.length / articlesPerPage);

  // Get the articles for the current page
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  // Functions to handle page navigation
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
          <a href={article.link}>
            <img src={article.imgSrc} alt={article.title} className="article-latest-image" />
            <div className="article-latest-content">
              <p className="article-latest-category">
                <span className="highlighted">{article.category1}</span> <span className="separator">»</span> <span className="highlighted">{article.category2}</span>
              </p>
              <h2 className="article-latest-title">{article.title}</h2>
              <p className="article-latest-description">{article.description}</p>
              <p className="article-latest-author">{article.author} <span className="article-latest-published">{article.published}</span></p>
            </div>
          </a>
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