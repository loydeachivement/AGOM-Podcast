var songs =["20 Chose que la nouvelle naissance n'est pas.m4a",
			"Devenir puissant c'est devenir plus fort.m4a",
			"Gagner le combat de votre vie.m4a",
			"L'ampleur de la puissance du Saint Esprit.m4a",
			"L'annee sacrificielle.m4a",
			"L'eglise au prix du sang.m4a",
			"Les temps dificile ne tue pas le fort.m4a",
			"Vaincre le dieu du siecle mauvais.m4a",
			"Vivre pour choisir de vivre.m4a",
			"Abstenez vous de toute espece de malice.mp3",
			"Bouclier contre le corona virus.m4a"];
var song = new Audio ();
var currentSong = 0;

window.onload = loadSong;

function loadSong () {
	song.src = "songs/" + songs[currentSong];
	songTitle.textContent = (currentSong + 1) + ". " +songs[currentSong];
	nextsongTitle.innerHTML = songs[currentSong + 1 % songs.length];
	//song.play();
	setTimeout(showDuration, 1000);
}

setInterval(updateSongSlider, 1000);

function updateSongSlider() {
	var c = Math.round(song.currentTime);
	songSlider.value = c;
	currentTime.textContent = convertTime(c);
	if (song.ended){
		next();
	} 
		
}

function convertTime (secs) {
	var min = Math.floor(secs/60);
	var sec = secs % 60;
	min = (min < 10) ? "0" + min : min;
	sec = (sec < 10) ? "0" + sec : sec;
	return (min + ":" + sec);
}

function showDuration () {
	var d = Math.floor(song.duration);
	songSlider.setAttribute("max", d);
	duration.textContent = convertTime(d);
}  

function playOrPauseSong(img) {
	if (song.paused) {
		song.play();
		img.src = "icons/pause.png";
	}else{
		song.pause();
		img.src = "icons/play.png";
	}
}

function next () {
	currentSong ++;
	currentSong = (currentSong > songs.length) ? songs.length  : currentSong;
	loadSong();
	if (song.paused) {
		song.play();
		img.src = "icons/pause.png";
	}else{
		song.pause();
		img.src = "icons/play.png";
	}
}

function previous () {
	currentSong --;
	currentSong = (currentSong < 0) ? songs.length - 1 : currentSong;
	loadSong();
	if (song.paused) {
		song.play();
		img.src = "icons/pause.png";
	}else{
		song.pause();
		img.src = "icons/play.png";
	}
} 

function seekSong () {
	song.currentTime = songSlider.value;
	currentTime.textContent = convertTime(song.currentTime);
}

function adjustVolume() {
	song.volume = volumeSlider.value;
}