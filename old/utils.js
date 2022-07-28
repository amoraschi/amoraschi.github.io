function changeTabcontents (name) {
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

window.onload = async () => {
  const visitCount = document.getElementById('count-heading')
  const { value } = await (await fetch('https://api.countapi.xyz/hit/bruhbruh/visits')).json()
  console.log(value)

  if (visitCount == null) return
  visitCount.innerHTML = `VISITS: ${value}`
}
