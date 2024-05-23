const registroFormJ = document.querySelector('#registroForm')
registroFormJ.addEventListener('submit',(e)=>{
    e.preventDefault()

const name = document.querySelector('#name').value
const lastname = document.querySelector('#lastname').value
const mail = document.querySelector('#mail').value
const telefono = document.querySelector('#telefono').value
const password = document.querySelector('#password').value

const users = JSON.parse(localStorage.getItem('users')) || []
const usersRegister = users.find(user => user.email === mail)

if(usersRegister){
    return alert('El usuario ya esta registrado!')
}

users.push({email: mail, name: name, lastname: lastname, telefono: telefono, password: password})
localStorage.setItem('users',JSON.stringify(users))
alert('Registro exitoso!')
window.location.href = 'index.html'
})