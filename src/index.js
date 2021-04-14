const ul = document.getElementById('topnav')
const liElements = ul.getElementsByClassName('li')

for (var i = 0; i < liElements.length; i++) {
  liElements[i].addEventListener('click', function () {
    const current = document.getElementsByClassName('active')
    current[0].className = current[0].className.replace(' active', '')
    this.className += ' active'
  })
}
