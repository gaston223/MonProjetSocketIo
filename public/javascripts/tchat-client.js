console.log('Ouverture du tchat coté client');
let socket=io(); 

let formConnection = document.getElementById('form-connection');
let formMessage = document.getElementById('form-message');
let inputName = document.getElementById('name');
let inputMessage = document.getElementById('message');
let sectionConnexion =document.getElementById('sectionConnexion');
let sectionMessage =document.getElementById('sectionMessage');
let divMessages=document.getElementById('messages');

formConnection.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log('Autentification');
    const username= inputName.value;

    //Emission de l'evenement vers le serveur 
    socket.emit('newUser', username);

    //gestion de l'affichage
sectionConnexion.style.display='none';
sectionMessage.style.display='block';
});

formMessage.addEventListener('submit', (event)=>{
    event.preventDefault();
    console.log("Envoi d'un message");
    const message= inputMessage.value;

    //Emission de l'evenement vers le serveur 
    socket.emit('newMessage', message);
});

//traitement d'un nouveau message recu (émis par le serveur)
socket.on('new-message', (username, message)=>{
    console.log(`Réception d'un message`);
    //Creation d'un paragraphe HTML
    const monParagraphe = document.createElement('p');
    monParagraphe.innerText =`${username} : ${message}`;
    divMessages.appendChild(monParagraphe);
});
