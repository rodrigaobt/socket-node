var net = require('net');

var HOST = '127.0.0.1';
var PORT = 3030;
var msgCliente = '';

var client = new net.Socket();
client.connect(PORT, HOST, function() {

    console.log('Conectado ao servidor ' + HOST + ':' + PORT);
    function hello(msg) {
       // enviar uma mensagem para o servidor ao se conectar
       client.write(msg);
       //guardando a msg que o cliente enviou via terminal
       msgCliente += msg;
    }hello( process.argv[2]);

});


// data é o que servidor retorna para o cliente
client.on('data', function(data) {
    
    console.log('Enviei: '+msgCliente+' - ' + data);
    // fechar o socket cliente
    client.destroy();
    
});

// 'close' event handler 
client.on('close', function() {
    console.log('Conexão encerrada');
});

