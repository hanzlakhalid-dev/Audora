// Toast nottification
const ShowToast = (message) => {
    const existingToast = document.querySelector('.Toast-msg');
    if (existingToast) {
        existingToast.remove();
    }
    let Toast = document.createElement('div');
    Toast.className = 'Toast-msg';
    Toast.textContent = message;
    Toast.style.cssText = `
        position: fixed; top:5% ; left: 50%;
        transform: translateX(-50%);
        background: #1db954; color: white;
        padding: 10px 24px; border-radius: 20px;
        font-size: 14px;
        animation: toastFade 2.5s forwards;
        z-index: 10000000000;
    `;
    document.body.appendChild(Toast);
    setTimeout(() => {
        Toast.remove();
    }, 2500)
}
const ShowToast_login = (message) => {
    const modal_content = document.querySelector('.modal-content');
    const existingToast = document.querySelector('.Toast-msg-login');
    if (existingToast) {
        existingToast.remove();
    }
    let Toast = document.createElement('div');
    Toast.className = 'Toast-msg-login';
    Toast.textContent = message;
    Toast.style.cssText = `
        position: fixed; top:5% ; left: 50%;
        transform: translateX(-50%);
        background: #1db954; color: white;
        padding: 10px 24px; border-radius: 20px;
        font-size: 14px;
        animation: toastFade 2.5s forwards;
        z-index: 100000000;
    `;
    modal_content.appendChild(Toast);
    setTimeout(() => {
        Toast.remove();
    }, 2500)
}

