import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../Style/DetailLatest.css';
import { articles } from '../Scripts/DataLatest';
import Header from '../Components/Header';
import Footer from '../Components/Footer2';

const DetailLatest = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const article = articles.find(article => article.id === parseInt(id, 10));

    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        const savedComments = JSON.parse(localStorage.getItem(`comments-${id}`)) || [];
        setComments(savedComments);
    }, [id]);

    const saveComments = (updatedComments) => {
        localStorage.setItem(`Comments-${id}`, JSON.stringify(updatedComments));
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
        if (!comment.text || comment.text.trim() === '') {
            return '?';
        }
        return comment.text.charAt(0).toUpperCase();
    };

    if (!article) {
        return <div>{t('articleNotFound')}</div>;
    }

    return (
        <div className="detail-page-latest">
            <Header />
            <div className="detail-wrapper-latest">
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
                    <div className="comment-section-latest">
                        <h3>{t('Comments')}</h3>
                        <div className="comment-input-latest">
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
                                className="comment-textarea-home"
                            />
                            <button onClick={handleAddComment}>{t('Submit')}</button>
                        </div>
                        <div className="comments-list-latest">
                            {comments.length > 0 ? (
                                comments.map((comment, index) => (
                                    <div key={index} className="comment-latest">
                                        <div className="comment-avatar-latest">
                                            {getAvatarInitial(comment)}
                                        </div>
                                        <div className="comment-content-latest">
                                            <p>{comment.text}</p>
                                            <span className="comment-time-latest">{comment.time}</span>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div>{t('No comment yet')}</div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DetailLatest;
