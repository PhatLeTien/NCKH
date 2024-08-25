import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Games } from '../Scripts/DataGames';
import '../Style/DetailGames.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer2';

function DetailGames() {
    const { t } = useTranslation();
    const { id } = useParams();

    // State for comments
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState([]);

    // Function to find game by id
    const findGameById = (id) => {
        let allGames = [
            ...Games.topGames,
            ...Games.rpgGames,
            ...Games.racingGames,
            ...Games.horrorGames
        ];
        return allGames.find(game => game.id === id);
    };

    const game = findGameById(id);

    useEffect(() => {
        const savedComments = JSON.parse(localStorage.getItem(`comments-game-${id}`)) || [];
        setComments(savedComments);
    }, [id]);

    const saveComments = (updatedComments) => {
        localStorage.setItem(`comments-game-${id}`, JSON.stringify(updatedComments));
    };

    if (!game) {
        return <div>{t('gameNotFound')}</div>;
    }

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

    return (
        <div className="detail-page-games">
            <Header />
            <div className="detail-games">
                <img src={game.img} alt={game.alt} className="detail-games-image" />
                <h1>{game.title}</h1>
                <div className="detail-games-author">{game.author}</div>
            </div>
            <div className="detail-body-games">
                <div>{game.detail}</div>
            </div>
            <div className="comment-section-games">
                <h3>{t('Comments')}</h3>
                <div className="comment-input-games">
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
                        className="comment-textarea-games"
                    />
                    <button onClick={handleAddComment}>{t('Submit')}</button>
                </div>
                <div className="comments-list-games">
                    {comments.length > 0 ? (
                        comments.map((comment, index) => (
                            <div key={index} className="comment-games">
                                <div className="comment-avatar-games">
                                    {getAvatarInitial(comment)}
                                </div>
                                <div className="comment-content-games">
                                    <p>{comment.text}</p>
                                    <span className="comment-time-games">{comment.time}</span>
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

export default DetailGames;