let chillVibes = document.querySelector('.Chill-vibes');
let happyHits = document.querySelector('.Happy-hits');
let morningBoost = document.querySelector('.Morning-boost');
let studyBeats = document.querySelector('.Study-beats');
let roadTripTunes = document.querySelector('.Road-trip-tunes');
let relaxUnwind = document.querySelector('.Relax-unwind');
let sunsetSongs = document.querySelector('.Sunset-songs');
let feelGoodMusic = document.querySelector('.Feel-good-music');
let partyFun = document.querySelector('.Party-fun');
let indieVibes = document.querySelector('.Indie-vibes');
let liked_songs_bar = document.querySelector('.liked_songs_bar');
let recently_viewed_bar = document.querySelector('.recently_viewed_bar');
let playlists_liked_bar = document.querySelector('.playlists_liked_bar');
let songs_opened = document.querySelector('.songs-opened');
let playlists = document.querySelector('.playlists');
let mobile_sidebar = document.querySelector('.mobile-SideBar');
let arrow = document.querySelector('.arrow-goback');
let PlayBtnPlaylist = document.querySelector('.playbutton-in-playlist');
let searchbar = document.getElementById('Search_bar');
let audio = null;
let SearchResulBox = document.querySelector('.SearchResulBox');
let loginBtn = document.querySelector('.login');
let Nameloginli = document.querySelector('.showName-li');
let Namelogin = document.querySelector('.showName-login');
let signupBtn = document.querySelector('.signup');
let progressInterval = null;
let pictureUser = document.querySelector('#Profile-pic');
let topSongsBar = document.querySelector('.songs-info');
let loginsubmit = document.querySelector('.login-submit');
let picture_upload = document.querySelector('.imageupload');
let ShuffleBtn = document.querySelectorAll('.shuffle-btn');
let repeatStatus = false;
let repeatBtn = document.getElementById('repeat-btn');
let playlistTriggers = document.querySelectorAll('.Playbutton_Play');
let playlist_like_btn = document.querySelector('.playlist-like-button svg');
let UL_library_playlist = document.querySelectorAll('.liked-playlists-history .library-songs-history');
let UL_library_Song = document.querySelectorAll('.songs-liked-history .library-songs-history');
let recently_viewed = document.querySelector('.songs-recently-viewed .library-songs-history');
const table = document.querySelector('.tabelofsongs');
const pictures_playlists = {
    "Chill-vibes": ["pictures/Chill-vibes_pic.jpg"],
    "Feel-good-music": ["pictures/Feel-good-music_pic.jpg"],
    "Happy-hits": ["pictures/Happy-hits_pic.jpg"],
    "Indie-vibes": ["pictures/Indies-vibes_pic.jpg"],
    "Morning-boost": ["pictures/Morning-boost_pic.jpg"],
    "Party-fun": ["pictures/Party-fun_pic.jpg"],
    "Relax-unwind": ["pictures/Relax-&-unwind_pic.jpg"],
    "Road-trip-tunes": ["pictures/Road-trip-tunes_pic.jpg"],
    "Study-beats": ["pictures/study-beats_pic.jpg"],
    "Sunset-songs": ["pictures/Sunset-songs_pic.jpg"]
};
const musicLibrary = {
    "Chill-vibes": [
        { title: "Chill fun", file: "Chill Vibes/Chill fun.mp3", playlistName: "Chill Vibes", playlistDescription: "Relax and unwind with smooth, laid-back tracks perfect for any calm moment." },
        { title: "Chill travel", file: "Chill Vibes/Chill travel.mp3", playlistName: "Chill Vibes", playlistDescription: "Relax and unwind with smooth, laid-back tracks perfect for any calm moment." },
        { title: "Chill tune", file: "Chill Vibes/Chill tune.mp3", playlistName: "Chill Vibes", playlistDescription: "Relax and unwind with smooth, laid-back tracks perfect for any calm moment." },
        { title: "Chilliing vibe", file: "Chill Vibes/Chilliing vibe.mp3", playlistName: "Chill Vibes", playlistDescription: "Relax and unwind with smooth, laid-back tracks perfect for any calm moment." },
        { title: "Party chill", file: "Chill Vibes/Party chill.mp3", playlistName: "Chill Vibes", playlistDescription: "Relax and unwind with smooth, laid-back tracks perfect for any calm moment." }
    ],

    "Feel-good-music": [
        { title: "Feel calm", file: "Feel good music/Feel calm.mp3", playlistName: "Feel Good Music", playlistDescription: "Songs that instantly brighten your day." },
        { title: "Feel fun", file: "Feel good music/Feel fun.mp3", playlistName: "Feel Good Music", playlistDescription: "Songs that instantly brighten your day." },
        { title: "Feel locked-in", file: "Feel good music/Feel locked-in.mp3", playlistName: "Feel Good Music", playlistDescription: "Songs that instantly brighten your day." }
    ],

    "Happy-hits": [
        { title: "Happy calm", file: "Happy hits/Happy calm.mp3", playlistName: "Happy Hits", playlistDescription: "Feel good songs to lift your mood anytime." },
        { title: "Cought happy", file: "Happy hits/Cought happy.mp3", playlistName: "Happy Hits", playlistDescription: "Feel good songs to lift your mood anytime." },
        { title: "Happy gaming", file: "Happy hits/Happy gaming.mp3", playlistName: "Happy Hits", playlistDescription: "Feel good songs to lift your mood anytime." },
        { title: "Happy trip", file: "Happy hits/Happy trip.mp3", playlistName: "Happy Hits", playlistDescription: "Feel good songs to lift your mood anytime." },
        { title: "Happy vibe", file: "Happy hits/Happy vibe.mp3", playlistName: "Happy Hits", playlistDescription: "Feel good songs to lift your mood anytime." }
    ],

    "Indie-vibes": [
        { title: "Cold vibe", file: "Indie Vibes/Cold vibe.mp3", playlistName: "Indie Vibes", playlistDescription: "Discover fresh and unique indie tunes." },
        { title: "Control setback", file: "Indie Vibes/Control setback.mp3", playlistName: "Indie Vibes", playlistDescription: "Discover fresh and unique indie tunes." },
        { title: "Disciplined vibe", file: "Indie Vibes/Disciplined vibe.mp3", playlistName: "Indie Vibes", playlistDescription: "Discover fresh and unique indie tunes." },
        { title: "Indie Vibe", file: "Indie Vibes/Indie Vibe.mp3", playlistName: "Indie Vibes", playlistDescription: "Discover fresh and unique indie tunes." },
        { title: "Just music", file: "Indie Vibes/Just music.mp3", playlistName: "Indie Vibes", playlistDescription: "Discover fresh and unique indie tunes." }
    ],

    "Morning-boost": [
        { title: "Calm mood", file: "Morning boost/Calm mood.mp3", playlistName: "Morning Boost", playlistDescription: "Start your day energized with upbeat tracks." },
        { title: "Energy booster", file: "Morning boost/Energy booster.mp3", playlistName: "Morning Boost", playlistDescription: "Start your day energized with upbeat tracks." },
        { title: "Morning boost", file: "Morning boost/Morning boost.mp3", playlistName: "Morning Boost", playlistDescription: "Start your day energized with upbeat tracks." },
        { title: "Starting day tune", file: "Morning boost/Starting day tune.mp3", playlistName: "Morning Boost", playlistDescription: "Start your day energized with upbeat tracks." },
        { title: "Stay steady", file: "Morning boost/Stay steady.mp3", playlistName: "Morning Boost", playlistDescription: "Start your day energized with upbeat tracks." }
    ],

    "Party-fun": [
        { title: "Happy party", file: "Party fun/Happy party.mp3", playlistName: "Party Fun", playlistDescription: "High-energy tracks to get everyone dancing." },
        { title: "Party boost", file: "Party fun/Party boost.mp3", playlistName: "Party Fun", playlistDescription: "High-energy tracks to get everyone dancing." },
        { title: "Party fun", file: "Party fun/Party fun.mp3", playlistName: "Party Fun", playlistDescription: "High-energy tracks to get everyone dancing." },
        { title: "Party tune", file: "Party fun/Party tune.mp3", playlistName: "Party Fun", playlistDescription: "High-energy tracks to get everyone dancing." }
    ],

    "Relax-unwind": [
        { title: "Relax & unwind", file: "Relax & Unwind/Relax & unwind.mp3", playlistName: "Relax & Unwind", playlistDescription: "Peaceful melodies to help you chill out." },
        { title: "Relax mind", file: "Relax & Unwind/Relax mind.mp3", playlistName: "Relax & Unwind", playlistDescription: "Peaceful melodies to help you chill out." },
        { title: "Relax setbacks", file: "Relax & Unwind/Relax setbacks.mp3", playlistName: "Relax & Unwind", playlistDescription: "Peaceful melodies to help you chill out." },
        { title: "Stay composed", file: "Relax & Unwind/Stay composed.mp3", playlistName: "Relax & Unwind", playlistDescription: "Peaceful melodies to help you chill out." }
    ],

    "Road-trip-tunes": [
        { title: "Just go and go", file: "Road Trip tunes/Just go and go.mp3", playlistName: "Road Trip Tunes", playlistDescription: "Perfect songs to enjoy on long drives." },
        { title: "Drive boost", file: "Road Trip tunes/Drive boost.mp3", playlistName: "Road Trip Tunes", playlistDescription: "Perfect songs to enjoy on long drives." },
        { title: "Road grid", file: "Road Trip tunes/Road grid.mp3", playlistName: "Road Trip Tunes", playlistDescription: "Perfect songs to enjoy on long drives." },
        { title: "Traveler tune", file: "Road Trip tunes/Traveler tune.mp3", playlistName: "Road Trip Tunes", playlistDescription: "Perfect songs to enjoy on long drives." }
    ],

    "Study-beats": [
        { title: "Calmly study", file: "Study beats/Calmly study.mp3", playlistName: "Study Beats", playlistDescription: "Focus and concentrate with calm background music." },
        { title: "Deep study", file: "Study beats/Deep study.mp3", playlistName: "Study Beats", playlistDescription: "Focus and concentrate with calm background music." },
        { title: "Learning vibe", file: "Study beats/Learning vibe.mp3", playlistName: "Study Beats", playlistDescription: "Focus and concentrate with calm background music." },
        { title: "Study composed", file: "Study beats/Study composed.mp3", playlistName: "Study Beats", playlistDescription: "Focus and concentrate with calm background music." },
        { title: "Study long", file: "Study beats/Study long.mp3", playlistName: "Study Beats", playlistDescription: "Focus and concentrate with calm background music." }
    ],

    "Sunset-songs": [
        { title: "Day gone", file: "Sunset Songs/Day gone.mp3", playlistName: "Sunset Songs", playlistDescription: "Beautiful tracks to enjoy the evening vibes." },
        { title: "Just stay steady", file: "Sunset Songs/Just stay steady.mp3", playlistName: "Sunset Songs", playlistDescription: "Beautiful tracks to enjoy the evening vibes." },
        { title: "One more night", file: "Sunset Songs/One more night.mp3", playlistName: "Sunset Songs", playlistDescription: "Beautiful tracks to enjoy the evening vibes." },
        { title: "Sun got shutt off", file: "Sunset Songs/Sun got shutt off.mp3", playlistName: "Sunset Songs", playlistDescription: "Beautiful tracks to enjoy the evening vibes." }
    ]
};
// Data of songs for search results

