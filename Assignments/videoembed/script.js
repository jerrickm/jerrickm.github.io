
// Associative Arrays



const happySongs = {
    "Just Fine by Mary J. Blige": <iframe width="560" height="315" src="https://www.youtube.com/embed/G6ZjBPXSmnE?si=XfCvtscRLwMqhXtf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
    "Getting Jiggy Wit It by Will Smith": <iframe width="560" height="315" src="https://www.youtube.com/embed/G6ZjBPXSmnE?si=XfCvtscRLwMqhXtf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
    "Nobody Do It Better by Keith Murray": <iframe width="560" height="315" src="https://www.youtube.com/embed/CenFKzsBVmc?si=mORRHzW1qoY9ubqE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
    "Happy Song 4": "(embed song code)",
    "Happy Song 5": "(embed song code)"
};

const sadSongs = {
    "Sad Song 1": "(embed song code)",
    "Sad Song 2": "(embed song code)",
    "Sad Song 3": "(embed song code)",
    "Sad Song 4": "(embed song code)",
    "Sad Song 5": "(embed song code)"
};


// Mood Selection

function selectMood(mood) {

    const songList = document.getElementById("songList");
    const videoPlayer = document.getElementById("videoPlayer");

    // Clear previous songs
    songList.innerHTML = "";
    videoPlayer.style.display = "none";
    videoPlayer.innerHTML = "";

    let songs;

    if (mood === "happy") {
        songs = happySongs;
    } else {
        songs = sadSongs;
    }

    // Create buttons for songs
    for (let songName in songs) {

        const button = document.createElement("button");
        button.textContent = songName;

        button.onclick = function() {
            showVideo(songs[songName]);
        };

        songList.appendChild(button);
    }
}

// Show Selected Song


function showVideo(embedCode) {

    const videoPlayer = document.getElementById("videoPlayer");

    if (embedCode === "(embed song code)") {
        videoPlayer.innerHTML = "<p>You need to replace '(embed song code)' in script.js with a real YouTube embed iframe.</p>";
    } else {
        videoPlayer.innerHTML = embedCode;
    }

    videoPlayer.style.display = "block";
}
