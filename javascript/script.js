function loadSearchContent() {
    const searchcontent = document.getElementById("searchcontent");

    fetch('search.html')
        .then(response => response.text())
        .then(content => {
            searchcontent.innerHTML = content;
            history.pushState({ page: 'search' }, '', '/search');
        })
        .catch(error => console.log('Error fetching file:', error));
}


document.getElementById("Menubtn").addEventListener("click", function() {
    document.querySelector(".left").classList.toggle("hidden");
    document.querySelector(".right").classList.toggle("full-width");
    document.querySelector(".top-R").classList.toggle("top-R-B")
});

document.getElementById("Modetheme").addEventListener("click", ()=> {

    const themeText = document.querySelector("#Modetheme h5");
    const themeImage = document.querySelector("#Modetheme img");

    const isLightMode = themeImage.src.includes("light.svg");

    if (isLightMode) {
        themeImage.src = "../Image/darkmode.svg";
        themeText.innerHTML = "Dark Mode";
    } else {
        themeImage.src = "../Image/light.svg";
        themeText.innerHTML = "Light Mode";
    }

    

    document.querySelector(".left").classList.toggle("left-L")
    document.querySelector(".top-R").classList.toggle("top-R-L")
    document.querySelector(".right").classList.toggle("right-L")
    const allbox = document.querySelectorAll(".card-box");
    allbox.forEach(element => element.classList.toggle("card-box-L"));
    const elements = document.querySelectorAll(".invert");
    elements.forEach(element => element.classList.toggle("invert-L"));
    const textC = document.querySelectorAll(".colorWhite");
    textC.forEach(element => element.classList.toggle("colorWhite-L"));
    const cardnBg = document.querySelectorAll(".card-n");
    cardnBg.forEach(element => element.classList.toggle("card-n-L"));
    document.querySelector(".login-content").classList.toggle("login-content-L")
    // document.querySelector(".Hastg h1").classList.toggle("Hastg-L")
    const tagBg = document.querySelectorAll(".hastg");
    tagBg.forEach(element => element.classList.toggle("hastg-L"));
    const tagBgU = document.querySelectorAll(".Loadsection");
    tagBgU.forEach(element => element.classList.toggle("Loadsection-L"));
    
    
})

const passwordInput = document.getElementById("password");
const eyeIcon = document.getElementById("eyeclose");

eyeIcon.addEventListener("click", function passecure() {
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.src = "Image/eye unvis.svg";
    } else {
        passwordInput.type = "password";
        eyeIcon.src = "Image/eye visible.svg";
    }
    // passwordInput.preventDefault();
});


function loadSearch() {
    const searchdetail = document.getElementById("contentA");
    // searchdetail.innerHTML = ""
    fetch('podcastEP.html')
        .then(response => response.text())
        .then(content => {
            searchdetail.innerHTML = content;
        })
        .catch(error => console.log('Error fetching file:', error));
}


function loaddash() {
    const searchdetaila = document.getElementById("contentA");
    // searchdetaila.innerHTML = ""
    fetch('dash.html')
        .then(response => response.text())
        .then(content => {
            searchdetaila.innerHTML = content;
        })
        .catch(error => console.log('Error fetching file:', error));
}

function loads() {
    const searchdetailb = document.getElementById("contentA");

    fetch('search.html')
        .then(response => response.text())
        .then(content => {
            searchdetailb.innerHTML = content;
        })
        .catch(error => console.log('Error fetching file:', error));
}

function uploads() {
    const searchdetailc = document.getElementById("contentA");

    fetch('upload.html')
        .then(response => response.text())
        .then(content => {
            searchdetailc.innerHTML = content;
        })
        .catch(error => console.log('Error fetching file:', error));
}

function showContent(option) {
    // var contentDiv = document.getElementById('contentA');
    switch (option) {
        case 'option1':
            loads();
            break;
        case 'option2':
            loadSearch();
            break;
        case 'option3':
            uploads();
            break;
        default:
            loaddash();
            break;
    }
}

