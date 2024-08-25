import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../Style/DetailEntertainment.css';
import { additionalEntertainments, mainEntertainments, sideEntertainments, actionGamesEntertainments, fantasyGamesEntertainments, horrorGamesEntertainments } from '../Scripts/DataEntertainment';
import Header from '../Components/Header';
import Footer from '../Components/Footer2';

const findEntertainmentById = (id) => {
    // If mainEntertainments is an object, not an array, we need to handle it differently
    const allEntertainments = [
        ...(Array.isArray(mainEntertainments) ? mainEntertainments : [mainEntertainments]),
        ...(Array.isArray(sideEntertainments) ? sideEntertainments : [sideEntertainments]),
        ...(Array.isArray(additionalEntertainments) ? additionalEntertainments : [additionalEntertainments]),
        ...(Array.isArray(actionGamesEntertainments) ? actionGamesEntertainments : [actionGamesEntertainments]),
        ...(Array.isArray(fantasyGamesEntertainments) ? fantasyGamesEntertainments : [fantasyGamesEntertainments]),
        ...(Array.isArray(horrorGamesEntertainments) ? horrorGamesEntertainments : [horrorGamesEntertainments])
    ];
    return allEntertainments.find(entertainment => entertainment.id === id);
};

const DetailEntertainment = () => {
    const { id } = useParams();
    const { t } = useTranslation();  // Add useTranslation hook

    const entertainment = findEntertainmentById(id);

    // State for comments
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const savedComments = JSON.parse(localStorage.getItem(`comments-entertainment-${id}`)) || [];
        setComments(savedComments);
    }, [id]);

    const saveComments = (updatedComments) => {
        localStorage.setItem(`comments-entertainment-${id}`, JSON.stringify(updatedComments));
    };

    // Function to handle adding a new comment
    const handleAddComment = () => {
        if (newComment.trim()) {
            const now = new Date();
            const formattedTimestamp = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')} ${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear()}`;

            const commentWithTimestamp = {
                text: newComment,
                time: formattedTimestamp,
            };

            const updatedComments = [...comments, commentWithTimestamp];
            setComments(updatedComments);
            saveComments(updatedComments);
            setNewComment('');  // Clear the input field
        }
    };

    // Function to get the initial letter for the avatar
    const getAvatarInitial = (comment) => {
        return comment.text.charAt(0).toUpperCase();
    };

    if (!entertainment) {
        return <div>{t('Entertainment not found')}</div>;
    }

    return (
        <div className="detail-page">
            <Header />
            <div className="detail-entertainment">
                <img src={entertainment.image} alt={entertainment.title} className="detail-entertainment-image" />
                <h1>{entertainment.title}</h1>
                <p className="detail-entertainment-author">{entertainment.author}</p>
                <p className="detail-entertainment-description">{entertainment.description}</p>
            </div>
            <div className="detail-body-entertainment">
                <div>{entertainment.detail}</div>
            </div>
            <div className="comment-section-entertainment">
                <h3>{t('Comments')}</h3>
                <div className="comment-input-entertainment">
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
                        className="comment-textarea-entertainment"
                    />
                    <button onClick={handleAddComment}>{t('Submit')}</button>
                </div>
                <div className="comments-list-entertainment">
                    {comments.length > 0 ? (
                        comments.map((comment, index) => (
                            <div key={index} className="comment-entertainment">
                                <div className="comment-avatar-entertainment">
                                    {getAvatarInitial(comment)}
                                </div>
                                <div className="comment-content-entertainment">
                                    <p>{comment.text}</p>
                                    <span className="comment-time-entertainment">{comment.time}</span>
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

export default DetailEntertainment;
