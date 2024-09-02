import { TwitterTweetEmbed } from 'react-twitter-embed';

import imgMainGuide from '../Assets/Guides/main.webp';
import imgSideGuide1 from '../Assets/Guides/side-1.webp';
import imgSideGuide2 from '../Assets/Guides/side-2.webp';
import imgSideGuide3 from '../Assets/Guides/side-3.webp';

import imgAdd1_1 from '../Assets/Guides/add-guide-1.webp';
import imgAdd1_2 from '../Assets/Guides/add-guide-2.webp';
import imgAdd1_3 from '../Assets/Guides/add-guide-3.webp';
import imgAdd1_4 from '../Assets/Guides/add-guide-4.webp';
import imgAdd1_5 from '../Assets/Guides/add-guide-5.webp';
import imgAdd1_6 from '../Assets/Guides/add-guide-6.webp';
import imgAdd1_7 from '../Assets/Guides/add-guide-7.webp';
import imgAdd1_8 from '../Assets/Guides/add-guide-8.webp';
import imgAdd1_9 from '../Assets/Guides/add-guide-9.webp';

import imgAdd2_1 from '../Assets/Guides/add-guide-2-1.webp';
import imgAdd2_2 from '../Assets/Guides/add-guide-2-2.webp';
import imgAdd2_3 from '../Assets/Guides/add-guide-2-3.webp';

import SideGuides2t1 from '../Assets/Guides/side-2-1.webp';
import SideGuides3t1 from '../Assets/Guides/side-3-1.webp';

import Add1_1t1 from '../Assets/Guides/add-guide-1t1.webp';
import Add4_1t1 from '../Assets/Guides/add-guide-4t1.webp';
import Add7_1t1 from '../Assets/Guides/add-guide-7t1.webp';
import Add9_1t1 from '../Assets/Guides/add-guide-9t1.webp';


export const mainGuide = {
    id: 'main-guide-1',
    img: imgMainGuide,
    category1: 'Game Tips',
    title: 'Here’s When Elden Ring: Shadow Of The Erdtree Is Going To Drop',
    description: 'There’ll be a pretty big window to preload the expansion as well, but only on PlayStation',
    author: 'Moises Taveras',
    category: 'guides',
    detail: (
        <div>
            <p>Elden Ring’s highly anticipated expansion, Shadow of the Erdtree, is dropping later this week, and a lot of people are pumped for what’s shaping up to be one of the biggest releases of the year. Whether you’re a lorehound or simply someone looking for a proper excuse to dive into the game of 2022, Shadow of the Erdtree is going to be massive, and you’re probably going to want to get into it as soon as possible to avoid potential spoilers.</p>
            <p>Ahead of launch, the official Elden Ring Twitter account posted a graphic detailing the release schedule for the expansion, including local time zones and the exact time players should expect it to be available.</p>
            <p>Pre-order Elden Ring: Shadow of the Erdtree:  | Best Buy | Humble Bundle</p>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <TwitterTweetEmbed tweetId="1801615583705723349" />
            </div>
        </div>
    )
};

