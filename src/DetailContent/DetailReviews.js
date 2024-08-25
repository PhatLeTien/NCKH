import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../Style/DetailReviews.css';
import { mainReviews, sideReviews, Multiplatforms, PlayStation, Controllers, Keyboards } from '../Scripts/DataReviews';
import Header from '../Components/Header';
import Footer from '../Components/Footer2';

const findReviewById = (id) => {
    const allReviews = [mainReviews, ...sideReviews, ...Multiplatforms, ...PlayStation, ...Controllers, ...Keyboards];
    return allReviews.find(review => review.id === id);
};

const DetailReview = () => {
    const { t } = useTranslation();
    const { id } = useParams();
    const review = findReviewById(id);

    // State variables for comments
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const savedComments = JSON.parse(localStorage.getItem(`comments-review-${id}`)) || [];
        setComments(savedComments);
    }, [id]);

    const saveComments = (updatedComments) => {
        localStorage.setItem(`comments-review-${id}`, JSON.stringify(updatedComments));
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
            setNewComment(''); // Clear the input field
        }
    };

    const getAvatarInitial = (comment) => {
        return comment.text.charAt(0).toUpperCase();
    };

    if (!review) {
        return <div>{t('Review not found')}</div>;
    }

    return (
        <div className="detail-page-review">
            <Header />
            <div className="detail-review">
                <img src={review.imageUrl} alt={review.title} className="detail-review-image" />
                <h1>{review.title}</h1>
                <p className="detail-review-author">{review.author}</p>
                <p className="detail-review-description">{review.description}</p>
            </div>
            <div className="detail-body-reviews">
                <div>{review.detail}</div>
            </div>
            <div className="comment-section-reviews">
                <h3>{t('Comments')}</h3>
                <div className="comment-input-reviews">
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
                        className="comment-textarea-reviews"
                    />
                    <button onClick={handleAddComment}>{t('Submit')}</button>
                </div>
                <div className="comments-list-reviews">
                    {comments.length > 0 ? (
                        comments.map((comment, index) => (
                            <div key={index} className="comment-reviews">
                                <div className="comment-avatar-reviews">
                                    {getAvatarInitial(comment)}
                                </div>
                                <div className="comment-content-reviews">
                                    <p>{comment.text}</p>
                                    <span className="comment-time-reviews">{comment.time}</span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>{t('No comment yet')}</div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DetailReview;
