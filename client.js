const net = require("net");
const { IP, PORT } = require("./constants"); // importing IP and port variables from constants file

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on("connect", (connect) => {
    console.log("Connected to game"); // logs connected string to console to show we are connected to the server
    conn.write("Name: MKZ"); // initials
  });

  conn.on("data", (data) => {
    console.log("Server says: ", data);
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect;