import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Games } from '../Scripts/DataGames';
import '../Style/DetailGames.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer2';

function DetailGames() {
    const { t } = useTranslation();
    const { id } = useParams();

    // Function to find game by id
    const findGameById = (id) => {
        let allGames = [
            ...Games.bestGames,
            ...Games.rpgGames,
            ...Games.racingGames,
            ...Games.horrorGames
        ];
        return allGames.find(game => game.id === id);
    };

    const game = findGameById(id);

    if (!game) {
        return <div>{t('gameNotFound')}</div>;
    }

    return (
        <div className="detail-page">
            <Header/>
            <div className="detail-games">
                <img src={game.img} alt={game.alt} className="detail-games-image" />
                <h1>{game.title}</h1>
                <div className="detail-games-author">{game.author}</div>
            </div>
            <Footer/>
        </div>
    );
}

export default DetailGames;
