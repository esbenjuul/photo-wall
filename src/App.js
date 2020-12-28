import React from "react";
import LoginPromt from "./components/LoginPromt";
import useGlobalStore from "./store/global";
import shallow from "zustand/shallow";
import "./assets/scss/styles.scss";

function App() {
  const [userInfo, authenticated] = useGlobalStore(
    (store) => [store.userInfo, store.authenticated],
    shallow
  );
  return (
    <>
      <div className="photo-wall-app">
        <header>
          {userInfo.username && <p>Username: {userInfo.username}</p>}
        </header>
        {!authenticated && <LoginPromt />}
      </div>
    </>
  );
}

export default App;