const audioPlayer = document.getElementById('pod');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const volumeSlider = document.getElementById('volumeSlider');
const progressBar = document.getElementById('progressBar');
const elapsedTime = document.getElementById('elapsedTime');
const totalTime = document.getElementById('totalTime');

let currentSongIndex = 0;
let isPlaying = false;
const songs = [];




document.querySelector(".playbtn").addEventListener("click", function () {
    fetch('podcastEP.html')
        .then(response => response.text())
        .then(content => {
            const clickableDivs = document.querySelectorAll('.playa');
            clickableDivs.forEach(Image => {
                Image.addEventListener('click', () => {
                    // Get the ID of the clicked div
                    const clickedDivId = Image.id;
                    console.log(clickedDivId);
                    // Show the playbar by setting its display property to "block"
                    const playbar = document.getElementById("playbar");
                    playbar.style.display = "block";
            imgElement = document.getElementById(clickedDivId)
            imgElement.addEventListener('click', function () {
                const audioElement = document.getElementById("audal").querySelector('audio');
                if (audioElement) {
                    const audioSrc = audioElement.src;
                    let trimmedUrl = audioSrc.substring(audioSrc.indexOf("/pd"));

                    // Replace "%20" with ""
                    let modifiedUrl = trimmedUrl.replace(/%20/g, "");

                    // Remove the leading "/" before "pd"
                    modifiedUrl = modifiedUrl.replace(/^\//, "");
                    var audio = document.getElementById('pod');
                    var source = document.createElement('source');
                    source.src = modifiedUrl;
                    source.type = 'audio/mp3';
                    console.log(source.src);
                    audio.appendChild(source);
                    songs.push(modifiedUrl);

                    // console.log(songs); // Output: ["pd/pod1ayush.mp3"]

                    // songs.push(audioSrc);
                } else {
                    console.log('Audio element not found.');
                }
                // console.log(songs);
            });
            // console.log(songs)
            function playCurrentSong() {
                if (audioPlayer.paused) {
                    audioPlayer.src = songs[currentSongIndex];
                    audioPlayer.play();
                    isPlaying = true;
                    playBtn.src = "../Image/pause.svg";
                } else {
                    audioPlayer.pause();
                    isPlaying = false;
                    playBtn.src = "../Image/playF.svg";
                }
            }

            playBtn.addEventListener('click', function () {
                if (audioPlayer.paused) {
                    audioPlayer.play();
                    isPlaying = true;
                    playBtn.src = "../Image/pause.svg";
                } else {
                    audioPlayer.pause();
                    isPlaying = false;
                    playBtn.src = "../Image/playF.svg";
                }
            });

            prevBtn.addEventListener('click', function () {
                currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
                playCurrentSong();
            });

            nextBtn.addEventListener('click', function () {
                currentSongIndex = (currentSongIndex + 1) % songs.length;
                playCurrentSong();
            });

            volumeSlider.addEventListener('input', function () {
                audioPlayer.volume = volumeSlider.value;
            });

            audioPlayer.addEventListener('loadedmetadata', () => {
                const duration = audioPlayer.duration;
                const totalMinutes = Math.floor(duration / 60);
                const totalSeconds = Math.floor(duration % 60);
                totalTime.textContent = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`;
            });

            audioPlayer.addEventListener('timeupdate', () => {
                const currentTime = audioPlayer.currentTime;
                const currentMinutes = Math.floor(currentTime / 60);
                const currentSeconds = Math.floor(currentTime % 60);
                elapsedTime.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;

                const progress = (audioPlayer.currentTime / audioPlayer.duration) * 100;
                progressBar.style.width = `${progress}%`;
            });

            audioPlayer.addEventListener('ended', () => {
                playBtn.textContent = 'Play';
                isPlaying = false;
                progressBar.style.width = '0';
            });

        })
        .catch(error => console.log('Error fetching file:', error));
            });
    });            
});
    