const Songlookup = {};
for (const [playlistkey, songs] of Object.entries(musicLibrary)) {
    songs.forEach((song, idx) => {
        Songlookup[song.title] = {
            playlist: playlistkey,
            index: idx,
            pic: pictures_playlists[playlistkey][0]
        }
    })
}
const playlistButtons = [
    chillVibes,
    happyHits,
    morningBoost,
    studyBeats,
    roadTripTunes,
    relaxUnwind,
    sunsetSongs,
    feelGoodMusic,
    partyFun,
    indieVibes
];
const songNames = [

    // Chill Vibes
    "Chill fun",
    "Chill travel",
    "Chill tune",
    "Chilliing vibe",
    "Party chill",

    // Feel Good Music
    "Feel calm",
    "Feel fun",
    "Feel locked-in",

    // Happy Hits
    "Happy calm",
    "Cought happy",
    "Happy gaming",
    "Happy trip",
    "Happy vibe",

    // Indie Vibes
    "Cold vibe",
    "Control setback",
    "Disciplined vibe",
    "Indie Vibe",
    "Just music",

    // Morning Boost
    "Calm mood",
    "Energy booster",
    "Morning boost",
    "Starting day tune",
    "Stay steady",

    // Party Fun
    "Happy party",
    "Party boost",
    "Party fun",
    "Party tune",

    // Relax & Unwind
    "Relax & unwind",
    "Relax mind",
    "Relax setbacks",
    "Stay composed",

    // Road Trip Tunes
    "Just go and go",
    "Drive boost",
    "Road grid",
    "Traveler tune",

    // Study Beats
    "Calmly study",
    "Deep study",
    "Learning vibe",
    "Study composed",
    "Study long",

    // Sunset Songs
    "Day gone",
    "Just stay steady",
    "One more night",
    "Sun got shutt off"
];
let RandomColors = [
    "linear-gradient(to bottom, #0f0f1a 0%, #4c1d95 50%, #c084fc 100%)",
    "linear-gradient(to bottom, #1a0b2e 0%, #6d28d9 50%, #e879f9 100%)",
    "linear-gradient(to bottom, #022c22 0%, #047857 50%, #34d399 100%)",
    "linear-gradient(to bottom, #0f291e 0%, #059669 50%, #6ee7b7 100%)",
    "linear-gradient(to bottom, #2a0a12 0%, #be185d 50%, #f472b6 100%)",
    "linear-gradient(to bottom, #1a0b1a 0%, #a21caf 50%, #f0abfc 100%)",
    "linear-gradient(to bottom, #2a0a0a 0%, #c2410c 50%, #fb923c 100%)",
    "linear-gradient(to bottom, #1a0505 0%, #991b1b 50%, #f87171 100%)",
    "linear-gradient(to bottom, #1a1505 0%, #a16207 50%, #facc15 100%)",
    "linear-gradient(to bottom, #0f0a00 0%, #854d0e 50%, #fde047 100%)",
    "linear-gradient(to bottom, #0f172a 0%, #1e3a8a 50%, #22d3ee 100%)"
];
playlistButtons.forEach(button => {
    button.addEventListener('click', function () {
        playlists.style.display = 'none';
        songs_opened.style.display = 'flex';
        let RandomColorChoosen = RandomColors[Math.floor(Math.random() * RandomColors.length)];
        topSongsBar.style.background = RandomColorChoosen;
        const left = document.querySelector('.left');
      if (getComputedStyle(mobile_sidebar).display !== 'none') {
    mobile_sidebar.click();
}
    });
});

liked_songs_bar.addEventListener('click', function () {
    const likedSongs = document.querySelector('.songs-liked-history');
    likedSongs.style.display = likedSongs.style.display === 'block' ? 'none' : 'block';
    if (!likedSongs.querySelector('li')) {
        likedSongs.innerHTML = ' <li><h3 class="history-view-heading">No Songs-liked</h3></li>'
    }
});

