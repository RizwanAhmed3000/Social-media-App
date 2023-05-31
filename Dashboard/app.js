const activeUser = JSON.parse(localStorage.getItem('activeUser'))

const userName = document.querySelector('.username')
const userTag = document.querySelector('.userTag')
const logoutBtn = document.querySelector('.logoutBtn')

if (!activeUser) {
    window.location.href = "../index.html"
}

function logoutHandler() {
    localStorage.removeItem('activeUser')
    window.location.href = "../index.html"
}

userName.textContent = `${activeUser.firstName}`
userTag.textContent = `@${activeUser.firstName}`