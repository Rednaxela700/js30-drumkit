const checkboxes = document.querySelectorAll('input')
const checkboxesArr = Array.from(checkboxes)
console.log(checkboxesArr)

checkboxesArr.map(
    (el, idx) => el.no = idx)

function checkEmpty(start, end) {
    end.no
    console.log(start)
    const currentCheckboxes = checkboxesArr.filter(item => item.no >= start.no && item.no <= end.no && item.checked !== start.checked)
    currentCheckboxes.forEach(el => el.checked = start.checked)
    console.log(currentCheckboxes)
}

checkboxesArr.forEach(el => el.addEventListener('click', (e) => {
    console.log(e.target.no)
    checkEmpty(e.target, checkboxesArr[3])
}))