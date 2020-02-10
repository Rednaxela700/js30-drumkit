const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')

function togglePlay() {
    if(video.paused) {
        video.play()
    } else {
        video.pause()
    }
}

function updateButton () {
    console.log('hello')
    const icon = this.paused ? '⏸️' : '⏯️'
    toggle.innerText = icon
}

video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)

toggle.addEventListener('click', togglePlay)
window.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
        togglePlay()
    }
})