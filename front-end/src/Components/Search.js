import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { mainArticle, sideArticle, tipsGuides, latestUpdates, topGames, hadesEssentials, futureGames, additionalSections } from '../Scripts/DataHome';
import { articles } from '../Scripts/DataLatest';
import { mainNews, sideNews, additionalNews1, additionalNews2 } from '../Scripts/DataNews';
import { mainGuide, sideGuides, additionalGuides1, additionalGuides2 } from '../Scripts/DataGuides';
import { Games } from '../Scripts/DataGames';
import { additionalEntertainments, mainEntertainments, sideEntertainments, actionGamesEntertainments, fantasyGamesEntertainments, horrorGamesEntertainments } from '../Scripts/DataEntertainment';
import { mainReviews, sideReviews, Multiplatforms, PlayStation, Controllers, Keyboards } from '../Scripts/DataReviews';
import '../Style/Search.css';

const Search = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [selectedSuggestion, setSelectedSuggestion] = useState(null);

    const allArticles = [
        // Home Articles
        { ...mainArticle, category: 'home' },
        ...sideArticle.map(article => ({ ...article, category: 'home' })),
        ...tipsGuides.map(article => ({ ...article, category: 'home' })),
        ...latestUpdates.map(article => ({ ...article, category: 'home' })),
        ...topGames.map(article => ({ ...article, category: 'home' })),
        ...hadesEssentials.map(article => ({ ...article, category: 'home' })),
        ...futureGames.map(article => ({ ...article, category: 'home' })),
        ...additionalSections.tvMovies.map(article => ({ ...article, category: 'home' })),
        ...additionalSections.commentary.map(article => ({ ...article, category: 'home' })),
        ...additionalSections.retro.map(article => ({ ...article, category: 'home' })),
        // Latest Articles
        ...articles.map(article => ({ ...article, category: 'latest' })),
        // News Articles
        { ...mainNews, category: 'news' },
        ...sideNews.map(article => ({ ...article, category: 'news' })),
        ...additionalNews1.map(article => ({ ...article, category: 'news' })),
        ...additionalNews2.map(article => ({ ...article, category: 'news' })),
        // Guides Articles
        { ...mainGuide, category: 'guides' },
        ...sideGuides.map(article => ({ ...article, category: 'guides' })),
        ...additionalGuides1.map(article => ({ ...article, category: 'guides' })),
        ...additionalGuides2.map(article => ({ ...article, category: 'guides' })),
        // Games Articles
        ...Games.topGames.map(article => ({ ...article, category: 'games' })),
        ...Games.rpgGames.map(article => ({ ...article, category: 'games' })),
        ...Games.racingGames.map(article => ({ ...article, category: 'games' })),
        ...Games.horrorGames.map(article => ({ ...article, category: 'games' })),
        // Entertainment Articles
        { ...mainEntertainments, category: 'entertainment' },
        ...sideEntertainments.map(article => ({ ...article, category: 'entertainment' })),
        ...actionGamesEntertainments.map(article => ({ ...article, category: 'entertainment' })),
        ...fantasyGamesEntertainments.map(article => ({ ...article, category: 'entertainment' })),
        ...horrorGamesEntertainments.map(article => ({ ...article, category: 'entertainment' })),
        ...additionalEntertainments.map(article => ({ ...article, category: 'entertainment' })),
        // Reviews Articles
        { ...mainReviews, category: 'reviews' },
        ...sideReviews.map(article => ({ ...article, category: 'reviews' })),
        ...Multiplatforms.map(article => ({ ...article, category: 'reviews' })),
        ...PlayStation.map(article => ({ ...article, category: 'reviews' })),
        ...Controllers.map(article => ({ ...article, category: 'reviews' })),
        ...Keyboards.map(article => ({ ...article, category: 'reviews' }))
    ];

    const handleSearch = () => {
        const foundArticle = allArticles.find(
            article => article.title.toLowerCase() === query.toLowerCase()
        );
        setSelectedSuggestion(foundArticle || null);
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.trim() === '') {
            setSuggestions([]);
            setSelectedSuggestion(null);
            return;
        }

        const filteredSuggestions = allArticles.filter(article =>
            article.title.toLowerCase().includes(value.toLowerCase())
        );

        setSuggestions(filteredSuggestions);
    };

    const handleSuggestionClick = (article) => {
        setSelectedSuggestion(article);
        setQuery(article.title);
        setSuggestions([]);
    };

    const getRoutePrefix = (category) => {
        switch (category) {
            case 'home':
                return '/home/article';
            case 'latest':
                return '/latest/article';
            case 'games':
                return '/games/article';
            case 'news':
                return '/news/article';
            case 'guides':
                return '/guides/article';
            case 'reviews':
                return '/reviews/article';
            case 'entertainment':
                return '/entertainment/article';
            default:
                console.warn(`Unknown category: ${category}. Defaulting to '/home/article'`);
                return '/home/article';
        }
    };

    return (
        <div className="search-container">
            <div className="search-bar">
                <input
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Search for articles..."
                    className="search-input"
                />
                <button onClick={handleSearch} className="search-button">Search</button>
            </div>

            {suggestions.length > 0 && (
                <ul className="suggestions-list">
                    {suggestions.map(article => (
                        <li key={article.id} onClick={() => handleSuggestionClick(article)} className="suggestion-item">
                            {article.title}
                        </li>
                    ))}
                </ul>
            )}

            {selectedSuggestion ? (
                <Link to={`${getRoutePrefix(selectedSuggestion.category)}/${selectedSuggestion.id}`} className="result-link">
                    <div className="result-card">
                        <img src={selectedSuggestion.img} alt={selectedSuggestion.title} className="result-img" />
                        <div className="result-content">
                            <h2 className="result-title">{selectedSuggestion.title}</h2>
                            <p className="result-description">{selectedSuggestion.description}</p>
                            <p className="result-author"><strong>{selectedSuggestion.author}</strong></p>
                        </div>
                    </div>
                </Link>
            ) : (
                query.trim() !== '' && suggestions.length === 0 && (
                    <p className="no-results">No results found.</p>
                )
            )}
        </div>
    );
};

export default Search;
