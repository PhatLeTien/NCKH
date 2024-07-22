import imgMain from '../Assets/Reviews/main.webp';

import imgSide1 from '../Assets/Reviews/side-1.webp';
import imgSide2 from '../Assets/Reviews/side-2.webp';
import imgSide3 from '../Assets/Reviews/side-3.webp';

import imgMul1 from '../Assets/Reviews/mul-1.webp';
import imgMul2 from '../Assets/Reviews/mul-2.webp';
import imgMul3 from '../Assets/Reviews/mul-3.webp';
import imgMul4 from '../Assets/Reviews/mul-4.webp';

import imgPlay1 from '../Assets/Reviews/play-1.webp';
import imgPlay2 from '../Assets/Reviews/play-2.webp';
import imgPlay3 from '../Assets/Reviews/play-3.webp';
import imgPlay4 from '../Assets/Reviews/play-4.webp';

import imgCon1 from '../Assets/Reviews/con-1.webp';
import imgCon2 from '../Assets/Reviews/con-2.webp';
import imgCon3 from '../Assets/Reviews/con-3.webp';
import imgCon4 from '../Assets/Reviews/con-4.webp';

import imgKey1 from '../Assets/Reviews/key-1.webp';
import imgKey2 from '../Assets/Reviews/key-2.webp';
import imgKey3 from '../Assets/Reviews/key-3.webp';
import imgKey4 from '../Assets/Reviews/key-4.webp';

export const mainReviews = {
    id: 'main-review',
    imageUrl: imgMain,
    link: '/reviews/article/main-review',
    category: 'MULTIPLATFORM',
    title: 'Elden Ring: Shadow of the Erdtree Review: Massive, Menacing, And Magnificent',
    description: 'FromSoftware’s highly anticipated DLC could be a standalone game, it’s just that good',
    author: 'Alyssa Mercante',
};

export const sideReviews = [
    {
        id: 'side-review-1',
        imageUrl: imgSide1,
        link: '/reviews/article/side-review-1',
        category: 'MULTIPLATFORM',
        title: 'Still Wakes The Deep: The Kotaku Review',
        description: 'The Chinese Room’s latest horror game begs you to consider what’s worth running from in life',
        author: 'Claire Jackson',
    },
    {
        id: 'side-review-2',
        imageUrl: imgSide2,
        link: '/reviews/article/side-review-2',
        category: 'MULTIPLATFORM',
        title: 'New Zany Open-World Game Is For All You Simpsons: Hit And Run Fans',
        description: 'Tiny Terry’s Turbo Trip is a new comedic PC game starring a teenager who wants to go to space in a car',
        author: 'Zack Zwiezen',
    },
    {
        id: 'side-review-3',
        imageUrl: imgSide3,
        link: '/reviews/article/side-review-3',
        category: 'SWITCH',
        title: 'New RPG Captures The Essence Of What Made Zelda: A Link To The Past So Great',
        description: 'Master Key is a sublime 2D RPG that’s a perfect follow-up to Animal Well',
        author: 'John Walker',
    }
    // Add more side reviews here
];

export const Multiplatforms = [
    {
        id: 'multiplatform-review-1',
        img: imgMul1,
        alt: 'Future Game 1',
        title: 'Elden Ring: Shadow of the Erdtree Review: Massive, Menacing, And Magnificent',
        author: 'Alyssa Mercante'
    },
    {
        id: 'multiplatform-review-2',
        img: imgMul2,
        alt: 'Future Game 2',
        title: 'Still Wakes The Deep: The Kotaku Review',
        author: 'Claire Jackson'
    },
    {
        id: 'multiplatform-review-3',
        img: imgMul3,
        alt: 'Future Game 3',
        title: 'New Zany Open-World Game Is For All You Simpsons: Hit And Run Fans',
        author: 'Zack Zwiezen'
    },
    {
        id: 'multiplatform-review-4',
        img: imgMul4,
        alt: 'Future Game 4',
        title: 'Senua’s Saga: Hellblade II: The Kotaku Review',
        author: 'Claire Jackson'
    },
    // Add more multiplatform reviews here
];

export const PlayStation = [
    {
        id: 'playstation-review-1',
        img: imgPlay1,
        alt: 'Future Game 1',
        title: 'Stellar Blade: The Kotaku Review',
        author: 'Levi Winslow'
    },
    {
        id: 'playstation-review-2',
        img: imgPlay2,
        alt: 'Future Game 2',
        title: 'Rise Of The Ronin: The Kotaku Review',
        author: 'Levi Winslow'
    },
    {
        id: 'playstation-review-3',
        img: imgPlay3,
        alt: 'Future Game 3',
        title: 'Final Fantasy VII Rebirth: The Kotaku Review',
        author: 'Claire Jackson'
    },
    {
        id: 'playstation-review-4',
        img: imgPlay4,
        alt: 'Future Game 4',
        title: 'The Last of Us Part II Remastered: The Kotaku Review',
        author: 'Jen Glennon'
    },
    // Add more PlayStation reviews here
];

export const Controllers = [
    {
        id: 'controller-review-1',
        img: imgCon1,
        alt: 'Future Game 1',
        title: 'Replica Xbox 360 Controller Nails The Vibes, But Lack Of Wireless Hurts',
        author: 'Claire Jackson'
    },
    {
        id: 'controller-review-2',
        img: imgCon2,
        alt: 'Future Game 2',
        title: 'The Next Time You\'re Looking For New Switch Joy-Con, Check These Out',
        author: 'Claire Jackson'
    },
    {
        id: 'controller-review-3',
        img: imgCon3,
        alt: 'Future Game 3',
        title: 'The 5 Best Budget Controllers For Xbox And PC',
        author: 'Claire Jackson'
    },
    {
        id: 'controller-review-4',
        img: imgCon4,
        alt: 'Future Game 4',
        title: 'The Scuf Instinct Pro Feels Like An Official Xbox Controller',
        author: 'Mike Fahey'
    },
    // Add more controller reviews here
];

export const Keyboards = [
    {
        id: 'keyboard-review-1',
        img: imgKey1,
        alt: 'Future Game 1',
        title: 'The Shurikey Hanzo Keyboard Looks Like A Toy, Types Like A Weapon',
        author: 'Mike Fahey'
    },
    {
        id: 'keyboard-review-2',
        img: imgKey2,
        alt: 'Future Game 2',
        title: 'Kinesis’ TKO Is My New Favorite Compact Keyboard',
        author: 'Mike Fahey'
    },
    {
        id: 'keyboard-review-3',
        img: imgKey3,
        alt: 'Future Game 3',
        title: 'The Razer Huntsman Mini Is An Excellent Intro To 60 Percent Keyboards',
        author: 'Mike Fahey'
    },
    {
        id: 'keyboard-review-4',
        img: imgKey4,
        alt: 'Future Game 4',
        title: 'Kaliber Gaming\'s Opto-Mechanical Keyboard Looks Sharp, Literally',
        author: 'Mike Fahey'
    },
    // Add more keyboard reviews here
];
