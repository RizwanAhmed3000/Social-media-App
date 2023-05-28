const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const newPassword = document.querySelector('#new-password')
const password = document.querySelector('#password')
// console.log(password)
const dateOfBirth = document.querySelector('#dateOfBirth')
const emailAddress = document.querySelector('#email-address')
const passwordWarning = document.querySelector('.passwordWarning')
const passwordBtn = document.querySelector('.passwordBtn')
let gender;
// console.log(passwordBtn)




passwordWarning.style.visibility = "hidden"
const users = JSON.parse(localStorage.getItem('users')) || []
console.log(users)

function showHide(p){
    if(p.type == "password"){
        p.setAttribute('type', 'text')
        passwordBtn.classList.add('active')
    }else{
        p.setAttribute('type', 'password')
        passwordBtn.classList.remove('active')
    }
}

function signupHandler() {
    if (firstName.value == "" || lastName.value == "" || emailAddress.value == "" || newPassword.value == "" || dateOfBirth.value == "" || gender == undefined) {
        alert("fill all the fields")

    } else {
        if (newPassword.value.length < 7) {
            passwordWarning.style.visibility = "visible"
            setTimeout(()=>{
                passwordWarning.style.visibility = "hidden"
            }, 3000)
            return
        } else if (firstName.value.includes(" ") || lastName.value.includes(" ")) {
            alert("White space not all")
            return
        }
        const usersDetails = {
            firstName: firstName.value,
            lastName: lastName.value,
            Password: newPassword.value,
            emailAddress: emailAddress.value,
            dateOfBirth: new Date(`${dateOfBirth.value}`),
            gender
        }
        // console.log(usersDetails)
        users.push(usersDetails)
        // console.log(users)
        localStorage.setItem('users', JSON.stringify(users))
        alert("signup successfull")
        firstName.value = ""
        lastName.value = ""
        emailAddress.value = ""
        newPassword.value = ""
        dateOfBirth.value = ""
        dateOfBirth.value = ""
        gender = ""

    }
}

function genderHandler(g) {
    gender = g
}