export const sideGuides = [
    {
        id: 'side-guide-1',
        img: imgSideGuide1,
        category1: 'Game Tips',
        title: 'MultiVersus Character Guide: Jason Voorhees',
        description: 'How to make the most of the classic slasher villain’s best moves',
        author: 'Lucas White',
        category: 'guides',
        detail: (
            <div>
                <p>Welcome to the first in a long line of MultiVersus character guides. As the first wave of post-launch patches has begun, I’ll now be diving in, starting with three brand new characters in order to offer some tips and general strategies to help you get a leg up. First up, it’s Jason.</p>
                <p>It makes sense to start with Jason Voorhees, and that’s not just because he’s become a fast favorite of mine. He comes in the Battle Pass for MultiVersus’ first season, which means returning Open Beta players get him off the bat, and if you’re spending money, he’s a more reasonable return for investment compared to Joker. So grab your machete, axe and bright yellow sleeping bags, folks; it’s spooky time.</p>
                <p>How to unlock Jason in MultiVersus</p>
                <p>For now, Jason is an instant unlock if you buy the season one Battle Pass. If you played the Open Beta and are coming back while the season is active, you don’t even have to pay. Otherwise, you’ll need to wait until the season ends before you can grab Jason as a separate purchase with Gleamium or Fighter Currency. It’s probably safe to assume he’ll be priced the same as Joker, but that’s just a guess for now.</p>
            </div>
        )
    },
    {
        id: 'side-guide-2',
        img: imgSideGuide2,
        category1: 'Game Tips',
        title: 'How To Prep For Elden Ring: Shadow Of The Erdtree And More Of The Week’s Gaming Tips',
        description: 'We’ll also give you the lowdown on Octopath Traveler II’s new bosses',
        author: 'Kotaku Staff',
        category: 'guides',
        detail: (
            <div>
                <p>Elden Ring: Shadow of the Erdtree is almost here, so we’ll help you make sure you’re ready to access and conquer the DLC when it arrives. We’ve also got details on four new bosses who were recently added to Octopath Traveler II, as well as suggestions for those looking to get caught up on Dragon Age before The Veilguard lands later this year. And if you’re looking to improve your Starfield experience, look no further, we’ve got some mod recommendations to take your interstellar travels to the next level.</p>
                <h2>Elden Ring: What Level To Reach For Shadow Of The Erdtree (And How To Grind Fast)</h2>
                <p><img src={SideGuides2t1} alt="How To Prep For Elden Ring: Shadow Of The Erdtree And More Of The Week’s Gaming Tips" style={{ maxWidth: "100%", height: "auto" }} /></p>
                <p>Elden Ring is known for its challenging combat and hazardous exploration, so it’s reasonable to expect its Shadow of the Erdtree expansion to be an ultra-difficult experience. With dozens of hours of new exploration and battle ahead, you’ll want to be certain you’re well-prepared for all of the horrors that await you. As such, you may be asking yourself what level you should be before starting Shadow of the Erdtree. - Billy Givens Read More</p>
            </div>
        )
    },
    {
        id: 'side-guide-3',
        img: imgSideGuide3,
        category1: 'Game Tips',
        title: 'Shin Megami Tensei V: Vengeance Steam Deck Settings And Performance Guide',
        description: 'There aren’t many graphical options to choose from, but let’s discuss the best settings for Atlus’ RPG on Steam Deck',
        author: 'Timothy Monbleau',
        category: 'guides',
        detail: (
            <div>
                <p>Shin Megami Tensei V: Vengeance is a massively expanded version of 2021’s Shin Megami Tensei V, featuring more quests, monsters, and a new story path featuring a brand new character. However, perhaps most importantly, Vengeance drops the original game’s Nintendo Switch exclusivity for a multiplatform release. PC players can now enjoy this game via Steam, and Vengeance is officially Steam Deck verified. However, does it actually run well on Valve’s handheld device?</p>
                <p>After spending at least 15 hours playing Shin Megami Tensei V: Vengeance portably, I can confirm that the game runs very well on the Steam Deck. At the default resolution of 1280 X 800, I was able to enjoy reliable performance that typically stayed close to a solid 60 FPS. If you plan on enjoying this RPG on the go (or in your bed), definitely grab the Steam version.</p>
                <p><b>Buy <i>Shin Megami Tensei V: Vengeance:</i></b>  | Best Buy | Humble Bundle</p>
                <p><img src={SideGuides3t1} alt="Shin Megami Tensei V: Vengeance Steam Deck Settings And Performance Guide" style={{ maxWidth: "100%", height: "auto" }} /></p>
            </div>
        )
    }
];

