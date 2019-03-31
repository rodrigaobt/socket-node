var net = require('net');

var HOST = 'localhost';
var PORT = 3030;


function reverse(s) {
         var o = '';
         for (var i = s.length - 1; i >= 0; i--)
         o += s[i];
         return o;
}

// Cria uma instância do servidor
// A função passada para net.createServer() se torna o  event handler para o evento de conexão
net.createServer(function(sock) {
    
    // conexão 
    console.log('Cliente ' + sock.remoteAddress +':'+ sock.remotePort +' conectou-se');
    
    // 'data' event handler 
    sock.on('data', function(data) {
    
	//invertendo a mensagem recebida
        data.reverse(data);
        console.log('Retornando '+ data +' para ' + sock.remoteAddress);
        // envia data para o socket cliente
        sock.write('Servidor retornou: ' + data);

    });
    
    // 'close' event handler 
    sock.on('close', function(data) {
        console.log('Cliente ' + sock.remoteAddress +':'+ sock.remotePort +' desconectou-se');
    });
    
}).listen(PORT, HOST);

console.log('Server listening on ' + HOST +':'+ PORT);