recently_viewed_bar.addEventListener('click', function () {
    const recentlyViewed = document.querySelector('.songs-recently-viewed');
    recentlyViewed.style.display = recentlyViewed.style.display === 'block' ? 'none' : 'block';
});

playlists_liked_bar.addEventListener('click', function () {
    const likedPlaylists = document.querySelector('.liked-playlists-history');
    likedPlaylists.style.display = likedPlaylists.style.display === 'block' ? 'none' : 'block';
});
arrow.addEventListener('click', function () {
    playlists.style.display = 'block';
    songs_opened.style.display = 'none'
});
mobile_sidebar.addEventListener('click', function () {
    const left = document.querySelector('.left');
    const right = document.querySelector('.right');
    const songs_opened = document.querySelector('.songs-opened');
    const playlists = document.querySelector('.playlists');
    const songs_info = document.querySelector('.songs-info');
    const songs_toplay = document.querySelector('.songs-toplay');
    const cardcontainer = document.querySelector('.cardcontainer');
    const isVisible = left.style.display === 'block';
    left.style.display = isVisible ? 'none' : 'block';
    right.style.width = isVisible ? '100vw' : '65vw';
    songs_toplay.style.width = isVisible ? '100vw' : '65vw';
    songs_info.style.width = isVisible ? '100vw' : '65vw';
    playlists.style.width = isVisible ? '100vw' : '65vw';
    songs_toplay.style.right = isVisible ? '100vw' : '65vw';
    songs_opened.style.width = isVisible ? '100vw' : '65vw';
    cardcontainer.style.width = isVisible ? '100%' : '90%';

    if (!isVisible) {
        playlists.style.display = 'block';
        songs_opened.style.display = 'none';
    }
});

// Fuction to Show Related Playlists when Clicked

playlistTriggers.forEach(playlistTrigger => {
    playlistTrigger.addEventListener('click', async function () {
        let playlistClass = Array.from(this.classList)
            .find(cls => cls !== 'playbutton' && cls !== 'Playbutton_Play')
        let pictures = pictures_playlists[playlistClass];
        let pic_show = document.querySelector('.pictures-playlist');
        let songs = musicLibrary[playlistClass];
        if (!songs || songs.length === 0) {
            console.error("Playlist not found:", playlistClass);
            return;
        }
        let table = document.querySelector('.tabelofsongs');
        if (!table) return;
        let para_playlist = document.querySelector('.songspara');
        let Heading_playlist = document.querySelector('.songsheading');
        if (songs && songs.length > 0) {
            const firstSong = songs[0];
            Heading_playlist.textContent = firstSong.playlistName;
            para_playlist.textContent = firstSong.playlistDescription;
            pic_show.src = pictures[0];
        }
        // If any Playlist is liked so it will like that
        const name_playlist = Heading_playlist.textContent;
        const playlists_liked_show = document.querySelector('.liked-playlists-history .library-songs-history');
        const already_exists = playlists_liked_show.querySelector(`[data-playlist-id="${name_playlist}"]`);
        const likeBtnPlaylist = document.querySelector(".playlist-like-button svg");
        if (already_exists) {
            likeBtnPlaylist.classList.add('like-show');
        } else {
            likeBtnPlaylist.classList.remove('like-show');
        }

        table.innerHTML = `
            <tr class="dont-move">
                <th class="hasttag-num">#</th>
                <th class="title-num">TITLE</th>
                <th class="normal-th">ALBUM</th>
                <th class="normal-th">DURATION</th>
                <th class="normal-th">DATE CREATED</th>
            </tr>
        `;
        const tbody = document.createElement('tbody');
        tbody.classList.add('tbodySongs');
        table.appendChild(tbody);
        function getAudioDuration(song) {
            return new Promise((resolve) => {
                const audio = new Audio(song.file);
                audio.addEventListener('loadedmetadata', () => {
                    const minutes = Math.floor(audio.duration / 60);
                    const seconds = Math.floor(audio.duration % 60);
                    const formattedDuration = `${minutes}:${seconds.toString().padStart(2, '0')}`;
                    resolve(formattedDuration);
                });
                audio.addEventListener('error', () => {
                    resolve('0:00');
                });
            });
        }

        for (let index = 0; index < songs.length; index++) {
            const song = songs[index];
            let songID = song.title;
            // Function to show songs which are liked  
            const song_liked = document.querySelector('.songs-liked-history .library-songs-history');
            const already_liked = song_liked.querySelector(`[id="${songID}"]`);
            const isLiked = already_liked !== null;
            const likeclass = isLiked ? 'like-show' : '';
            const duration = await getAudioDuration(song);
            const tr = document.createElement('tr');
            tr.className = 'song-row';
            tr.dataset.playlist = playlistClass;
            tr.dataset.index = index;
            tr.dataset.image = pictures[0];
            tr.id = songID;

            tr.innerHTML = `
              
                    <th class="hasttag-num">
                        <span class="number">${index + 1}</span>
                        <span onclick="Music_control(event);" class="play-on-hover">
                            <svg viewBox="0 0 24 24" class="playbuttonsvg-song">
                                <polygon points="8,5 8,19 19,12" fill="white"/>
                            </svg>
                        </span>
                    </th>
                    <th class="title-num">${song.title}</th>
                    <th class="normal-th">Album ${index + 1}</th>
                    <th class="normal-th">${duration}</th>
                    <th class="normal-th">2026</th>
                    <th class="likebutton-table">
                        <svg class="like-btn ${likeclass}" viewBox="0 0 122.88 107.41" xmlns="http://www.w3.org/2000/svg" fill="currentColor">
                            <path d="M60.83 17.19C68.84 8.84 74.45 1.62 86.79 0.21
                                     109.96-2.45 131.27 21.27 119.57 44.62
                                     116.24 51.27 109.46 59.18 101.96 66.94
                                     93.73 75.46 84.62 83.81 78.24 90.14
                                     L60.84 107.4 46.46 93.56
                                     C29.16 76.9 0.95 55.93 0.02 29.95
                                     -0.63 11.75 13.73 0.09 30.25 0.3
                                     45.01 0.5 51.22 7.84 60.83 17.19Z"/>
                        </svg>
                    </th>
                
            `;
            tbody.appendChild(tr);
        }

    });
});


