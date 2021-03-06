const dgram = require("dgram");
const server = dgram.createSocket("udp4");
server.on("message", (message, rinfo) => {
	console.log(`server: server got: ${message} from ${rinfo.address}:${rinfo.port}\n`);
	server.send("server: " + new Date() + " message '" + message + "' received!\n", rinfo.port, rinfo.address);
});
server.bind(4333);
