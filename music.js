// Music Player Script - For Malaysian Spotify users

document.addEventListener('DOMContentLoaded', () => {
    // Personality Colors and Their Music Preferences
    const personalityMusic = {
        // BLACK (Independent & Mysterious)
        "Black": [
            {
                title: "Bad Guy",
                artist: "Billie Eilish",
                spotifyId: "2Fxmhks0bxGSBdJ92vM42m",
                description: "Dark, brooding pop with mysterious undertones."
            },
            {
                title: "When The Party's Over",
                artist: "Billie Eilish",
                spotifyId: "43zdsphuZLzwA9k4DJhU0I",
                description: "Haunting, emotional ballad for deep thinkers."
            },
            {
                title: "Believer",
                artist: "Imagine Dragons",
                spotifyId: "0pqnGHJpmpxLKifKRmU6WP",
                description: "Dark, powerful anthem with introspective lyrics."
            },
            {
                title: "Heathens",
                artist: "Twenty One Pilots",
                spotifyId: "6i0V12jOa3mr6uu4WYhUBr",
                description: "Dark, brooding alternative with mysterious undertones."
            },
            {
                title: "Somebody That I Used To Know",
                artist: "Gotye ft. Kimbra",
                spotifyId: "1qDrWA6lyx8cLECdZE7TV7",
                description: "Introspective indie pop with emotional depth."
            },
            {
                title: "Demons",
                artist: "Imagine Dragons",
                spotifyId: "5qaEfEh1AtSdrdrByCP7qR",
                description: "Haunting rock anthem exploring inner darkness."
            },
        ],

        // WHITE (Peaceful & Pure)
        "White": [
            
            {
                title: "Exile",
                artist: "Taylor Swift ft. Bon Iver",
                spotifyId: "4pvb0WLRcMtbPGmtejJJ6y",
                description: "Peaceful duet with harmonious, calming qualities."
            },
            {
                title: "Cardigan",
                artist: "Taylor Swift",
                spotifyId: "4R2kfaDFhslZEMJqAFNpdd",
                description: "Gentle, pure folk pop with emotional resonance."
            },
            {
                title: "Breathe Me",
                artist: "Sia",
                spotifyId: "1nX9KhK3Fff27SnrIor2Yb",
                description: "Vulnerable, pure ballad with emotional transparency."
            },


        ],

        // RED (Passionate & Bold)
        "Red": [
            {
                title: "Blinding Lights",
                artist: "The Weeknd",
                spotifyId: "0VjIjW4GlUZAMYd2vXMi3b",
                description: "High-energy, bold pop with passionate intensity."
            },
            {
                title: "Don't Stop Me Now",
                artist: "Queen",
                spotifyId: "7hQJA50XrCWABAu5v6QZ4i",
                description: "Energetic classic rock fueled by bold confidence."
            },
            {
                title: "Uptown Funk",
                artist: "Mark Ronson ft. Bruno Mars",
                spotifyId: "32OlwWuMpZ6b0aN2RZOeMS",
                description: "Infectious funk with bold attitude and flair."
            },
            {
                title: "We Will Rock You",
                artist: "Queen",
                spotifyId: "54flyrjcdnQdco7300avMJ",
                description: "Bold, iconic rock anthem with unstoppable energy."
            },
            {
                title: "Seven Nation Army",
                artist: "The White Stripes",
                spotifyId: "7i6r9KotUPQg3ozKKgEPIN",
                description: "Driving rock with bold, passionate intensity."
            },
            {
                title: "Roar",
                artist: "Katy Perry",
                spotifyId: "6F5c58TMEs1byxUstkzVeM",
                description: "Energetic pop anthem with bold confidence."
            },
        ],

        // BLUE (Loyal & Intelligent)
        "Blue": [
            {
                title: "Bohemian Rhapsody",
                artist: "Queen",
                spotifyId: "3z8h0TU7ReDPLIbEnYhWZb",
                description: "Complex composition that rewards analytical listening."
            },
            {
                title: "Clocks",
                artist: "Coldplay",
                spotifyId: "0BCPKOYdS2jbQ8iyB56Zns",
                description: "Thoughtful alternative rock with intellectual depth."
            },
            {
                title: "Fix You",
                artist: "Coldplay",
                spotifyId: "7LVHVU3tWfcxj5aiPFEW4Q",
                description: "Thoughtful, loyal anthem with intellectual depth."
            },
            {
                title: "Stairway to Heaven",
                artist: "Led Zeppelin",
                spotifyId: "5CQ30WqJwcep0pYcV4AMNc",
                description: "Complex rock epic with layered musical sophistication."
            },

        ],

        // YELLOW (Optimistic & Cheerful)
        "Yellow": [
            {
                title: "Happy",
                artist: "Pharrell Williams",
                spotifyId: "60nZcImufyMA1MKQY3dcCH",
                description: "Pure joy in musical form - the ultimate feel-good anthem."
            },
            {
                title: "I Gotta Feeling",
                artist: "Black Eyed Peas",
                spotifyId: "1nInOsHbtotAmEOQhtvnzP",
                description: "Upbeat party anthem with optimistic energy."
            },
            {
                title: "Can't Stop the Feeling!",
                artist: "Justin Timberlake",
                spotifyId: "1WkMMavIMc4JZ8cfMmxHkI",
                description: "Bright, positive pop anthem for cheerful spirits."
            },
            {
                title: "Shake It Off",
                artist: "Taylor Swift",
                spotifyId: "0cqRj7pUJDkTCEsJkx8snD",
                description: "Playful, optimistic pop for shaking off negativity."
            },
        ],

        // GREEN (Balanced & Practical)
        "Green": [
            {
                title: "Here Comes the Sun",
                artist: "The Beatles",
                spotifyId: "6dGnYIeXmHdcikdzNNDMm2",
                description: "Natural, balanced classic celebrating steady optimism."
            },
            {
                title: "Landslide",
                artist: "Fleetwood Mac",
                spotifyId: "5ihS6UUlyQAfmp48eSkxuQ",
                description: "Grounded folk rock about life's enduring cycles."
            },
        ],

        // PURPLE (Creative & Unique)
        "Purple": [
            {
                title: "Space Oddity",
                artist: "David Bowie",
                spotifyId: "72Z17vmmeQKAg8bptWvpVG",
                description: "Imaginative, boundary-pushing artistic expression."
            },
            {
                title: "Knights of Cydonia",
                artist: "Muse",
                spotifyId: "7ouMYWpwJ422jRcDASZB7P",
                description: "Creative progressive rock with unique composition."
            },
            {
                title: "Runaway",
                artist: "Aurora",
                spotifyId: "1v1oIWf2Xgh54kIWuKsDf6",
                description: "Ethereal, distinctive pop with artistic sensibility."
            },
            {
                title: "Paranoid Android",
                artist: "Radiohead",
                spotifyId: "6LgJvl0Xdtc73RJ1mmpotq",
                description: "Experimental rock with creative, unconventional structure."
            },
            {
                title: "Across The Universe",
                artist: "The Beatles",
                spotifyId: "4h8VwCb1MTGoLKueQ1WgbD",
                description: "Imaginative, innovative songwriting with artistic vision."
            },
        ],

        // CHOCOLATE (Grounded & Practical)
        "Chocolate": [
            {
                title: "Stand By Me",
                artist: "Ben E. King",
                spotifyId: "3SdTKo2uVsxFblQjpScoHy",
                description: "Timeless classic about loyalty and dependability."
            },
            {
                title: "Lean On Me",
                artist: "Bill Withers",
                spotifyId: "3M8FzayQWtkvOhqMn2V4T2",
                description: "Traditional soul celebrating community and support."
            },
            {
                title: "Bridge Over Troubled Water",
                artist: "Simon & Garfunkel",
                spotifyId: "6l8EbYRtQMgKOyc1gcDHF9",
                description: "Enduring classic about dependability and friendship."
            },
            {
                title: "Sittin' On The Dock Of The Bay",
                artist: "Otis Redding",
                spotifyId: "3zBhihYUHBmGd2bcQIobrF",
                description: "Soulful classic with timeless, grounded quality."
            },
            
        ],

        // PINK (Kind & Loving)
        "Pink": [
            {
                title: "All of Me",
                artist: "John Legend",
                spotifyId: "3U4isOIWM3VvDubwSI3y7a",
                description: "Romantic piano ballad celebrating unconditional love."
            },
            {
                title: "Perfect",
                artist: "Ed Sheeran",
                spotifyId: "0tgVpDi06FyKpA1z0VMD4v",
                description: "Tender love ballad celebrating perfect moments."
            },
            {
                title: "Thinking Out Loud",
                artist: "Ed Sheeran",
                spotifyId: "1Slwb6dOYkBlWal1PGtnNg",
                description: "Romantic soul celebrating enduring, nurturing love."
            },
            {
                title: "Your Song",
                artist: "Elton John",
                spotifyId: "38zsOOcu31XbbYj9BIPUF1",
                description: "Classic, heartfelt ballad expressing sincere affection."
            },
            {
                title: "Someone Like You",
                artist: "Adele",
                spotifyId: "4kflIGfjdZJW4ot2ioixTB",
                description: "Emotional ballad with tender, caring sentiment."
            },
        
        ],

        // GREY (Calm & Logical)
        "Grey": [
            {
                title: "Fix You",
                artist: "Coldplay",
                spotifyId: "7LVHVU3tWfcxj5aiPFEW4Q",
                description: "Balanced, measured emotion with logical progression."
            },
            {
                title: "The Sound of Silence",
                artist: "Simon & Garfunkel",
                spotifyId: "3YRCqOhFifThpSRFJ1VWFM",
                description: "Calm, analytical folk with thoughtful observation."
            },
            {
                title: "Trouble",
                artist: "Coldplay",
                spotifyId: "0R8P9KfGJCDULmlEoBagcO",
                description: "Measured, contemplative rock with balanced emotion."
            },
            {
                title: "Mad World",
                artist: "Gary Jules",
                spotifyId: "3JOVTQ5h8HGFnDdp4VT3MP",
                description: "Minimalist cover with analytical, observational lyrics."
            },

        ]
    };

    // Function to initialize music player
    function initMusicPlayer() {
        // Set up color tabs
        const colorTabs = document.querySelectorAll('.color-tab');
        const personalityTabs = document.querySelectorAll('.personality-tab');
        
        if (colorTabs.length > 0) {
            // Set default active tab
            if (!document.querySelector('.color-tab.active')) {
                colorTabs[0].classList.add('active');
                const firstTabColor = colorTabs[0].getAttribute('data-color');
                document.getElementById(`${firstTabColor}-music`).classList.add('active');
                
                // Load songs for the first tab
                loadSongsForColor(firstTabColor);
            }
            
            // Add click event to tabs
            colorTabs.forEach(tab => {
                tab.addEventListener('click', () => {
                    // Remove active class from all tabs
                    colorTabs.forEach(t => t.classList.remove('active'));
                    personalityTabs.forEach(t => t.classList.remove('active'));
                    
                    // Add active class to clicked tab
                    tab.classList.add('active');
                    
                    // Show corresponding content
                    const color = tab.getAttribute('data-color');
                    document.getElementById(`${color}-music`).classList.add('active');
                    
                    // Load songs for this color
                    loadSongsForColor(color);
                });
            });
        }
    }
    
    // Function to load songs for a specific color
    function loadSongsForColor(color) {
        const container = document.querySelector(`#${color}-music .song-list`);
        if (!container) return;
        
        // Clear existing songs
        container.innerHTML = '';
        
        // Get songs for this color
        const songs = personalityMusic[color] || [];
        
        // Create song cards
        songs.forEach(song => {
            const songCard = document.createElement('div');
            songCard.className = 'song-card';
            songCard.innerHTML = `
                <div class="song-info">
                    <h3>${song.title}</h3>
                    <p>${song.artist}</p>
                </div>
                <button class="play-btn" data-spotify-id="${song.spotifyId}">
                    <i class="fas fa-play"></i>
                </button>
            `;
            container.appendChild(songCard);
        });
        
        // Add event listeners to play buttons
        const playButtons = container.querySelectorAll('.play-btn');
        playButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const spotifyId = this.getAttribute('data-spotify-id');
                playSong(spotifyId);
                
                // Update play button states
                playButtons.forEach(b => b.classList.remove('playing'));
                this.classList.add('playing');
                
                // Update currently playing info
                const songInfo = this.closest('.song-card').querySelector('.song-info');
                const songTitle = songInfo.querySelector('h3').textContent;
                const songArtist = songInfo.querySelector('p').textContent;
                
                updateNowPlaying(songTitle, songArtist, color);
            });
        });
    }
    
    // Function to play a song
    function playSong(spotifyId) {
        // Update Spotify player
        const spotifyPlayer = document.getElementById('spotify-player-container');
        if (spotifyPlayer) {
            spotifyPlayer.innerHTML = `
                <iframe src="https://open.spotify.com/embed/track/${spotifyId}" 
                    width="100%" height="80" frameborder="0" allowtransparency="true" 
                    allow="encrypted-media"></iframe>
            `;
        }
        
        // Update mini player if it exists
        const miniPlayer = document.getElementById('mini-player-container');
        if (miniPlayer) {
            miniPlayer.innerHTML = `
                <iframe src="https://open.spotify.com/embed/track/${spotifyId}" 
                    width="100%" height="80" frameborder="0" allowtransparency="true" 
                    allow="encrypted-media"></iframe>
            `;
        }
    }
    
    // Function to update now playing information
    function updateNowPlaying(title, artist, color) {
        const nowPlayingTitle = document.getElementById('current-song-title');
        const nowPlayingArtist = document.getElementById('current-song-artist');
        const nowPlayingColor = document.getElementById('current-song-color');
        
        if (nowPlayingTitle) nowPlayingTitle.textContent = title;
        if (nowPlayingArtist) nowPlayingArtist.textContent = artist;
        if (nowPlayingColor) nowPlayingColor.textContent = color;
        
        // Update mini player info if it exists
        const miniTitle = document.querySelector('.mini-title');
        const miniArtist = document.querySelector('.mini-artist');
        
        if (miniTitle) miniTitle.textContent = title;
        if (miniArtist) miniArtist.textContent = artist;
    }
    
    // Handle play/pause button in mini player
    const miniPlayPause = document.getElementById('mini-play-pause');
    if (miniPlayPause) {
        miniPlayPause.addEventListener('click', function() {
            const iframe = document.querySelector('#mini-player-container iframe');
            if (iframe) {
                // This is a simplified toggle - in real implementation, 
                // you'd need to use Spotify Web Playback SDK for proper control
                if (this.querySelector('i').classList.contains('fa-play')) {
                    this.querySelector('i').classList.remove('fa-play');
                    this.querySelector('i').classList.add('fa-pause');
                } else {
                    this.querySelector('i').classList.remove('fa-pause');
                    this.querySelector('i').classList.add('fa-play');
                }
            }
        });
    }
    
    // Initialize the music player
    initMusicPlayer();
});