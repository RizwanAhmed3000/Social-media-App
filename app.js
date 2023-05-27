const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const newPassword = document.querySelector('#new-password')
const dateOfBirth = document.querySelector('#dateOfBirth')
const phoneNumber = document.querySelector('#phone-number')
let gender;
const users = JSON.parse(localStorage.getItem('users')) ||  []
console.log(users)

function signupHandler(){
    if(firstName.value == "" || lastName.value == "" || phoneNumber.value == "" || newPassword.value == "" || dateOfBirth.value == "" || gender == undefined){
        alert("fill all the fields")
        
    }else{
        if(newPassword.value.length < 7){
            alert("password must be atleast 8 characters long")
            return
        }else if(firstName.value.includes(" ") || lastName.value.includes(" ")){
            alert("White space not all")
            return
        }
       const usersDetails = {
        firstName: firstName.value,
        lastName: lastName.value,
        Password: newPassword.value,
        phoneNumber: phoneNumber.value,
        dateOfBirth: new Date(`${dateOfBirth.value}`),
        gender
       }
        // console.log(usersDetails)
        users.push(usersDetails)
        // console.log(users)
        localStorage.setItem('users', JSON.stringify(users))
        alert("signup successfull")
    }
}

function genderHandler(g){
    gender = g
}