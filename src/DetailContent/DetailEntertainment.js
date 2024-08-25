import React from 'react';
import { useParams } from 'react-router-dom';
import '../Style/DetailEntertainment.css';
import { additionalEntertainments, mainEntertainments, sideEntertainments, actionGamesEntertainments, fantasyGamesEntertainments, horrorGamesEntertainments } from '../Scripts/DataEntertainment';
import Header from '../Components/Header';
import Footer from '../Components/Footer2';

const findEntertainmentById = (id) => {
    const allEntertainments = [
        mainEntertainments, 
        ...sideEntertainments, 
        ...additionalEntertainments, 
        ...actionGamesEntertainments, 
        ...fantasyGamesEntertainments, 
        ...horrorGamesEntertainments
    ];
    return allEntertainments.find(entertainment => entertainment.id === id);
};

const DetailEntertainment = () => {
    const { id } = useParams();
    const entertainment = findEntertainmentById(id);

    if (!entertainment) {
        return <div>Entertainment not found</div>;
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
            <Footer />
        </div>
    );
};

export default DetailEntertainment;