export const additionalGuides1 = [
    {
        id: 'additional-guide-1-1',
        img: imgAdd1_1,
        title: "How To Defeat Matador In Shin Megami Tensei V: Vengeance",
        description: "Beware the critical hits in Shin Megami Tensei V: Vengeance’s first major optional boss battle",
        author: "By Timothy Monbleau",
        published: "Published June 14, 2024",
        category1: "GAME TIPS",
        category: 'guides',
        detail: (
            <div>
                <p>Matador has an infamous reputation in the Shin Megami Tensei canon, and Shin Megami Tensei V: Vengeance is no exception. As the first boss in the Return of the True Demon sidequest, Matador can and will wipe the floor with you if you challenge him unprepared. Though Matador was a challenge in the vanilla version of Shin Megami Tensei V, the Vengeance rerelease adds a new gimmick that you’ll need to deliberately play around. Fortunately, as long as you bring the right skills and demons, you can easily overcome this challenge.</p>
                <p><b>Buy<i>Shin Megami Tensei V: Vengeance:</i></b>  | Best Buy | Humble Bundle</p>
                <p>For best results, your main character should be at level 24 before challenging Matador. If you’re underleveled, consider advancing the main story and returning to this encounter later. This is especially helpful if you’re playing the Vengeance story, since you’ll recruit Guest characters who can come in clutch for this fight. Also consider stocking up on Elec Shards from Cadaver’s Hollow to give the Nahobino and any other human characters a way to exploit Matador’s weakness.</p>
                <p>With that out of the way, here’s everything you need to know about overcoming Matador.</p>
                <p><img src={Add1_1t1} alt="How To Defeat Matador In Shin Megami Tensei V: Vengeance" style={{ maxWidth: "100%", height: "auto" }} /></p>
            </div>
        )
    },
    {
        id: 'additional-guide-1-2',
        img: imgAdd1_2,
        title: "10 Tips For Shin Megami Tensei V: Vengeance Beginners",
        description: "New to Atlus' RPG? Follow these tips and Da’at won’t be a problem",
        author: "By Timothy Monbleau",
        published: "Published June 14, 2024",
        category1: "GAME TIPS",
        category: 'guides',
        detail: (
            <div>
                <p>It’s been a good year for fans of Atlus RPGs. Between the launch of Persona 3 Reload in January and Metaphor:ReFantazio coming this October, you’d be forgiven for forgetting that Shin Megami Tensei V: Vengeance is available right now on PC, Nintendo Switch, and Xbox and PlayStation platforms. As the definitive version of 2021’s Shin Megami Tensei V, Vengeance is a stellar turn-based adventure that I can easily recommend to RPG fans and monster collecting fanatics alike. For Persona fans who are curious about the series those games spun off from, this is a great place to start.</p>
                <p>Of course, if you’re new to Shin Megami Tensei—or it’s just been a while since you played it—you may have some trouble getting your bearings. After all, the series has a (frankly overexaggerated) reputation for its difficulty. So to help you on your way, here are 10 tips that should help ease you into the opening hours of Shin Megami Tensei V: Vengeance.</p>
                <p><b>Buy <i>Shin Megami Tensei V: Vengeance:</i></b>  | Best Buy | Humble Bundle</p>
            </div>
        )
    },
    {
        id: 'additional-guide-1-3',
        img: imgAdd1_3,
        title: "Kotaku’s Weekend Guide: Four Games To Send You To The Stars (And Realms Beyond)",
        description: "Let’s travel to space, the dark place, and a popular fantasy game with a long-awaited sequel on the horizon",
        author: "By Claire Jackson, Ethan Gach, Willa Rowe, and John Walker",
        published: "Published June 14, 2024",
        category1: "GAME TIPS",
        category: 'guides',
        detail: (
            <div>
                <p>Here we are again at another weekend. This time, we’re hoping to get a bit of rest from the wonderful mania of covering Summer Game Fest, and all the many showcases and events that happened in between.</p>
                <p>And while this summer is packed with neat-looking games on the immediate horizon, this weekend we’re checking out some new and old experiences, from DLC updates to some great existing games, mods that improve others, and a nice throwback to 2014. We’re sure our picks are likely to inspire you if you’re at a loss for what to play.</p>
                <p>Destiny 2: The Final Shape</p>
                <p>Play it on: PS5, Xbox Series X/S, Windows (Steam Deck Nope!)<br />
                    Current goal: Defeat The Witness<br />
                    Buy it from: Humble Bundle</p>
                <p>I was in LA last week for Summer Game Fest, which ground my Final Shape progress to a halt at the worst possible time. While everyone else was glued to the raid race, enjoying the wild 12-player final mission it unlocked, and has been deep in the post-game grind ever since, I’m still barely past the half-way point in the main campaign and, I gotta be honest, it was a slog up to that point. In terms of story and presentation, The Final Shape is everything I’ve hoped for so far, but those early missions had nothing on The Witch Queen.</p>
                <p>Fortunately, literally everyone else I’ve asked has said the back-half of The Final Shape is its strongest, and a genuinely bold display of the game’s ambitions firing on all cylinders. It’s been a while since Destiny 2 sucked me in like a live service black hole, but I can’t wait to experience some of that again this weekend. In fact, I’m almost glad I missed out on the initial wave of everyone completing the expansion, because now I can experience the campaign in my own time, without the anxiety of the power grind or keeping up with the rest of the Destiny 2 community zeitgeist. I’ve been spoiled enough to know there’s an Avengers-style showdown coming and I can’t wait. After all, it’s one I’ve waited 10 years for. — Ethan Gach</p>
            </div>
        )
    },
    {
        id: 'additional-guide-1-4',
        img: imgAdd1_4,
        title: "How To Complete The Beastly Battle Of Wits Quest In Shin Megami Tensei V: Vengeance",
        description: "Let’s help you solve Nozuchi’s riddles and find the Sangaku Beads",
        author: "By Timothy Monbleau",
        published: "Published June 14, 2024",
        category1: "GAME TIPS",
        category: 'guides',
        detail: (
            <div>
                <p>Most of the early game quests in Shin Megami Tensei V: Vengeance explicitly tell you where you need to go, but you’ll find a few exceptions. A prime example of this occurs when you meet the Nozuchi in a corner of West Shinbashi, who presents you with the “Beastly Battle of Wits” quest.</p>
                <p>To complete this quest, you’ll have to solve three “riddles” the Nozuchi presents to you. However, each objective is different from the last, which can turn you around if you aren’t paying close attention.</p>
                <p>Before we dissect each phase of the Beastly Battle of Wits, know that some combat is involved to complete this quest. There’s no major boss battle here, mind you, but the combat can catch you off guard if you’re under-leveled. The strongest monster you’ll face here is level 18, so use that information to decide if you’d like to tackle other quests to level up first.</p>
                <p>With that out of the way, here’s how to complete each phase of this quest.</p>
                <p><img src={Add4_1t1} alt="How To Complete The Beastly Battle Of Wits Quest In Shin Megami Tensei V: Vengeance" style={{ maxWidth: "100%", height: "auto" }} /></p>
            </div>
        )
    },
    {
        id: 'additional-guide-1-5',
        img: imgAdd1_5,
        title: "Starfield Mod Fixes The Ending To One Of The Game’s Best Quests",
        description: "It ain’t pretty, but it sure beats the canonical endings to this otherwise-great quest",
        author: "By Claire Jackson",
        published: "Published June 14, 2024",
        category1: "GAME TIPS",
        category: 'guides',
        detail: (
            <div>
                <p>Hey, do you remember that really neat Star Trek-esque quest in Starfield where you had to help some long-lost colonists find a new home, but the game thought killing children was an acceptable outcome, while doing the same to the corporate execs who have power over those children and their relatives was just out of the question? Yeah, it’s definitely one of those moments that made me realize Starfield was far more on rails than it should be. But there’s good news, as modder cognimancer has delivered a mod on the Creations’ suite.</p>
                <p>Read More: Don’t Skip Starfield’s Star Trek-Esque Quest<br />
                    Buy Starfield:  | Best Buy | GameStop</p>
                <p>Many of Starfield’s quests leave a lot to be desired for, but “First Contact” actually does some speculative work in this otherwise speculative work of fiction. Who can lay claim to worlds found in deep space? How do advances in technology displace and disadvantage people? And why are my only options to send lost people off to the unknown, force them into indentured servitude, or kill them? Well, at least there’s a new outcome to mess with.</p>
                <h2>Downloading ‘Eat The Rich’ alternate quest solutions</h2>
                <p>In the Creations suite, you can find the alternate quest outcome by searching for “Eat The Rich.” It’s a rather simple mod that simply changes the corporate board members of Paradiso from essential to non-essential (I sure do like the sound of that…). This means you can waltz on into their cute little meeting where they’re deciding the fates of entire groups of people and the allocation of natural resources, and just kill ‘em!</p>
                <p>Read More: How To Install And Use Starfield’s Official And Fan-Made Mods</p>
                <p>This is a slightly better way to dispose of the corpo serpents than using SKKmods’ Headshot mod, which still requires you to land a headshot.</p>
                <p>As a quest-altering mod, you’ll want this one early in your load order (the order in which your mods load in), but not before community patches like the Unofficial Starfield Patch.</p>
            </div>
        )
    },
    {
        id: 'additional-guide-1-6',
        img: imgAdd1_6,
        title: "Cut Out Dragon Age: Inquisition’s Filler And Stick To The Good Stuff With These Mods",
        description: "If you’re replaying before The Veilguard, here’s a handy list of mods that will help you get the most out of it",
        author: "By Kenneth Shepard",
        published: "Published June 14, 2024",
        category1: "GAME TIPS",
        category: 'guides',
        detail: (
            <div>
                <p>Dragon Age: The Veilguard is coming this fall, and fans and newcomers alike are going back to play the first three games before BioWare’s next fantasy RPG hits store shelves. However, Dragon Age: Inquisition is much more expansive than its predecessors, opting for the “open zone” format with a bunch of busy work and tiresome traversal. Thankfully, if you’re looking to go back to the 2014 RPG ahead of The Veilguard, there’s a mod list that will let you skip to all the good stuff and avoid a lot of the bloat.</p>
                <p>Artist Corey Brickley has compiled a list of mods for what they call the Dragon Age: Inquisition “Story Mode,” which they describe as a means to “skip the boring grinding and get to the good stuff,” specifically the story and party member quests. I’ve always asserted that Inquisition has one of BioWare’s best stories and casts, but they’re buried under a lot of open-world nonsense and real-world time-gated mechanics that make it impossible to see everything in a timely manner. The “Story Mode” mods target several of the most time-consuming parts of Inquisition, from the War Table that requires you to wait in real-time (from a few minutes to several hours) to complete quests to the “Power” mechanic that gates the main story quests by making you do side quests to increase your influence.</p>
                <p>I haven’t replayed Dragon Age: Inquisition in several years at this point, but playing it the first time, I knew its biggest weakness is how much all the superfluous live-service-esque nonsense gets in the way of enjoying its excellent critical path. Speedrunning that game is a needlessly complicated process, but these mods target a lot of pain points. So if you’re looking to go back before The Veilguard and are playing on PC, this is a great way to get through it in a reasonable amount of time.</p>
                <p>If you’re playing Dragon Age: Inquisition for the first time, playing with these mods active will probably give you a much better experience. And if you’re new to the series, I’d recommend playing through the other games, too, and specific DLCs for each. For more on that, click here.</p>
            </div>
        )
    },
    {
        id: 'additional-guide-1-7',
        img: imgAdd1_7,
        title: "Should You Take The Girl's Hand In Shin Megami Tensei V: Vengeance?",
        description: "Let’s figure out if you should embark on the Canon of Vengeance or the Canon of Creation",
        author: "By Timothy Monbleau",
        published: "Published June 14, 2024",
        category1: "GAME TIPS",
        category: 'guides',
        detail: (
            <div>
                <p>One of the most impactful decisions you’ll make in Shin Megami Tensei V: Vengeance comes right at the start of the game. Standing at a literal crossroads, you see a girl suspended in the air. Ominous voices explain that she will lead the world into chaos and ruin, and if you take her hand, you will enter into “a world yet unknown.” The game then asks you if you’ll take her hand, but what, exactly, are you getting yourself into with this decision?</p>
                <p>The decision to take the girl’s hand will determine which story path you’ll take in Shin Megami Tensei V: Vengeance. If you refuse to take her hand, you’ll embark on the Canon of Creation. This is the story that was featured in the 2021 original version of Shin Megami Tensei V, albeit with some new quests and quality of life changes. However, if you do take her hand, you’ll experience the Canon of Vengeance instead. This is the new story path, in which this mysterious girl will change key story beats and ultimately affect the outcome of the plot.</p>
                <p>The game will explain all this after you make your choice, and it will give you the chance to alter your decision after explicitly telling you which path you’re about to take. However, once you make your decision, it’s set in stone for the rest of the game.</p>
                <p><b>Buy <i>Shin Megami Tensei V: Vengeance:</i></b> | Best Buy | Humble Bundle</p>
                <p><img src={Add7_1t1} alt="How To Complete The Beastly Battle Of Wits Quest In Shin Megami Tensei V: Vengeance" style={{ maxWidth: "100%", height: "auto" }} /></p>
            </div>
        )
    },
    {
        id: 'additional-guide-1-8',
        img: imgAdd1_8,
        title: "The Quickest Way To Catch Up On Dragon Age Before The Veilguard Arrives",
        description: "BioWare’s fantasy RPG series has been going on for 15 years, here’s the most important things to go back and play",
        author: "By Kenneth Shepard",
        published: "Published June 13, 2024",
        category1: "GAME TIPS",
        category: 'guides',
        detail: (
            <div>
                <p>It’s been ten years since Dragon Age: Inquisition, the third entry in BioWare’s fantasy RPG series, and so it’s likely that a lot of people who are intrigued by the upcoming Dragon Age: The Veilguard have never touched a game in the series before. If you were enticed by the early gameplay or quippy-ass cinematic trailer, you might be wondering if you can jump into the game without any prior knowledge. BioWare is adamant that you can play the game formerly known as Dragon Age: Dreadwolf without playing the three original games, but should you? Let’s unpack 15 years of lore and character development, and get to the meat of what you should probably actually play before The Veilguard arrives.</p>
                <h2>Bare minimum, you should play Dragon Age: Inquisition before The Veilguard</h2>
                <p>While Dragon Age is often positioned as an anthology series, 2014’s Inquisition is a direct lead-in to the conflict unfolding in The Veilguard. Solas, the elf shown at the end of the gameplay trailer, is a party member in the third game, and it turns out the whole game is set into motion by his actions. Knowing Solas, his relationship to the people around him, and his place in the grander Dragon Age universe is pretty much required reading for anything happening in The Veilguard to make a lick of sense. Yes, The Veilguard will likely catch you up on some things, but comprehension is the bare minimum. If you want The Veilguard to matter to you, it’s best to see Solas’ story from the beginning. Inquisition is available on all modern platforms through backwards compatibility, so you can play it anywhere.</p>
                <h2>But isn’t that game full of open-world bloat?</h2>
                <p>It sure is, reader. However, if you critical-path it, and by that I mean only do main story missions and party member routes you’ll unlock by hanging out with your companions at your base of operations, you can get through Dragon Age: Inquisition in a pretty breezy 30-40 hours.</p>
                <h2>That sounds pretty reasonable. Anything else I should definitely play before The Veilguard?</h2>
                <p>Don’t uninstall Dragon Age: Inquisition just yet. The game has three DLC chapters that you can also play, but the one you should definitely make time for is Trespasser. This is the final DLC that jumps the story ahead two years and leads directly into The Veilguard. If you’re going to go back and play Inquisition, the story will not be complete until you see Trespasser through. On top of getting a lead-in for the sequel, you’ll make some big decisions and get an epilogue that gives you an idea of where some of your party members ended up after Inquisition.</p>
            </div>
        )
    },
    {
        id: 'additional-guide-1-9',
        img: imgAdd1_9,
        title: "Octopath Traveler II's Four Brand-New Boss Battles, Explained",
        description: "Here’s how to access the Extra Battles in Square Enix's popular RPG",
        author: "By Timothy Monbleau",
        published: "Published June 13, 2024",
        category1: "GAME TIPS",
        category: 'guides',
        detail: (
            <div>
                <p>On June 6th, Square Enix announced that both Octopath Traveler games are now available on more platforms. Not only is Octopath Traveler available on PlayStation, but you can play Octopath Traveler 2 on Xbox and Xbox Game Pass. Square Enix released a trailer celebrating the new ports, but eagle-eyed RPG fans noticed something curious about the footage shown. Namely, why is there a shot of the protagonists from Octopath Traveler fighting the cast of Octopath Traveler 2? When did that ever happen in the games!?</p>
                <p><img src={Add9_1t1} alt="How To Complete The Beastly Battle Of Wits Quest In Shin Megami Tensei V: Vengeance" style={{ maxWidth: "100%", height: "auto" }} /></p>
                <p>It turns out that Square Enix snuck in a little surprise for Octopath Traveler 2 fans amidst all the excitement. As part of Update 1.1.0, which became available on all platforms on June 6th, four new boss battles were added to the already sprawling RPG. For those who have cleared the main story, a new mode labeled Extra Battles will appear on the main menu for Octopath Traveler 2. In short, these new boss battles are no joke. If you felt Octopath Traveler 2 was too easy for your tastes, you’ll want to open your save file one more time to give these encounters a spin.</p>
                <p>Here’s everything you need to know about these new battles.</p>
            </div>
        )
    },
];

