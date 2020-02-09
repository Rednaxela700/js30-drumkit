const checkboxes = document.querySelectorAll('input')
const checkboxesArr = Array.from(checkboxes)
console.log(checkboxesArr)

checkboxesArr.map(
    (el, idx) => el.no = idx)


checkboxesArr.forEach(el => el.addEventListener('click', (e) => console.log(e.target.no)))