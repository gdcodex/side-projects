import { useEffect, useState } from "react";
import { io } from "socket.io-client";

function App2() {
  const [info, setinfo] = useState("");
  useEffect(() => {
    console.log("rendered");
    const socket = io("http://localhost:5000");
    socket.on("connect", () => {
      console.log("connected");
      socket.on("my-data", (data) => {
        //console.log(data);
        setinfo(data);
      });
    });
  }, []);
  return (
    <div>
      {info && <p className="text-title">{info}</p>}
      {!info && <p className="text-title">Websocket not connected.</p>}
    </div>
  );
}

export default App2;