// Function for like songs


table.addEventListener('click', function (e) {
    const likedbtn = e.target.closest('.like-btn');
    const songinfo = e.target.closest('tr').id;
    if (!likedbtn) return;
    const row = likedbtn.closest('.song-row');
    const playlistName = row.dataset.playlist;
    const songIndex = parseInt(row.dataset.index);
    const song = musicLibrary[playlistName][songIndex];
    const Name = song.title;
   const Title = Name.length > 10
        ? Name.substring(0, 7) + "..."
        : Name;
    const picture = row.dataset.image;
    likedbtn.classList.toggle('like-show');
    const songId = `${playlistName}-${songIndex}`;
    const row_toShow = document.querySelector('.songs-liked-history .library-songs-history');
    // If there is any song with like class then it will append that
    if (likedbtn.classList.contains('like-show')) {
        // If that is already so it will do nothing
        let existingItem = row_toShow.querySelector(`[data-song-id="${songId}"]`);
        if (existingItem) {
            return;
        }
        // Removes that none Heading
        const emptyMsg = row_toShow.querySelector('h3');
        if (emptyMsg) emptyMsg.parentElement.remove();
        const newitem = document.createElement('li');
        //Creating after all checks
        newitem.setAttribute('data-song-id', songId);
        newitem.innerHTML = `<a id="${songinfo}"  href="#"> <img src="${picture}" alt="">${Title}</a> <svg class="delte-btn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
        <path d="M10 11v6"></path>
        <path d="M14 11v6"></path>
        <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path>
        </svg>`

        row_toShow.appendChild(newitem);
    }
    else {
        const itemToRemove = row_toShow.querySelector(`[data-song-id="${songId}"]`);
        if (itemToRemove) itemToRemove.remove();
        if (!row_toShow.querySelector('li')) {
            row_toShow.innerHTML = ' <li><h3 class="history-view-heading">No Songs-liked</h3></li>'
        }
    }
});

// Fuction for like playlists


playlist_like_btn.addEventListener('click', function (e) {
    playlist_like_btn.classList.toggle('like-show');
    const playlists_liked_show = document.querySelector('.liked-playlists-history .library-songs-history');
    const Name = this.closest('.meta-info-playlist').querySelector('.songsheading').textContent;
   const playlistName = Name.length > 10
        ? Name.substring(0, 7) + "..."
        : Name;

    const metaInfo = this.closest('.meta-info-playlist');
    const songsInfo = metaInfo.closest('.songs-info');
    const picture = songsInfo.querySelector('.pictures-playlist').src;
    // if that is liked so it will run this
    if (playlist_like_btn.classList.contains('like-show')) {
        // Do nothing if  already exists
        const already_exists = playlists_liked_show.querySelector(`[data-playlist-id="${Name}"]`)
        if (already_exists) {
            return;
        }
        //Remove none heading
        const emptyMsg = playlists_liked_show.querySelector('h3');
        if (emptyMsg) emptyMsg.parentElement.remove();
        // Now Create
        const newitem = document.createElement('li');
        newitem.setAttribute('data-playlist-id', `${Name}`);
        newitem.innerHTML = `<a  href="#"> <img src="${picture}" alt="">${playlistName}</a> <svg class="delte-btn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="3 6 5 6 21 6"></polyline>
        <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
        <path d="M10 11v6"></path>
        <path d="M14 11v6"></path>
        <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path>
        </svg>`
        playlists_liked_show.appendChild(newitem);
    }
    else {
        const itemToRemove = playlists_liked_show.querySelector(`[data-playlist-id="${playlistName}"]`)
        if (itemToRemove) itemToRemove.remove();
        if (!playlists_liked_show.querySelector('li')) {
            playlists_liked_show.innerHTML = ' <li><h3 class="history-view-heading">No Playlists-liked</h3></li>'
        }
    }
})

// Function for delete button of Playlist

UL_library_playlist.forEach(UL_library_playlist => {
    UL_library_playlist.addEventListener('click', function (e) {
        if (!e.target.closest('.delte-btn')) return;
        const parentLi = e.target.closest('li');
        if (parentLi) {
            parentLi.remove();
            //remove color from icon
            const songs_info = document.querySelector('.songs-info');
            const hearticon = playlist_like_btn;
            hearticon.classList.remove('like-show');
            if (!UL_library_playlist.querySelector('li')) {
                UL_library_playlist.innerHTML = ' <li><h3 class="history-view-heading">No Playlists-liked</h3></li>'
            }
        }
    })
})

repeatBtn.addEventListener('click', function () {
    repeatStatus = !repeatStatus;
    repeatBtn.style.filter = repeatStatus ? 'hue-rotate(-120deg)' : '';
})


// Function for delete button for songs

