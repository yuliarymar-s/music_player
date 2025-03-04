let sidebar_btn = document.querySelector('.sidebar_btn');
let sidebar_icon = document.querySelector('.sidebar_btn i');
let sidebar = document.querySelector('aside');
let logo = document.querySelector('.logo');
let mini_logo = document.querySelector('.small_logo');
let music_menu_h2 = document.querySelectorAll('.music_menu h2');
let music_menu_p = document.querySelectorAll('.music_menu ul li a p');
let music_menu_li = document.querySelectorAll('.music_menu ul li');
let userMenuBtn = document.querySelector('.user_login_wrapper');
let userDropdown = document.querySelector('.user_wrapper_dropdown');

sidebar_btn.addEventListener('click', () => {
    sidebar.classList.toggle('sidebar_hide');
    sidebar_icon.classList.toggle('toggle_sidebar_btn');
    logo.classList.toggle('hide_element');
    mini_logo.classList.toggle('show_element');
    music_menu_h2.forEach(h2 => h2.classList.toggle('hide_element'));
    music_menu_li.forEach(li => li.classList.toggle('menu_gap'));
    music_menu_p.forEach(p => p.classList.toggle('hide_element'));
});

userMenuBtn.addEventListener('click', () => {
    userDropdown.classList.toggle('show_user_dropdown');
});

