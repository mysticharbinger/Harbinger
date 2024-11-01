document.addEventListener('DOMContentLoaded', function() {
    const trendingList = document.getElementById('trending-list');
    const latestList = document.getElementById('latest-list');
    const actionList = document.getElementById('action-list');
    const comedyList = document.getElementById('comedy-list');
    const dramaList = document.getElementById('drama-list');

    // Movie data for different categories
    const trendingMovies = [
        { title: 'The Lost City', img: 'https://images.unsplash.com/photo-1526408342028-50f2a167b5c4' },
        { title: 'Galactic Warriors', img: 'https://images.unsplash.com/photo-1551863748-31b3f2fcb7db' },
        { title: 'Mystery of the Abyss', img: 'https://images.unsplash.com/photo-1496152008043-93c9f9c3ab30' },
        { title: 'Distant Echoes', img: 'https://images.unsplash.com/photo-1556222412-5a6b1b04e1b3' },
        { title: 'Beyond the Horizon', img: 'https://images.unsplash.com/photo-1541613100-65ecb5a1b45b' },
        { title: 'The Enigma Files', img: 'https://images.unsplash.com/photo-1511767373010-9d9c0070d10d' },
        { title: 'Starlit Journey', img: 'https://images.unsplash.com/photo-1564045350724-75c8b3d18134' },
        { title: 'Heart of the Ocean', img: 'https://images.unsplash.com/photo-1497151400901-c4b78c8c10ba' },
        { title: 'The Forgotten Realm', img: 'https://images.unsplash.com/photo-1518983966366-4840e1c7d1c5' },
        { title: 'Echoes of Time', img: 'https://images.unsplash.com/photo-1499833356146-4fda1e7baf0a' },
    ];

    const latestMovies = [
        { title: 'Time Traveler', img: 'https://images.unsplash.com/photo-1543030911-e1b4f50c2ef5' },
        { title: 'Eternal Love', img: 'https://images.unsplash.com/photo-1517269352702-e15375d1e93b' },
        { title: 'Mystic Realms', img: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0' },
        { title: 'The Dark Tower', img: 'https://images.unsplash.com/photo-1609117872461-6b0986c795e9' },
        { title: 'Rise of the Phoenix', img: 'https://images.unsplash.com/photo-1602529920212-73c557e23e96' },
        { title: 'Shadow of the Beast', img: 'https://images.unsplash.com/photo-1551632271-1f1234e2c2b0' },
        { title: 'Chasing Dreams', img: 'https://images.unsplash.com/photo-1560368239857-2a2258d3b5b6' },
        { title: 'Frosted Memories', img: 'https://images.unsplash.com/photo-1526437745352-0e2b1ef89b5e' },
        { title: 'Whispers in the Wind', img: 'https://images.unsplash.com/photo-1542650788-3b0b13c9b9d0' },
        { title: 'The Last Hope', img: 'https://images.unsplash.com/photo-1521771692-1f0e13a4f6f3' },
    ];

    const actionMovies = [
        { title: 'Furious Drive', img: 'https://images.unsplash.com/photo-1518975036344-4e576f1e9092' },
        { title: 'Battlefield X', img: 'https://images.unsplash.com/photo-1515933588481-fb7da633ff11' },
        { title: 'Rogue Agent', img: 'https://images.unsplash.com/photo-1509621781710-b8f3d29bc1f7' },
        { title: 'Last Stand', img: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0' },
        { title: 'Ultimate Challenge', img: 'https://images.unsplash.com/photo-1524279610480-e8e0aebf0ef2' },
        { title: 'City Under Siege', img: 'https://images.unsplash.com/photo-1609117872461-6b0986c795e9' },
        { title: 'The Protector', img: 'https://images.unsplash.com/photo-1543862776-5bfe834c4c36' },
        { title: 'Sky High', img: 'https://images.unsplash.com/photo-1517002712011-3f9639d15526' },
        { title: 'Operation Phantom', img: 'https://images.unsplash.com/photo-1542312007-20c701f6b42a' },
        { title: 'Unstoppable Force', img: 'https://images.unsplash.com/photo-1490831919755-5c5c89a724f8' },
    ];

    const comedyMovies = [
        { title: 'Laugh Out Loud', img: 'https://images.unsplash.com/photo-1517423202014-4d40b0b8f6da' },
        { title: 'Funny Business', img: 'https://images.unsplash.com/photo-1573682144541-29c46225f5e7' },
        { title: 'Jokes on Us', img: 'https://images.unsplash.com/photo-1509613151377-4b6d9c0f1d8d' },
        { title: 'Crazy Adventures', img: 'https://images.unsplash.com/photo-1580340315631-6a7bb8c616d1' },
        { title: 'Stand-Up Night', img: 'https://images.unsplash.com/photo-1603077533250-c67ac88fbd71' },
        { title: 'The Prank War', img: 'https://images.unsplash.com/photo-1593091400756-f9c2a4a8b290' },
        { title: 'Best Friends Forever', img: 'https://images.unsplash.com/photo-1571402031231-b6e98a5b73f3' },
        { title: 'Misadventures', img: 'https://images.unsplash.com/photo-1557301730-1d22a21f7b5d' },
        { title: 'Goofing Around', img: 'https://images.unsplash.com/photo-1602454255436-34b351f8fc29' },
        { title: 'Silly Days', img: 'https://images.unsplash.com/photo-1564036734738-29db5f5827c2' },
    ];

    const dramaMovies = [
        { title: 'The Last Chance', img: 'https://images.unsplash.com/photo-1563221266-df9c99bcbcf9' },
        { title: 'Hope Springs Eternal', img: 'https://images.unsplash.com/photo-1582925157278-8d01b80ccf0d' },
        { title: 'A Heartfelt Story', img: 'https://images.unsplash.com/photo-1511655231773-c2d0c8e7bcb0' },
        { title: 'Tears of Joy', img: 'https://images.unsplash.com/photo-1578777300846-b8ee447e12d1' },
        { title: 'Whispers of the Past', img: 'https://images.unsplash.com/photo-1520821125637-cbeff63700e2' },
        { title: 'Breaking Barriers', img: 'https://images.unsplash.com/photo-1582881147988-4d8d3fc6d3ff' },
        { title: 'A Journey Within', img: 'https://images.unsplash.com/photo-1545727904-b7d7f5ec6a73' },
        { title: 'The Road to Redemption', img: 'https://images.unsplash.com/photo-1534343372918-292d859e485f' },
        { title: 'Love in the Time of Chaos', img: 'https://images.unsplash.com/photo-1597614169748-9c25d08c5393' },
        { title: 'Echoes of the Heart', img: 'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0' },
    ];

    // Function to render movie list
    function renderMovies(movies, listElement) {
        movies.forEach(movie => {
            const movieItem = document.createElement('div');
            movieItem.className = 'movie-item';
            movieItem.style.backgroundImage = `url(${movie.img})`;
            movieItem.title = movie.title;
            listElement.appendChild(movieItem);
        });
    }

    // Render all movie categories
    renderMovies(trendingMovies, trendingList);
    renderMovies(latestMovies, latestList);
    renderMovies(actionMovies, actionList);
    renderMovies(comedyMovies, comedyList);
    renderMovies(dramaMovies, dramaList);
});
