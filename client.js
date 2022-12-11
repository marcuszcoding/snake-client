const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541
  });

  conn.on("connect", (connect) => {
    console.log("Connected to game");
    conn.write("Name: MKZ");
    // setTimeout( () => {
    //   conn.write(`Move: up`)
    // }, 2000)
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;