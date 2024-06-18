import React, { useState } from 'react';
import '../Style/GuidesContent.css';
import { mainGuide, sideGuides, additionalGuides1, additionalGuides2 } from '../Scripts/DataGuides';

const Guides = () => {
    const itemsPerPage = 8; // Number of items to show per page per container
    const [currentPage, setCurrentPage] = useState(1);

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

    return (
        <div className="guides-container">
            <div className="guides-header">
                <h1>Tips & Guides</h1>
                <p>Take It To The Next Level</p>
            </div>
            <div className="guides-content">
                <div className="main-guide">
                    <div className="main-guide-image">
                        <img src={mainGuide.imageUrl} alt="Main Guide" />
                    </div>
                    <div className="main-guide-content">
                        <a href={mainGuide.link}>
                            <p className="guide-category">{mainGuide.category}</p>
                            <h1>{mainGuide.title}</h1>
                            <p>{mainGuide.description}</p>
                            <p className="author">{mainGuide.author}</p>
                        </a>
                    </div>
                </div>
                <div className="side-guides">
                    {sideGuides.map((guide, index) => (
                        <div key={index} className="side-guide-item">
                            <div className="side-guide-image">
                                <img src={guide.imageUrl} alt={`Guide ${index + 1}`} />
                            </div>
                            <div className="side-guide-content">
                                <a href={guide.link}>
                                    <p className="guide-category">{guide.category}</p>
                                    <p>{guide.title}</p>
                                    <p className='description'>{guide.description}</p>
                                    <p className="author">{guide.author}</p>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="guides-additional-content">
                <div className="additional-guides-container-1">
                    {currentAdditionalGuides1.map((guide, index) => (
                        <a href={guide.link} key={index} className="additional-guides-link">
                            <div className="additional-guides-item">
                                <div className="additional-guides-image">
                                    <img src={guide.imageUrl} alt={`Additional Guide ${index + 1}`} />
                                </div>
                                <div className="additional-guides-content">
                                    <p className="article-latest-category">
                                         <span className="highlighted">{guide.category1}</span> {/*<span className="separator">»</span> <span className="highlighted">{guide.category2}</span> */}
                                    </p>
                                    <p><span className="title">{guide.title}</span></p>
                                    <p className="description">{guide.description}</p>
                                    <p className="author">{guide.author} <span className="published">{guide.published}</span></p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
                <div className="additional-guides-container-2">
                    {currentAdditionalGuides2.map((guide, index) => (
                        <a href={guide.link} key={index} className="additional-guides-link">
                            <div className="additional-guides-item">
                                <div className="additional-guides-image">
                                    <img src={guide.imageUrl} alt={`Additional Guide ${index + 1}`} />
                                </div>
                                <div className="additional-guides-content">
                                    <p className="article-latest-category">
                                        <span className="highlighted">{guide.category1}</span> {/*<span className="separator">»</span> <span className="highlighted">{guide.category2}</span>*/}
                                    </p>
                                    <p><span className="title">{guide.title}</span></p>
                                    <p className="description">{guide.description}</p>
                                    <p className="author">{guide.author} <span className="published">{guide.published}</span></p>
                                </div>
                            </div>
                        </a>
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

export default Guides;
