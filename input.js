const { connect } = require("./client");

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') { 
    process.exit(); // if user presses control + c it exits the program
  }

  if (key === 'w') {
    connection.write("Move: up"); // moves snake upwards with the input of w
  }

  if (key === 'a') {
    connection.write("Move: left"); // moves snake to the left with input a
  }

  if (key === 's') {
    connection.write("Move: down"); // moves snake downwards with input s
  }

  if (key === 'd') {
    connection.write("Move: right"); // moves snake to the right with input d
  }

  if (key === 'r') {
    connection.write("Say: Wassup"); // input to say "Wassup" to other players with letter r
  }

};

module.exports = setupInput;