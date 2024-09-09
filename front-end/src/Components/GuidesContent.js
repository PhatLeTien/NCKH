import React, { useState } from 'react';
import '../Style/GuidesContent.css';
import { useNavigate } from 'react-router-dom';
import { mainGuide, sideGuides, additionalGuides1, additionalGuides2 } from '../Scripts/DataGuides';
import { useTranslation } from 'react-i18next';

const GuidesContent = () => {
    const { t } = useTranslation();
    const itemsPerPage = 8; // Number of items to show per page per container
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate();

    // Calculate the total number of pages
    const totalPages1 = Math.ceil(additionalGuides1.length / itemsPerPage);
    const totalPages2 = Math.ceil(additionalGuides2.length / itemsPerPage);
    const totalPages = Math.max(totalPages1, totalPages2); // Use the larger total pages count

    // Helper function to get the current items based on the page
    const getCurrentItems = (newsArray, page) => {
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return newsArray.slice(startIndex, endIndex);
    };

    const handlePrevClick = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const currentAdditionalGuides1 = getCurrentItems(additionalGuides1, currentPage);
    const currentAdditionalGuides2 = getCurrentItems(additionalGuides2, currentPage);

    const startIndex1 = (currentPage - 1) * itemsPerPage;

    const openDetail = (article) => {
        navigate(`/guides/article/${article.id}`);
    };

    return (
        <div className="guides-container">
            <div className="guides-header">
                <h1>Tips & Guides</h1>
                <p>Take It To The Next Level</p>
            </div>
            <div className="guides-content">
                <div className="main-guide" onClick={() => openDetail(mainGuide)}>
                    <div className="main-guide-image">
                        <img src={mainGuide.imageUrl} alt="Main Guide" />
                    </div>
                    <div className="main-guide-content">
                        <p className="guide-category">{mainGuide.category}</p>
                        <h1>{t('mainGuides.mainGuidesTitle')}</h1>
                        <p>{t('mainGuides.mainGuidesDescription')}</p>
                        <p className="author">{mainGuide.author}</p>
                    </div>
                </div>
                <div className="side-guides">
                    {sideGuides.map((guide, index) => (
                        <div key={index} className="side-guide-item" onClick={() => openDetail(guide)}>
                            <div className="side-guide-image">
                                <img src={guide.imageUrl} alt={`Guide ${index + 1}`} />
                            </div>
                            <div className="side-guide-content">
                                <p className="guide-category">{guide.category}</p>
                                <p>{t(`sideGuides.sideGuidesTitle${ index + 1 }`)}</p>
                                <p className='description'>{t(`sideGuides.sideGuidesDescription${ index + 1 }`)}</p>
                                <p className="author">{guide.author}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="guides-additional-content">
                <div className="additional-guides-container-1">
                    {currentAdditionalGuides1.map((guide, index) => (
                        <div key={index} className="additional-guides-link" onClick={() => openDetail(guide)}>
                            <div className="additional-guides-item">
                                <div className="additional-guides-image">
                                    <img src={guide.imageUrl} alt={`Additional Guide ${index + 1}`} />
                                </div>
                                <div className="additional-guides-content">
                                    <p className="article-latest-category">
                                         <span className="highlighted">{guide.category1}</span>
                                    </p>
                                    <p><span className="title">{t(`additionalGuides1.titleGuides${ startIndex1+ index + 1 }`)}</span></p>
                                    <p className="description">{t(`additionalGuides1.descriptionGuides${ startIndex1 + index + 1 }`)}</p>
                                    <p className="author">{guide.author} <span className="published">{t(`additionalGuides1.publishedGuides${ startIndex1 + index + 1 }`)}</span></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="additional-guides-container-2">
                    {currentAdditionalGuides2.map((guide, index) => (
                        <div key={index} className="additional-guides-link" onClick={() => openDetail(guide)}>
                            <div className="additional-guides-item">
                                <div className="additional-guides-image">
                                    <img src={guide.imageUrl} alt={`Additional Guide ${index + 1}`} />
                                </div>
                                <div className="additional-guides-content">
                                    <p className="article-latest-category">
                                        <span className="highlighted">{guide.category1}</span>
                                    </p>
                                    <p><span className="title">{t(`additionalGuides2.titleGuides${ index + 1 }`)}</span></p>
                                    <p className="description">{t(`additionalGuides2.descriptionGuides${ index + 1 }`)}</p>
                                    <p className="author">{guide.author} <span className="published">{t(`additionalGuides2.publishedGuides${ index + 1 }`)}</span></p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="pagination-guides">
                <button onClick={handlePrevClick} disabled={currentPage === 1}>&#8249;</button>
                <span className="page-info">Page {currentPage} of {totalPages}</span>
                <button onClick={handleNextClick} disabled={currentPage === totalPages}>&#8250;</button>
            </div>
        </div>
    );
};

export default GuidesContent;
