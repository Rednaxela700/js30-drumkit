const checkboxes = document.querySelectorAll('input')
const checkboxesArr = Array.from(checkboxes)
console.log(checkboxesArr)

checkboxesArr.map(
    (el, idx) => el.no = idx)
