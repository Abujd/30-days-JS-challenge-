window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const keyClass = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio)
        return;
    audio.play();
    keyClass.classList.add('playing');
    setTimeout(() =>{
        keyClass.classList.remove('playing');
    }, 300)
})