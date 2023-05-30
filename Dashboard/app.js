const activeUser = JSON.parse(localStorage.getItem('activeUser'))

const userName = document.querySelector('.name')
const logoutBtn = document.querySelector('.logoutBtn')

if (!activeUser) {
    window.location.href = "../index.html"
}

function logoutHandler() {
    localStorage.removeItem('activeUser')
    window.location.href = "../index.html"
}

userName.textContent = `${activeUser.firstName}`