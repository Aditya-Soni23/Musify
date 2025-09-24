let songs = [
    "all_songs/Hymn for the weekend.mp3",
    "all_songs/Pastlives.mp3",
    "all_songs/Forever young.mp3",
    "all_songs/One Direction - Night Changes (Lyrics).mp3",
    "all_songs/500 Miles.mp3",
    "all_songs/Aakash Gandhi - Liquid Time.mp3",
    "all_songs/Adele - Skyfall (Lyrics).mp3",
    "all_songs/Alan Walker - Faded (Lyrics).mp3",
    "all_songs/Alan Walker.mp3",
    "all_songs/All I Want is Touchdown.mp3",
    "all_songs/Another Love.mp3",
    "all_songs/Arambh hai prachand.mp3",
    "all_songs/Ariis - FUNK DO BOUNCE (SLOWED).mp3",
    "all_songs/AURORA - Runaway (Lyrics).mp3",
    "all_songs/AWOLNATION - Sail (Official Music Video).mp3",
    "all_songs/Bella ciao.mp3",
    "all_songs/Bloody Marry.mp3",
    "all_songs/BoyWithUke - Toxic (Official Lyric Video).mp3",
    "all_songs/Brooklyn.mp3",
    "all_songs/Chess Type Beat (tiktok version).mp3",
    "all_songs/CJ - WHOOPTY.mp3",
    "all_songs/Coffin Dance (Official Music Video HD).mp3",
    "all_songs/Conflate.mp3",
    "all_songs/Dior - PolozhenieПоложение.mp3",
    "all_songs/Doremon.mp3",
    "all_songs/Eeeyuh.mp3",
    "all_songs/Elley Duhé - Middle of the Night (Lyrics).mp3",
    "all_songs/EMIN feat. JONY - Камин.mp3",
    "all_songs/Enemy.mp3",
    "all_songs/EpicDipic Full Outro.mp3",
    "all_songs/etxrnall.mp3",
    "all_songs/Famy - Ava (Lyrics).mp3",
    "all_songs/Fat Rat.mp3",
    "all_songs/Fools Garden.mp3",
    "all_songs/Free Fire x Alok Vale Vale Music Video.mp3",
    "all_songs/Galaxy Brain meme.mp3",
    "all_songs/Ganda Gana trap mix.mp3",
    "all_songs/Get Set Fly Science.mp3",
    "all_songs/Golden hour.mp3",
    "all_songs/GRANNY'S HOUSE.mp3",
    "all_songs/Happy Nation.mp3",
    "all_songs/Harmane Baba.mp3",
    "all_songs/Hasi ban gaye.mp3",
    "all_songs/Heat waves.mp3",
    "all_songs/I PUT MY ARMOUR ON.mp3",
    "all_songs/ILLAHI NIGHT CHANGES.mp3",
    "all_songs/Imagine Dragons - Believer (Lyrics).mp3",
    "all_songs/Imagine Dragons - Bones (Lyrics).mp3",
    "all_songs/Indila - Tourner Dans Le Vide (Lyrics).mp3",
    "all_songs/Infinity.mp3",
    "all_songs/INTERWORLD - METAMORPHOSIS.mp3",
    "all_songs/Into Your Arms.mp3",
    "all_songs/Joker.mp3",
    "all_songs/Justin Bieber Despacito.mp3",
    "all_songs/K'NAAN - Wavin' Flag World Cup Song.mp3",
    "all_songs/KALEO - Way Down We Go.mp3",
    "all_songs/KALKI MASS BGM.mp3",
    "all_songs/Katy Perry - Roar (Lyrics).mp3",
    "all_songs/Kompa passion.mp3",
    "all_songs/Kung Fu Panda.mp3",
    "all_songs/Let me down slowly.mp3",
    "all_songs/Lil Nas X - Industry Baby.mp3",
    "all_songs/Lil Nas X - Old Town Road.mp3",
    "all_songs/Lindsey Stirling - Carol of the Bells.mp3",
    "all_songs/Loving you is a loosing game.mp3",
    "all_songs/MAHABHARAT TITLE FLUTE.mp3",
    "all_songs/Maine Royaan.mp3",
    "all_songs/Marshmello - Alone (Official Music Video).mp3",
    "all_songs/Masha Ultrafunk.mp3",
    "all_songs/Mockingbird - Eminem Lyrics full chorus.mp3",
    "all_songs/Money hiest free fire.mp3",
    "all_songs/NEJ' - Paro (Lyrics).mp3",
    "all_songs/Ninja hattori.mp3",
    "all_songs/NIVIRO - Flares House.mp3",
    "all_songs/Oeaaa Oeaaa.mp3",
    "all_songs/Ogryzek - AURA (Official Visualiser).mp3",
    "all_songs/Oliver.mp3",
    "all_songs/Panic! At The Disco - House of Memories.mp3",
    "all_songs/Papa meri jaan.mp3",
    "all_songs/Puffs.mp3",
    "all_songs/Rauf Faik Детство.mp3",
    "all_songs/Safari.mp3",
    "all_songs/Scatman John - Scatman.mp3",
    "all_songs/Somebody That I Used To Know.mp3",
    "all_songs/Somewhere only we know.mp3",
    "all_songs/Spirits.mp3",
    "all_songs/Summer Free fire.mp3",
    "all_songs/The Lost Soul Down X Lost Soul.mp3",
    "all_songs/Tides of Time.mp3",
    "all_songs/Traffic Racer OST - Main Theme.mp3",
    "all_songs/Trap Queen.mp3",
    "all_songs/Untitled #13 (Super Slowed).mp3",
    "all_songs/Valorant.mp3",
    "all_songs/VØJ, Narvent - Memory Reboot.mp3",
    "all_songs/Wakka Wakka.mp3",
    "all_songs/Warriyo - Mortals.mp3",
    "all_songs/Wolf and moon.mp3",
    "all_songs/Xcho - Ты и Я Tik Tok Remix.mp3",
    "all_songs/Zile Zile Mile Mile TikTok Remix Song.mp3"
];


