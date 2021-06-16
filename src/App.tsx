import React from "react";
import { RoomPage } from "./pages/RoomPage";
import * as textRequests from "./utilities/textRequests";

function App() {
  return <RoomPage textRequests={textRequests} />;
}

export default App;
