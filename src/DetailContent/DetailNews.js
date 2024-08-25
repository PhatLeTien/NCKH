import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { mainNews, sideNews, additionalNews1, additionalNews2 } from '../Scripts/DataNews';
import '../Style/DetailNews.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer2';

const DetailNews = () => {
    const { t } = useTranslation(); 
    const { id } = useParams();
    const allNews = [mainNews, ...sideNews, ...additionalNews1, ...additionalNews2];
    const article = allNews.find(news => news.id === id);

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        const savedComments = JSON.parse(localStorage.getItem(`comments-news-${id}`)) || [];
        setComments(savedComments);
    }, [id]);

    const saveComments = (updatedComments) => {
        localStorage.setItem(`comments-news-${id}`, JSON.stringify(updatedComments));
    };

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            const now = new Date();
            const formattedTimestamp = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')} ${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;

            const commentWithTimestamp = {
                text: newComment,
                time: formattedTimestamp,
            };
            const updatedComments = [...comments, commentWithTimestamp];
            setComments(updatedComments);
            saveComments(updatedComments);
            setNewComment('');
        }
    };

    const getAvatarInitial = (comment) => {
        return comment.text.charAt(0).toUpperCase();
    };

    if (!article) {
        return <div>{t('articleNotFound')}</div>;
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
                <div className="comment-section-news">
                    <h3>{t('Comments')}</h3>
                    <div className="comment-input-news">
                        <textarea
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            onKeyPress={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    handleAddComment();
                                }
                            }}
                            placeholder={t('Be the first to post')}
                            className="comment-textarea-news"
                        />
                        <button onClick={handleAddComment}>{t('Submit')}</button>
                    </div>
                    <div className="comments-list-news">
                        {comments.length > 0 ? (
                            comments.map((comment, index) => (
                                <div key={index} className="comment-news">
                                    <div className="comment-avatar-news">
                                        {getAvatarInitial(comment)}
                                    </div>
                                    <div className="comment-content-news">
                                        <p>{comment.text}</p>
                                        <span className="comment-time-news">{comment.time}</span>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div>{t('No comment yet')}</div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DetailNews;