export const additionalGuides2 = [
    {
        id: 'additional-guide-2-1',
        img: imgAdd2_1,
        title: "The Long-Awaited June Nintendo Direct Is Finally Happening",
        author: "Kenneth Shepard",
        published: "Yesterday",
        category1: "GAME TIPS",
        category: 'guides',
        detail: (
            <div>
                <p>Now that most of the industry is done with Summer Game Fest and all its orbiting events, Nintendo is jumping into the summer video game announcement fray with its own Nintendo Direct. After plenty of speculation and rumors floating around the internet, the company has confirmed the showcase will take place tomorrow, June 18, at 7 a.m. Pacific/10 a.m. Eastern. Thankfully, that’s an hour later than the usual ass-crack of dawn 9 a.m. Eastern slot the company typically chooses for these showcases.</p>
                <p>According to Nintendo’s announcement post, the stream will last about 40 minutes and will specifically focus on Switch games coming out in the second half of 2024. So if you, like me, were hoping to see a glimpse of Pokémon Legends: Z-A, tuck that for a bit, because that game’s coming out in 2025. As previously announced, this Direct won’t have any mention of the Switch successor reportedly coming out next year. Good on Nintendo for keeping expectations in check, but that won’t stop a subset of the internet from being mad when it doesn’t show up. The stream will go live on YouTube at this link.</p>
                <iframe
                    width="783"
                    height="459"
                    src="https://www.youtube.com/embed/kX3BkD5PVUM"
                    title="IGN / Seawolf Studio"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        )
    },
    {
        id: 'additional-guide-2-2',
        img: imgAdd2_2,
        title: "Frustrated Final Fantasy XIV Healers Are Planning To Strike When Dawntrail Debuts",
        author: "Willa Rowe",
        published: "Yesterday",
        category1: "GAME TIPS",
        category: 'guides',
        detail: (
            <div>
                <p>After months (and even years) of healer mains in Final Fantasy 14 complaining that Square Enix’s MMORPG has simplified and devalued the job, seemingly to no avail, aggrieved healers are going one step further to make their opinion known: They’re going on strike.</p>
                <p>The strike originated on June 9, when Square Enix forum user Gemina (a Scholar main) posted a thread succinctly titled #FFXIVHEALERSTRIKE. The thread opens with a mission statement for the strike. Gemina writes:</p>
                <p>I would like to make this the official thread for those in support of a healer strike as a collective voice to the dev team to express the dissatisfaction with the continued direction the game has gone concerning healer gameplay and what is an arrived consensus that has deemed to be a negligence towards the role, as well as the players who main it.</p>
                <p>The strike asks any player who participates to abstain from taking on any healer jobs in any group content (dungeons, raids, trials).</p>
                <p>While this is not a new issue for FF14’s healer community, Dawntrail previews were the tipping point that led to the strike. Specifically, FF14 content creator Xenosys Vex’s preview video, showing a four-person party beating the new expansion’s first dungeon, Ihuykatumu, without a healer. Of course, Xenosys used some clever party make-up: The party’s tank was a Warrior, a class known for its self-healing abilities. The Warrior was then supported by three DPS players, with one choosing Red Mage to make use of healing and revival magic without the need for a true healer. Still, it’s not a good look for Dawntrail and it has put a sour taste in many healers’ mouths.</p>
                <iframe
                    width="783"
                    height="459"
                    src="https://www.youtube.com/embed/VqBWp00XNZs"
                    title="IGN / Seawolf Studio"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        )
    },
    {
        id: 'additional-guide-2-3',
        img: imgAdd2_3,
        title: "Promising-Looking Sims Competitor Canceled",
        author: "Zack Zwiezen",
        published: "Yesterday",
        category1: "GAME TIPS",
        category: 'guides',
        detail: (
            <div>
                <p>Paradox Interactive, the company behind Cities: Skylines and Crusader Kings, announced that after numerous delays it has decided to cancel development of Life By You, its highly anticipated Sims-like game.</p>
                <p>Originally announced in March 2023, Life By You looked like a promising new take on the life-management genre that is mostly dominated by EA’s long-running Sims franchise. While the first trailer for Life By You looked a lot like The Sims, Paradox Interactive promised that its spin on the genre would feature even more customization. Players would be able to not only change their clothing, appearance, and homes, but also to customize and control conversations and even career paths. Paradox Interactive also promised that Life By You would be highly moddable, too. However, players won’t get a chance to mod or play the life sim.</p>
                <iframe
                    width="783"
                    height="459"
                    src="https://www.youtube.com/embed/U9c3WEYTJIU"
                    title="IGN / Seawolf Studio"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        )
    }
];
