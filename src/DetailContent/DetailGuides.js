import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { mainGuide, sideGuides, additionalGuides1, additionalGuides2 } from '../Scripts/DataGuides';
import '../Style/DetailGuides.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer2';

function DetailGuides() {
    const { t } = useTranslation();
    const { id } = useParams();

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

    if (!guide) {
        return <div>{t('guideNotFound')}</div>;
    }

    return (
        <div className="detail-page">
            <Header/>
            <div className="detail-guides">
                <img src={guide.imageUrl} alt={guide.title} className="detail-guides-image" />
                <h1>{guide.title}</h1>
                <div className="detail-guides-author">{guide.author}</div>
                <div className="detail-guides-description">{guide.description}</div>
            </div>
            <Footer/>
        </div>
    );
}

export default DetailGuides;
