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

function skip() {
    const skip = parseFloat(this.dataset.skip)
    video.currentTime += skip
}


function handleRange() {
    video[this.name] = this.value
}
skipButtons.forEach(el => el.addEventListener('click', skip))

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.width = `${percent}%`
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = scrubTime
}

ranges.forEach(el => el.addEventListener('change', handleRange))
ranges.forEach(el => el.addEventListener('mousemove', handleRange))
video.addEventListener('timeupdate', handleProgress)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
progress.addEventListener('click', scrub)

toggle.addEventListener('click', togglePlay)
window.addEventListener('keydown', (e) => {
    if (e.key === ' ') {
        togglePlay()
    }
})