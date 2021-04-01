let playListArr = [
    {
        author: "Antonio Vivaldi",
        trackName: 'The Four Seasons, Op.8, "Spring": Allegro',
        trackGenre: "Classical",
        trackLength: "1:01",
    },
    {
        author: "Richard Wagner",
        trackName: 'The Valkyurie: Ride of the Valkyres',
        trackGenre: "Classical",
        trackLength: "2:02",
    },
    {
        author: "AC/DC",
        trackName: 'Dirty Deeds Done Dirt Cheap',
        trackGenre: "Rock",
        trackLength: "3:03",
    },
    {
        author: "A-HA",
        trackName: 'Take On Me',
        trackGenre: "New Wave",
        trackLength: "4:04",
    },
    {
        author: "Deep Purple",
        trackName: 'Smoke On The Water',
        trackGenre: "Rock",
        trackLength: "5:05",
    },
    {
        author: "Frédéric Chopin",
        trackName: 'Nocturne No.2 In E-Flat Major, Op.9',
        trackGenre: "Classical",
        trackLength: "6:06",
    },
    {
        author: "Blue Monday",
        trackName: 'New Order',
        trackGenre: "New Wave",
        trackLength: "7:07",
    },
    {
        author: "Transmission",
        trackName: 'Joy Division',
        trackGenre: "New Wave",
        trackLength: "8:08",
    },
    {
        author: "Nirvana",
        trackName: 'Smells Like Teen Spirit',
        trackGenre: "Rock",
        trackLength: "9:09",
    },
    {
        author: "A Forest",
        trackName: 'The Cure',
        trackGenre: "New Wave",
        trackLength: "10:10",
    },
    {
        author: "Gustav Holst",
        trackName: 'The Planets, Op.32',
        trackGenre: "Classical",
        trackLength: "11:11",
    },
];
let duration = [];
let dom = {
    trackList: document.querySelector('.trackList'),
    inputRadio: document.querySelectorAll('[name="genre"]'),
    timeInput: document.querySelector('.timeInput')
};

function initState(){
    duration = [];
    for (let i = 0; i < playListArr.length; i++) {
        dom.trackList.innerHTML += `<li data-track-genre="${playListArr[i].trackGenre}" 
        data-track-length=${playListArr[i].trackLength}>
        ${playListArr[i].author} - ${playListArr[i].trackName} |  
        ${playListArr[i].trackLength}</li>`
        duration.push(playListArr[i].trackLength);
    }
    calculateTime(duration);
};

function calculateTime(totalTimeArr) {
    let time = "00:00";
    for (let i = 0; i < totalTimeArr.length; i++) {
        let time1 = totalTimeArr[i].split(/:/);
        let time2 = time.split(/:/);
        // console.log(x,y);
        tmpTime = [ time1[0]*1 + time2[0]*1, time1[1]*1 + time2[1]*1 ];
        time = ((tmpTime[0] + Math.floor(tmpTime[1]/60)) + ':' + tmpTime[1]%60);
        // console.log(time);
    }
    let minutes = time.split(/:/)[0];
    let seconds = time.split(/:/)[1];
    if (minutes<10) {
        minutes="0"+minutes;
    };
    if (seconds<10) {
        seconds="0"+seconds;
    };
    // console.log(minutes,seconds);
    dom.timeInput.innerHTML = `Total play time: ${minutes}:${seconds}`
};

function filterByGenre(genre) {
    dom.trackList.innerHTML= "";
    duration = [];
    if (genre === "All") {
        initState();
    } else {
        for (let i = 0; i < playListArr.length; i++) {
            if (playListArr[i].trackGenre === genre) {
                dom.trackList.innerHTML += `<li data-track-genre="${playListArr[i].trackGenre}" 
                data-track-length=${playListArr[i].trackLength}>
                ${playListArr[i].author} - ${playListArr[i].trackName} |  
                ${playListArr[i].trackLength}</li>`;
                duration.push(playListArr[i].trackLength);
            }
        }
        // console.log(duration);
        calculateTime(duration);
    }
};

initState();

dom.inputRadio.forEach(function(e){
    e.addEventListener("click", function(){
        let genre = this.value;
        filterByGenre(genre);
    })
});
