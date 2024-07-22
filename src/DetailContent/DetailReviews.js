import React from 'react';
import { useParams } from 'react-router-dom';
import '../Style/DetailReviews.css';
import { mainReviews, sideReviews, Multiplatforms, PlayStation, Controllers, Keyboards } from '../Scripts/DataReviews';
import Header from '../Components/Header';
import Footer from '../Components/Footer2';

const findReviewById = (id) => {
    console.log(id, mainReviews, sideReviews, Multiplatforms, PlayStation, Controllers, Keyboards);
    const allReviews = [mainReviews, ...sideReviews, ...Multiplatforms, ...PlayStation, ...Controllers, ...Keyboards];
    return allReviews.find(review => review.id === id);
};

const DetailReview = () => {
    const { id } = useParams();
    const review = findReviewById(id);

    if (!review) {
        return <div>Review not found</div>;
    }

    return (
        <div className="detail-page">
            <Header/>
            <div className="detail-review">
                <img src={review.imageUrl} alt={review.title} className="detail-review-image" />
                <h1>{review.title}</h1>
                <p className="detail-review-author">{review.author}</p>
                <p className="detail-review-description">{review.description}</p>
            </div>
            <Footer/>
        </div>
    );
};

export default DetailReview;
