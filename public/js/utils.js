function changeTabcontents (name) {
  console.log(name)
  const tabcontents = document.getElementsByClassName('tab-content')
  for (const tabcontent of tabcontents) {
    tabcontent.style.display = 'none'
  }

  const tabToShow = document.querySelector(`#${name}`)
  if (tabToShow == null) return
  if (tabToShow.id.includes('home')) {
    tabToShow.style.display = 'flex'
  } else {
    tabToShow.style.display = 'block'
  }
}

console.log(changeTabcontents)