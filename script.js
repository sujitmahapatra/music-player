const music = document.getElementById('music');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const playlist = document.getElementById('playlist');

// Function to fetch songs from the Free Music Archive API
async function fetchSongs() {
    try {
        const response = await fetch('https://freemusicarchive.org/featured.json');
        const data = await response.json();
        
        // Loop through the songs and create playlist items
        data.aTracks.forEach((track) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${track.track_id} - ${track.track_title}`;
            listItem.addEventListener('click', () => {
                playSong(track);
            });
            playlist.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching songs:', error);
    }
}

// Function to play a selected song
function playSong(track) {
    music.src = track.track_url;
    title.textContent = track.track_title;
    artist.textContent = track.artist_name;
    music.play();
}

fetchSongs();

