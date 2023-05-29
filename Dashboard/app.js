const activeUser = JSON.parse(localStorage.getItem('activeUser'))

const h1 = document.getElementsByTagName('h1')

if(!activeUser){
    window.location.href = "../index.html"
}

h1[0].innerText = `${activeUser.firstName}`