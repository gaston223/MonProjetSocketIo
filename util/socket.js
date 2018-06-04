//tchat avec Socket.io

module.exports.tchat=function tchat(io){
    io.on('connection', (socket)=>{
        console.log('Nouvel utilisateur connecté !');
        //Identité de la socket
        let identity= null;
        // traitement de l'evenement "new user"
        socket.on('newUser',(username)=>{
            console.log("Autentification (coté serveur)");
            identity = username;
        })
        //traitement de l'evenement "newMessage
        socket.on('newMessage',(message)=>{
            console.log('${identity} a envoyé un message');
            //on diffuse le message à tous les utilsateurs
            io.emit('new-message', identity, message);
        })
    }); 
}

