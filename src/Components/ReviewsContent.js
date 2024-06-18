import React from 'react';
import '../Style/ReviewsContent.css';
import { mainReviews, sideReviews, Multiplatforms, PlayStation, Controllers, Keyboards } from '../Scripts/DataReviews';

const ReviewsContent = () => {
    return (
        <div className="Reviews-container">
            <div className="Reviews-header">
                <h1>Reviews</h1>
                <p>Our reviews of the latest games, consoles, keyboards, controllers, and more.</p>
            </div>
            <div className="Reviews-content">
                <div className="main-review">
                    <div className="main-review-image">
                        <img src={mainReviews.imageUrl} alt="Main review" />
                    </div>
                    <div className="main-review-content">
                        <a href={mainReviews.link}>
                            <p className="review-category">{mainReviews.category}</p>
                            <h1>{mainReviews.title}</h1>
                            <p>{mainReviews.description}</p>
                            <p className="author">{mainReviews.author}</p>
                        </a>
                    </div>
                </div>
                <div className="side-Reviews">
                    {sideReviews.map((review, index) => (
                        <div key={index} className="side-review-item">
                            <div className="side-review-image">
                                <img src={review.imageUrl} alt={`review ${index + 1}`} />
                            </div>
                            <div className="side-review-content">
                                <a href={review.link}>
                                    <p className="review-category">{review.category}</p>
                                    <p className='title'>{review.title}</p>
                                    <p className='description'>{review.description}</p>
                                    <p className="author">{review.author}</p>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="multiplatforms-games">
                <div className="multiplatforms-header">
                    <div className="multiplatforms-title">Multiplatform</div>
                </div>
                <div className="multiplatforms-games-grid">
                    {Multiplatforms.map((multiplatforms, index) => (
                        <div key={index} className="multiplatforms-game-item">
                            <img src={multiplatforms.img} alt={multiplatforms.alt} className="multiplatforms-game-image" />
                            <div className="multiplatforms-game-content">
                                <div className="multiplatforms-game-article-title">{multiplatforms.title}</div>
                                <div className="multiplatforms-game-article-author">{multiplatforms.author}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="playstation-games">
                <div className="playstation-header">
                    <div className="playstation-title">PlayStation</div>
                </div>
                <div className="playstation-games-grid">
                    {PlayStation.map((playstation, index) => (
                        <div key={index} className="playstation-game-item">
                            <img src={playstation.img} alt={playstation.alt} className="playstation-game-image" />
                            <div className="playstation-game-content">
                                <div className="playstation-game-article-title">{playstation.title}</div>
                                <div className="playstation-game-article-author">{playstation.author}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="controllers-games">
                <div className="controllers-header">
                    <div className="controllers-title">Controllers</div>
                </div>
                <div className="controllers-games-grid">
                    {Controllers.map((controllers, index) => (
                        <div key={index} className="controllers-game-item">
                            <img src={controllers.img} alt={controllers.alt} className="controllers-game-image" />
                            <div className="controllers-game-content">
                                <div className="controllers-game-article-title">{controllers.title}</div>
                                <div className="controllers-game-article-author">{controllers.author}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="keyboards-games">
                <div className="keyboards-header">
                    <div className="keyboards-title">Keyboards</div>
                </div>
                <div className="keyboards-games-grid">
                    {Keyboards.map((keyboards, index) => (
                        <div key={index} className="keyboards-game-item">
                            <img src={keyboards.img} alt={keyboards.alt} className="keyboards-game-image" />
                            <div className="keyboards-game-content">
                                <div className="keyboards-game-article-title">{keyboards.title}</div>
                                <div className="keyboards-game-article-author">{keyboards.author}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ReviewsContent;
