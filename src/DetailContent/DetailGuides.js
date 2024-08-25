import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { mainGuide, sideGuides, additionalGuides1, additionalGuides2 } from '../Scripts/DataGuides';
import '../Style/DetailGuides.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer2';

function DetailGuides() {
    const { t } = useTranslation();
    const { id } = useParams();

    // State variables for comments
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const savedComments = JSON.parse(localStorage.getItem(`comments-guides-${id}`)) || [];
        setComments(savedComments);
    }, [id]);

    const saveComments = (updatedComments) => {
        localStorage.setItem(`comments-guides-${id}`, JSON.stringify(updatedComments));
    };

    // Function to find guide by id
    const findGuideById = (id) => {
        const allGuides = [
            mainGuide,
            ...sideGuides,
            ...additionalGuides1,
            ...additionalGuides2
        ];
        return allGuides.find(guide => guide.id === id);
    };

    const guide = findGuideById(id);

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

    if (!guide) {
        return <div>{t('guideNotFound')}</div>;
    }

    return (
        <div className="detail-page-guides">
            <Header />
            <div className="detail-guides">
                <img src={guide.imageUrl} alt={guide.title} className="detail-guides-image" />
                <h1>{guide.title}</h1>
                <div className="detail-guides-author">{guide.author}</div>
                <div className="detail-guides-description">{guide.description}</div>
            </div>
            <div className="detail-body-guides">
                <div>{guide.detail}</div>
            </div>
            <div className="comment-section-guides">
                <h3>{t('comments')}</h3>
                <div className="comment-input-guides">
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
                        className="comment-textarea-guides"
                    />
                    <button onClick={handleAddComment}>{t('submit')}</button>
                </div>
                <div className="comments-list-guides">
                    {comments.length > 0 ? (
                        comments.map((comment, index) => (
                            <div key={index} className="comment-guides">
                                <div className="comment-avatar-guides">
                                    {getAvatarInitial(comment)}
                                </div>
                                <div className="comment-content-guides">
                                    <p>{comment.text}</p>
                                    <span className="comment-time-guides">{comment.time}</span>
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
}

export default DetailGuides;