UL_library_Song.forEach(UL_library_Song => {
    UL_library_Song.addEventListener('click', function (e) {
        if (!e.target.closest('.delte-btn')) return;
        const parentLi = e.target.closest('li');
        const name = parentLi.querySelector('a').id.toString();
        if (parentLi) {
            //remove color from icon
            const table = document.querySelector('.tabelofsongs');
            const hearticon = table.querySelector(`[id="${name}"]`);
            const name_withicon = hearticon.querySelector('.likebutton-table svg');
            name_withicon.classList.remove('like-show');
            parentLi.remove();
            if (!UL_library_Song.querySelector('li')) {
                UL_library_Song.innerHTML = ' <li><h3 class="history-view-heading">No Songs-liked</h3></li>'
            }
        }
    })
});

// Shuffle 

ShuffleBtn.forEach(function (Btn) {
    Btn.addEventListener('click', function () {
        Shuffle();
    });
});

function Shuffle() {
    const rows = Array.from(table.querySelectorAll("tr:not(.dont-move)"));

    // Sort rows randomly
    rows.sort(() => Math.random() - 0.5);

    // Put them back in the table
    rows.forEach(row => table.appendChild(row));

}

// Volume bar setting
const volume_bar = document.querySelector('.volume_bar');
const volume_icon = document.querySelector('.volume_icon');
volume_bar.addEventListener('input', () => {
    if (audio) audio.volume = volume_bar.value;

    if (volume_bar.value == 0) {
        volume_icon.innerHTML = "🔇"
    }

    if (volume_bar.value > 0 && volume_bar.value <= 0.33) {
        volume_icon.innerHTML = "🔈"
    }

    if (volume_bar.value > 0.33 && volume_bar.value <= 0.66) {
        volume_icon.innerHTML = "🔉"
    }

    if (volume_bar.value > 0.66 && volume_bar.value <= 1) {
        volume_icon.innerHTML = "🔊"
    }
},);



