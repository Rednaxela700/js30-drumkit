const checkboxes = document.querySelectorAll('input')
const checkboxesArr = Array.from(checkboxes)
let firstItem = ''

function handleFirstClick(e) {
    return firstItem = e.target
}

function handleSecondClick(e) {
    checkEmpty(firstItem, e.target)
    //clean
    checkboxes.forEach(el => el.removeEventListener('click', handleSecondClick))
    checkboxes.forEach(el => el.addEventListener('click', handleFirstClick))
    firstItem = ''
}

function checkEmpty(start, end) { //checks checkboxes from start to end
    let currentCheckboxes;
    if (start.index < end.index) { //determine if user increments or decrements
        currentCheckboxes = checkboxesArr.filter(item => item.index >= start.index && item.index <= end.index)
    } else {
        currentCheckboxes = checkboxesArr.filter(item => item.index <= start.index && item.index >= end.index)
    }
    currentCheckboxes.forEach(el => el.checked = start.checked)
}

checkboxesArr.map((el, idx) => el.index = idx) //add property of index to input DOM
checkboxes.forEach(el => el.addEventListener('click', handleFirstClick))

window.addEventListener('keydown', (e) => {
    if (e.keyCode !== 16) return
    checkboxes.forEach(el => el.removeEventListener('click', handleFirstClick))
    checkboxes.forEach(el => el.addEventListener('click', handleSecondClick))

})
