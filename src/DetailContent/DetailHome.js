import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../Style/DetailHome.css';
import { mainArticle, sideArticle, tipsGuides, latestUpdates, topGames, hadesEssentials, futureGames, additionalSections } from '../Scripts/DataHome';
import Header from '../Components/Header';
import Footer from '../Components/Footer2';

const DetailHome = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const allArticles = [mainArticle, ...sideArticle, ...tipsGuides, ...latestUpdates, ...topGames, ...hadesEssentials, ...futureGames, ...additionalSections.tvMovies, ...additionalSections.commentary, ...additionalSections.retro];
    const article = allArticles.find(article => article.id === id);

    // Load comments from localStorage when the component mounts
    useEffect(() => {
        const savedComments = JSON.parse(localStorage.getItem(`comments-${id}`)) || [];
        setComments(savedComments);
    }, [id]);

    // Save comments to localStorage
    const saveComments = (updatedComments) => {
        localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments));
    };

    const handleAddComment = () => {
        if (newComment.trim() !== '') {
            const now = new Date();
            const formattedTimestamp = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')} ${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`; // Format time as HH:MM DD/MM/YYYY

            const commentWithTimestamp = {
                text: newComment,
                time: formattedTimestamp
            };
            const updatedComments = [...comments, commentWithTimestamp];
            setComments(updatedComments);
            saveComments(updatedComments);
            setNewComment('');
        }
    };

    // Function to get the first letter of a comment for the avatar
    const getAvatarInitial = (comment) => {
        if (!comment.text || comment.text.trim() === '') {
            return '?'; // Return a default character if comment text is missing or empty
        }
        return comment.text.charAt(0).toUpperCase();
    };

    if (!article) {
        return <div>{t('articleNotFound')}</div>;
    }

    return (
        <div className="detail-page-home">
            <Header />
            <div className="detail-wrapper-home">
                <div className="detail-container-home">
                    <div className="detail-header-home">
                        <img src={article.img} alt={article.alt} className="detail-image-home" />
                        <div className="detail-header-content-home">
                            <h1 className="detail-title-home">{t(article.title)}</h1>
                            <div className="detail-author-home">{article.author}</div>
                            <p className="detail-description-home">{t(article.description)}</p>
                        </div>
                    </div>
                    <div className="detail-body-home">
                        <div>{article.detail}</div>
                    </div>
                    <div className="comment-section-home">
                        <h3>{t('Comments')}</h3>
                        <div className="comment-input-home">
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
                        <div className="comments-list-home">
                            {comments.length > 0 ? (
                                comments.map((comment, index) => (
                                    <div key={index} className="comment-home">
                                        <div className="comment-avatar-home">
                                            {getAvatarInitial(comment)}
                                        </div>
                                        <div className="comment-content-home">
                                            <p>{comment.text}</p>
                                            <span className="comment-time-home">{comment.time}</span> {/* Display the timestamp */}
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

export default DetailHome;
