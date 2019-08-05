const socket = new WebSocket("ws://localhost:8080/ws");

let connect = callback => {
    console.log("Attempting Connection...");

    socket.onopen = () => {
        console.log("Connection Successful!")
    };

    socket.onmessage = msg => {
        console.log(msg);
        callback(msg)
    };

    socket.onclose = event => {
        console.log("Socket Closed Connection: ", event);
    };
    
    socket.onerror = error => {
        console.log("Socket Error: ", error);
    };
}

let sendMsg = msg => {
    console.log("Sending msg: ", msg);
    socket.send(msg);
};

export { 
    connect, 
    sendMsg 
};