const tracks = {
    "top-picks": [
        { title: "Volevo essere un duro", artist: "Damiano David (Italy)", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
        { title: "Espresso Macchiato", artist: "Karmen (Estonia)", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
        { title: "Lighter", artist: "AnnenMayKantereit (Germany)", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
        { title: "Ich komme", artist: "Finnish Artist (Finland)", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
        { title: "Esa diva", artist: "Spanish Artist (Spain)", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
        { title: "Asteromata", artist: "Greek Artist (Greece)", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
        { title: "Gaja", artist: "Polish Artist (Poland)", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
        { title: "Fleur de Nuit", artist: "French Artist (France)", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
        { title: "Nordic Sky", artist: "Swedish Artist (Sweden)", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
        { title: "Echoes", artist: "Dutch Artist (Netherlands)", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" }
    ],
    "trending": [
        { title: "Rhythm of Lisbon", artist: "Portuguese Artist (Portugal)", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
        { title: "Berlin Nights", artist: "German Artist (Germany)", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
        { title: "Celtic Fire", artist: "Irish Artist (Ireland)", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
        { title: "Soleil", artist: "French Artist (France)", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },
        { title: "Vento", artist: "Italian Artist (Italy)", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
        { title: "Horizon", artist: "Norwegian Artist (Norway)", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },
        { title: "Luna", artist: "Spanish Artist (Spain)", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3" },
        { title: "Tides", artist: "Danish Artist (Denmark)", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
        { title: "Pulse", artist: "Belgian Artist (Belgium)", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
        { title: "Starry Fields", artist: "Ukrainian Artist (Ukraine)", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" }
    ],
    "new-release": [
        { title: "Neon Waves", artist: "Austrian Artist (Austria)", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
        { title: "Golden Hour", artist: "Swiss Artist (Switzerland)", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
        { title: "Dreamscape", artist: "Czech Artist (Czech Republic)", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },
        { title: "Fading Lights", artist: "Hungarian Artist (Hungary)", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
        { title: "Midnight Run", artist: "Romanian Artist (Romania)", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },
        { title: "Aurora", artist: "Icelandic Artist (Iceland)", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
        { title: "Serenity", artist: "Latvian Artist (Latvia)", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },
        { title: "Horizonte", artist: "Portuguese Artist (Portugal)", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
        { title: "Vibrant", artist: "Slovak Artist (Slovakia)", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },
        { title: "Echo of Time", artist: "Bulgarian Artist (Bulgaria)", src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" }
    ]
};

let playlists = [];
let currentTrackIndex = 0;
let currentCategory = "top-picks";
let isPlaying = false;
let isShuffle = false;
let isRepeat = false;

const audio = new Audio();
const songList = document.getElementById("song-list");
const playPauseBtn = document.getElementById("play-pause-btn");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const stopBtn = document.getElementById("stop-btn");
const shuffleBtn = document.getElementById("shuffle-btn");
const repeatBtn = document.getElementById("repeat-btn");
const progressBar = document.getElementById("progress-bar");
const volumeSlider = document.getElementById("volume-slider");
const currentTime = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const trackTitle = document.getElementById("track-title");
const trackArtist = document.getElementById("track-artist");
const coverArt = document.querySelector(".cover-art");
const searchInput = document.querySelector(".search_box input");
const loadingIndicator = document.getElementById("loading-indicator");
const tabs = document.querySelectorAll(".songs_tabs h2");
const playlistModal = document.getElementById("playlist-modal");
const createPlaylistBtn = document.querySelector(".create-playlist-btn");
const closeModal = document.querySelector(".close-modal");
const savePlaylist = document.getElementById("save-playlist");
const cancelPlaylist = document.getElementById("cancel-playlist");
const playlistNameInput = document.getElementById("playlist-name");

function loadTracks(category = currentCategory) {
    songList.innerHTML = "";
    let trackList = category in tracks ? tracks[category] : playlists.find(pl => pl.name === category)?.tracks || [];
    trackList.forEach((track, index) => {
        const songCol = document.createElement("div");
        songCol.classList.add("song_col");
        songCol.innerHTML = `
            <div class="song_info">
                <span class="track-number">${String(index + 1).padStart(2, '0')}</span>
                <div class="song_box">
                    <div class="song_det">
                        <h2>${track.title}</h2>
                        <p>${track.artist}</p>
                    </div>
                </div>
            </div>
            <div class="song_icon_time">
                <i class="ri-heart-2-line" data-index="${index}"></i>
                <p>04:23</p>
                <div class="song_option">
                    <i class="ri-more-2-fill"></i>
                    <div class="song_option_dropdown">
                        <div class="song_option_box add-to-playlist" data-index="${index}">
                            <span class="icon add_pl_option_icon"></span><h3>Add to Playlist</h3>
                        </div>
                        <div class="song_option_box"><span class="icon fav_option_icon"></span><h3>Favourites</h3></div>
                        <div class="song_option_box"><span class="icon download_option_icon"></span><h3>Download</h3></div>
                        <div class="song_option_box"><span class="icon share_option_icon"></span><h3>Share</h3></div>
                    </div>
                </div>
            </div>
        `;
        songCol.addEventListener("click", () => playTrack(index)); // Додаємо клік на весь рядок
        songList.appendChild(songCol);
    });

    document.querySelectorAll(".add-to-playlist").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation(); // Запобігаємо запуску playTrack при кліку на "Add to Playlist"
            addToPlaylist(parseInt(btn.dataset.index));
        });
    });
}

function playTrack(index) {
    currentTrackIndex = index;
    const trackList = currentCategory in tracks ? tracks[currentCategory] : playlists.find(pl => pl.name === currentCategory)?.tracks || [];
    const track = trackList[currentTrackIndex];
    audio.src = track.src;
    loadingIndicator.classList.add("active");
    audio.play().then(() => {
        isPlaying = true;
        updatePlayerUI(track);
        playPauseBtn.innerHTML = '<i class="ri-pause-fill"></i>';
        highlightPlayingTrack();
        loadingIndicator.classList.remove("active");
    }).catch(err => {
        console.log("Error playing audio:", err);
        loadingIndicator.classList.remove("active");
    });
}

function updatePlayerUI(track) {
    trackTitle.textContent = track.title;
    trackArtist.textContent = track.artist;
    coverArt.style.display = "none"; // Приховуємо обкладинку в панелі відтворення
}

function highlightPlayingTrack() {
    const songs = document.querySelectorAll(".song_col");
    songs.forEach((song, idx) => {
        song.classList.toggle("playing", idx === currentTrackIndex);
    });
}

playPauseBtn.addEventListener("click", () => {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
        playPauseBtn.innerHTML = '<i class="ri-play-fill"></i>';
    } else {
        audio.play();
        isPlaying = true;
        playPauseBtn.innerHTML = '<i class="ri-pause-fill"></i>';
    }
});

nextBtn.addEventListener("click", () => {
    const trackList = currentCategory in tracks ? tracks[currentCategory] : playlists.find(pl => pl.name === currentCategory)?.tracks || [];
    currentTrackIndex = isShuffle 
        ? Math.floor(Math.random() * trackList.length) 
        : (currentTrackIndex + 1) % trackList.length;
    playTrack(currentTrackIndex);
});

prevBtn.addEventListener("click", () => {
    const trackList = currentCategory in tracks ? tracks[currentCategory] : playlists.find(pl => pl.name === currentCategory)?.tracks || [];
    currentTrackIndex = (currentTrackIndex - 1 + trackList.length) % trackList.length;
    playTrack(currentTrackIndex);
});

stopBtn.addEventListener("click", () => {
    audio.pause();
    audio.currentTime = 0;
    isPlaying = false;
    playPauseBtn.innerHTML = '<i class="ri-play-fill"></i>';
});

shuffleBtn.addEventListener("click", () => {
    isShuffle = !isShuffle;
    shuffleBtn.classList.toggle("active", isShuffle);
});

repeatBtn.addEventListener("click", () => {
    isRepeat = !isRepeat;
    repeatBtn.classList.toggle("active", isRepeat);
});

audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress || 0;
    currentTime.textContent = formatTime(audio.currentTime);
    durationEl.textContent = formatTime(audio.duration);
});

progressBar.addEventListener("input", () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value / 100;
});

audio.addEventListener("ended", () => {
    if (isRepeat) {
        playTrack(currentTrackIndex);
    } else {
        nextBtn.click();
    }
});

function formatTime(seconds) {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? "0" + sec : sec}`;
}

searchInput.addEventListener("input", () => {
    const query = searchInput.value.toLowerCase();
    const songs = document.querySelectorAll(".song_col");
    songs.forEach((song, index) => {
        const trackList = currentCategory in tracks ? tracks[currentCategory] : playlists.find(pl => pl.name === currentCategory)?.tracks || [];
        const title = trackList[index].title.toLowerCase();
        const artist = trackList[index].artist.toLowerCase();
        song.style.display = (title.includes(query) || artist.includes(query)) ? "flex" : "none";
    });
});

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active_song_list"));
        tab.classList.add("active_song_list");
        currentCategory = tab.dataset.tab;
        loadTracks(currentCategory);
    });
});

createPlaylistBtn.addEventListener("click", () => {
    playlistModal.classList.add("active");
});

closeModal.addEventListener("click", () => {
    playlistModal.classList.remove("active");
    playlistNameInput.value = "";
});

cancelPlaylist.addEventListener("click", () => {
    playlistModal.classList.remove("active");
    playlistNameInput.value = "";
});

savePlaylist.addEventListener("click", () => {
    const name = playlistNameInput.value.trim();
    if (name) {
        playlists.push({ name, tracks: [] });
        playlistModal.classList.remove("active");
        playlistNameInput.value = "";
    }
});

function addToPlaylist(index) {
    if (playlists.length === 0) {
        alert("Create a playlist first!");
        playlistModal.classList.add("active");
        return;
    }
    const trackList = currentCategory in tracks ? tracks[currentCategory] : playlists.find(pl => pl.name === currentCategory)?.tracks || [];
    const track = trackList[index];
    playlists[playlists.length - 1].tracks.push(track);
}

loadTracks();
audio.volume = 0.5;

const aboutUsLink = document.getElementById('about-us-link');
const aboutUsModal = document.getElementById('about-us-modal');
const closeAboutUs = document.getElementById('close-about-us');

aboutUsLink.addEventListener('click', (e) => {
    e.preventDefault();
    aboutUsModal.classList.add('active');
});

closeAboutUs.addEventListener('click', () => {
    aboutUsModal.classList.remove('active');
});