// Elements
const audio = document.createElement('audio');
const playlistElement = document.getElementById('playlist');
const currentSongElement = document.getElementById('current-song');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const shuffleBtn = document.getElementById('shuffle');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');

let currentIndex = 0;
let isPlaying = false;
let isShuffling = false;

// Populate Playlist with drag/drop
function populatePlaylist() {
    playlistElement.innerHTML = '';
    songs.forEach((song, index) => {
        const li = document.createElement('li');
        li.textContent = song.split('/').pop();
        li.draggable = true;

        li.addEventListener('click', () => {
            currentIndex = index;
            loadSong();
            playSong();
        });

        li.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData("text/plain", index);
            li.style.opacity = '0.5';
        });

        li.addEventListener('dragend', () => li.style.opacity = '1');
        li.addEventListener('dragover', (e) => e.preventDefault());

        li.addEventListener('drop', (e) => {
            const draggedIndex = e.dataTransfer.getData("text");
            const targetIndex = index;
            [songs[draggedIndex], songs[targetIndex]] = [songs[targetIndex], songs[draggedIndex]];
            populatePlaylist();
        });

        playlistElement.appendChild(li);
    });
    updateActiveSong();
}

// Load & display song
function loadSong() {
    audio.src = songs[currentIndex];
    currentSongElement.textContent = songs[currentIndex].split('/').pop();
    updateActiveSong();
}

// Play/Pause
function playSong() {
    audio.play();
    isPlaying = true;
    playBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
}

function pauseSong() {
    audio.pause();
    isPlaying = false;
    playBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
}

playBtn.addEventListener('click', () => isPlaying ? pauseSong() : playSong());

// Prev / Next
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + songs.length) % songs.length;
    loadSong();
    playSong();
});

nextBtn.addEventListener('click', () => {
    if (isShuffling) currentIndex = Math.floor(Math.random() * songs.length);
    else currentIndex = (currentIndex + 1) % songs.length;
    loadSong();
    playSong();
});

// Shuffle
shuffleBtn.addEventListener('click', () => {
    isShuffling = !isShuffling;
    shuffleBtn.style.background = isShuffling ? '#1fff54' : '#1db954';

    if (isShuffling) {
        for (let i = songs.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [songs[i], songs[j]] = [songs[j], songs[i]];
        }
        populatePlaylist();
    }
});

// Audio Progress
audio.addEventListener('timeupdate', () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progress.style.width = percent + '%';

    let curMin = Math.floor(audio.currentTime / 60);
    let curSec = Math.floor(audio.currentTime % 60);
    let durMin = Math.floor(audio.duration / 60);
    let durSec = Math.floor(audio.duration % 60);

    if (curSec < 10) curSec = '0' + curSec;
    if (durSec < 10) durSec = '0' + durSec;
    currentTimeEl.textContent = `${curMin}:${curSec}`;
    durationEl.textContent = `${durMin}:${durSec}`;
});

// Seek
progressContainer.addEventListener('click', (e) => {
    const width = progressContainer.clientWidth;
    const clickX = e.offsetX;
    audio.currentTime = (clickX / width) * audio.duration;
});

// Auto next
audio.addEventListener('ended', () => {
    if (isShuffling) {
        currentIndex = Math.floor(Math.random() * songs.length);
    } else {
        currentIndex = (currentIndex + 1) % songs.length;
    }
    loadSong();
    playSong();
});


function updateActiveSong() {
    document.querySelectorAll('#playlist li').forEach((li, idx) => {
        li.classList.toggle('active', idx === currentIndex);
    });
}
const searchInput = document.getElementById('search');

searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();
    document.querySelectorAll('#playlist li').forEach(li => {
        li.style.display = li.textContent.toLowerCase().includes(query) ? '' : 'none';
    });
});

// Initialize
document.body.appendChild(audio);
populatePlaylist();
loadSong();