//           Function for music player controls
const Music_control = async (e) => {
    //Maximize & Minimize bar 
    const PlayerBar = document.querySelector('.song-player-bar');
    const container = document.querySelector('.container');
    const songs_toplay = document.querySelector('.songs-toplay');
    if (PlayerBar.style.display === "none" || PlayerBar.style.display === "") {
        PlayerBar.style.display = "flex";
        container.style.height = "calc(100vh - 27vh)"
        songs_toplay.style.height = '50%'

    }
    //Checks if already playling
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
        audio.src = "";
        audio = null;
    }
    if (progressInterval) {
        clearInterval(progressInterval);
    }
    //Declare all things involved
    let songPlaylist = e.target.closest('tr').getAttribute('data-playlist');
    let Song = e.target.closest('tr').getAttribute('data-index');
    let Songtr = e.target.closest('tr');
    const fetchSong = musicLibrary[songPlaylist][Song];
    let pictures = pictures_playlists[songPlaylist];
    const Heading_Song = fetchSong.title;
    const pic_show = pictures[0];
    const musicBar = document.querySelector('.song-player-bar');
    const musicHeadingOptional = musicBar.querySelector('.info-song-heading');
    const musicHeadingMain = musicBar.querySelector('.info-song-heading-playlist');
    const pictureShow = musicBar.querySelector('.img-in-metabar');
    const RangeControl = musicBar.querySelector('.range-control');
    const PrevBtn = musicBar.querySelector('#prev-btn');
    const NextBtn = musicBar.querySelector('#next-btn');
    const playbtn = musicBar.querySelector('#play-btn');
    const time_current = musicBar.querySelector('.current_time');
    const total_time = musicBar.querySelector('.total_time');
    // show related content 
    musicHeadingOptional.innerHTML = Heading_Song;
    musicHeadingMain.innerHTML = Heading_Song;
    pictureShow.src = pic_show;

    //Play song
    audio = new Audio();
    audio.src = fetchSong.file;
    audio.play()
    // show history played songs
    const recentlyShow_function = (playlist, index, song, pics) => {
        const song_ID = `${playlist}-${index}`
        let existingItem = recently_viewed.querySelector(`[data-song-id="${song_ID}"]`);
        if (!existingItem) {
            // Removes that none Heading
            const emptyMsg = recently_viewed.querySelector('h3');
            if (emptyMsg) emptyMsg.parentElement.remove();
            // Create it now
            const Name = song.title;
           const  Title = Name.length > 10
                ? Name.substring(0, 7) + "..."
                : Name;
            const newitem = document.createElement('li');
            newitem.setAttribute('data-song-id', `${song_ID}`);
            newitem.innerHTML = `<a id="${song.title}"  href="#"> <img src="${pics}" alt="">${Title}</a> <svg class="delte-btn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"></path>
                <path d="M10 11v6"></path>
                <path d="M14 11v6"></path>
                <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path>
                </svg>`
            recently_viewed.appendChild(newitem);
            while (recently_viewed.children.length > 10) {
                recently_viewed.removeChild(recently_viewed.firstElementChild);
            }
        }
    }
    recentlyShow_function(songPlaylist, Song, fetchSong, pictures);
    // Range control
    const newRangeControl = RangeControl.cloneNode(true);
    RangeControl.parentNode.replaceChild(newRangeControl, RangeControl);
    audio.addEventListener('loadedmetadata', () => {
        if (!isNaN(audio.duration) && isFinite(audio.duration)) {
            newRangeControl.max = audio.duration;
            const minutes = Math.floor(audio.duration / 60);
            const seconds = Math.floor(audio.duration % 60);

            total_time.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
        }
    }, { once: true });
    const startProgressInterval = () => {
        if (progressInterval) {
            clearInterval(progressInterval);
        }
        progressInterval = setInterval(() => {
            if (audio && !isNaN(audio.currentTime)) {
                newRangeControl.value = audio.currentTime;
                const mins = Math.floor(audio.currentTime / 60);
                const secs = Math.floor(audio.currentTime % 60);
                time_current.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
            }
        }, 500);
    };
    startProgressInterval();
    // play/pause functionality
    const newPlaybtn = playbtn.cloneNode(true);
    playbtn.parentNode.replaceChild(newPlaybtn, playbtn);
    newPlaybtn.textContent = '⏸';
    newPlaybtn.classList.add('playing');
    newPlaybtn.addEventListener('click', function () {
        if (this.classList.contains('playing')) {
            // Currently playing → Pause it
            this.textContent = '▶';
            this.classList.remove('playing');
            audio.pause();
        } else {
            // Currently paused → Play it
            this.textContent = '⏸';
            this.classList.add('playing');
            audio.play();
        }
    })
    // Range scroller
    newRangeControl.addEventListener('input', () => {
        audio.currentTime = newRangeControl.value;
    });
    //       Next/ previous song click function
    const newPrevBtn = PrevBtn.cloneNode(true);
    PrevBtn.parentNode.replaceChild(newPrevBtn, PrevBtn);
    const newNextBtn = NextBtn.cloneNode(true);
    NextBtn.parentNode.replaceChild(newNextBtn, NextBtn);
    // Previous
    newPrevBtn.addEventListener('click', function () {
        const PreviousElementSibling = Songtr.previousElementSibling;
        // checks
        if (!PreviousElementSibling || !PreviousElementSibling.classList.contains('song-row')) {
            ShowToast("This is the first track");
            return;
        }
        const PrevioussongPlaylist = PreviousElementSibling.getAttribute('data-playlist');
        const PreviousSongIndex = PreviousElementSibling.getAttribute('data-index');
        const PreviousSong = musicLibrary[PrevioussongPlaylist][PreviousSongIndex];
        if (PreviousSong) {
            audio.pause();
            audio.src = PreviousSong.file;
            audio.addEventListener('loadedmetadata', () => {
                newRangeControl.max = audio.duration;
            }, { once: true });
            audio.play();
            startProgressInterval();
            musicHeadingOptional.innerHTML = PreviousSong.title;
            musicHeadingMain.innerHTML = PreviousSong.title
            Songtr = PreviousElementSibling;
            newPlaybtn.textContent = '⏸';
            recentlyShow_function(PrevioussongPlaylist, PreviousSongIndex, PreviousSong, pictures_playlists[PrevioussongPlaylist][0]);


        }
        else {
            ShowToast("This is the first track")
        }
    })
    // Next
    newNextBtn.addEventListener('click', function () {
        const NextElementSibling = Songtr.nextElementSibling;
        // checks
        if (!NextElementSibling || !NextElementSibling.classList.contains('song-row')) {
            ShowToast("This is the final track");
            return;
        }
        const NextsongPlaylist = NextElementSibling.getAttribute('data-playlist');
        const NextSongIndex = NextElementSibling.getAttribute('data-index');
        const NextSong = musicLibrary[NextsongPlaylist][NextSongIndex];

        if (NextSong) {
            audio.pause();
            audio.src = NextSong.file;
            audio.addEventListener('loadedmetadata', () => {
                newRangeControl.max = audio.duration;
            }, { once: true });
            audio.play();
            startProgressInterval();
            musicHeadingOptional.innerHTML = NextSong.title;
            musicHeadingMain.innerHTML = NextSong.title
            Songtr = NextElementSibling;
            recentlyShow_function(NextsongPlaylist, NextSongIndex, NextSong, pictures_playlists[NextsongPlaylist][0]);
            newPlaybtn.textContent = '⏸';
        }
        else {
            ShowToast("This is the final track")
        }
    })



    // When ended this will run
    audio.addEventListener('ended', () => {
        clearInterval(progressInterval);
        newRangeControl.value = 0;
        // Check  repeat 
        if (repeatStatus === true) {
            // Repeat();
            audio.play();
            startProgressInterval();
            newPlaybtn.textContent = '⏸';
        }
        // play next song
        else {
            newNextBtn.click();

        }

    }, { once: true })
}


//        Playlist start button

PlayBtnPlaylist.addEventListener('click', function (e) {
    const info = document.querySelector('.songs-toplay');
    const playlist = info.querySelector('[data-playlist]');
    if (!playlist) return
    const playlistClass = playlist.dataset.playlist;
    const firstRow = info.querySelector(
        `tr[data-playlist="${playlistClass}"][data-index="0"]`
    );
    const fake_event = {
        target: firstRow
    }
    Music_control(fake_event);
});

//   Function for delete btn of recently viewed songs
recently_viewed.addEventListener('click', function (e) {
    if (!e.target.closest('.delte-btn')) return;
    const parentli = e.target.closest('li');
    parentli.remove();
    if (!recently_viewed.querySelector('li')) {
        recently_viewed.innerHTML = ' <li><h3 class="history-view-heading">No songs recently reviewed</h3></li>'
    }
});

//   Function of search play button

const Search_Song_play = (e) => {
    const row = e.target.closest('tr');
    const Playlist = row.dataset.playlist;
    const index = parseInt(row.dataset.index);
    const info = document.querySelector('.songs-toplay');
    setTimeout(() => {
        const ClickedSong = info.querySelector(
            `tr[data-playlist="${Playlist}"][data-index="${index}"]`
        );
        const fake_event = {
            target: ClickedSong
        }
        Music_control(fake_event);
    }, 500)
    songs_opened.style.display = 'flex';
    SearchResulBox.style.display = "none";
    SearchResulBox.innerHTML = '';
}

// searchbar Functonality

// get only values which are same
searchbar.onkeyup = function () {
    let result = [];
    let value_input = searchbar.value;
    if (value_input.length) {
        result = songNames.filter((keyword) => {
            return keyword.toLowerCase().includes(value_input.toLowerCase())
        })
        display_searchResult(result);
    }
    else {
        SearchResulBox.innerHTML = '';
        SearchResulBox.style.display = 'none';
        playlists.style.display = 'block';
    }
}
// display there values
const display_searchResult = (result) => {
    const content = result.map((list) => {
        const song = Songlookup[list];
        if (!song) return '';
        return `<tr data-index="${song.index}" data-song="${list}" 
    data-playlist="${song.playlist}" 
    data-pic="${song.pic}" class="rows-search-result" > <td class="tbody-image-search-Result"><img src="${song.pic}" width=40 height=40></td>  <td class="tbody-search-Result song_name_heding"> ${list} </td> <td class="tbody-search-Result"> <h4 class="headingsongName playlist_name_heding"> ${song.playlist}</h4> </td>  <td class="tbody-image-search-Result"><span onclick="Search_Song_play(event); document.querySelector('.${song.playlist}').click();" class="play-on-hover-search ${song.playlist} Playbutton_Play">
                            <svg viewBox="0 0 24 24" class="playbuttonsvg-song-search">
                                <polygon points="8,5 8,19 19,12" fill="white"/>

                            </svg>
                            </span>
                            </td>
                        </tr>`;
    })
    if (result.length > 0) {
        if (playlists.style.display !== 'none') {
            playlists.style.display = "none";
        }
        if (songs_opened.style.display !== 'none') {
            songs_opened.style.display = "none";
        }
        SearchResulBox.style.display = "block"
        SearchResulBox.innerHTML = `<table><th class="tbody-image-search-Result"></th><th class="thead-search-Result">Song</th><th class="thead-search-Result">Playlist</th></tr><tr> ${content.join('')} <th class="tbody-image-search-Result"></th></table>`
    }
    else {
        return;
    }
}

//      Keyboard Shortcuts

document.addEventListener('keydown', (e) => {
    const tag = e.target.tagName;

    // Ignore typing
    if (tag === 'INPUT' || tag === 'TEXTAREA') return;

    const playBtn = document.getElementById('play-btn');
    const nextBtn = document.getElementById('next-btn');
    const prevBtn = document.getElementById('prev-btn');
    const volumeBar = document.querySelector('.volume_bar');

    switch (e.code) {
        case 'Space': // Play / Pause
            e.preventDefault();
            playBtn.click();
            break;

        case 'ArrowRight': // Next track
            nextBtn.click();
            break;

        case 'ArrowLeft': // Previous track
            prevBtn.click();
            break;

        case 'ArrowUp': // Volume up
            e.preventDefault();
            if (volumeBar) {
                volumeBar.value = Math.min(1, parseFloat(volumeBar.value) + 0.05);
                volumeBar.dispatchEvent(new Event('input'));
            }
            break;

        case 'ArrowDown': // Volume down
            e.preventDefault();
            if (volumeBar) {
                volumeBar.value = Math.max(0, parseFloat(volumeBar.value) - 0.05);
                volumeBar.dispatchEvent(new Event('input'));
            }
            break;
        case 'KeyM':
            e.preventDefault();
            if (volumeBar) {
                volumeBar.value = 0;
                volumeBar.dispatchEvent(new Event('input'));
            }
            break;
    }
    if (e.ctrlKey && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (searchbar) searchbar.focus();

    }
});

// login fucntinality

function openLogin() {
    const loginModal = document.getElementById('loginModal');
    const heading = document.querySelector('.login-signup-heading');
    heading.innerHTML = 'Login';
    loginModal.classList.add('active');
}
function openSignup() {
    const loginModal = document.getElementById('loginModal');
    const heading = document.querySelector('.login-signup-heading');
    heading.innerHTML = 'Signup'
    loginModal.classList.add('active');
}
function closeLogin() {
    const loginModal = document.getElementById('loginModal');
    loginModal.classList.remove('active');
}
loginsubmit.addEventListener('click', function () {
    const name = document.querySelector('#name-get').value;
    const password = document.querySelector('#password').value;
    const email = document.querySelector('#email').value;
    if (!name.length || name.trim() == ''){
        ShowToast_login("Please enter name" );
        return;
    }
    if (name.length > 7) {
        ShowToast_login("Name would be only in 7 digits");
        return;
    }
    if (!password.length || password.trim() == '') {
        ShowToast_login(" Please enter  password");
        return;
    }
    if (!email.length || email.trim() == '') {
        ShowToast_login("Please enter email");
        return;
    }
        signupBtn.style.display = 'none';
        loginBtn.style.display = 'none';
        Nameloginli.classList.remove('hidden');
        Namelogin.innerHTML = `${name}`
        closeLogin();
    }

)

// Picture upload functionality
picture_upload.addEventListener('click', function () {
    const file_input = document.createElement('input');
    file_input.type = 'file';
    file_input.accept = 'image/*'
    file_input.style.display = 'none';
    file_input.addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            picture_upload.src = imageUrl;
            pictureUser.src = imageUrl;
        }
        document.body.removeChild(file_input);
    })
    document.body.appendChild(file_input)
    file_input.click();
});
// Event listeners
signupBtn.addEventListener('click', openSignup);
loginBtn.addEventListener('click', openLogin);
pictureUser.addEventListener('click', openLogin);
// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLogin();
});
