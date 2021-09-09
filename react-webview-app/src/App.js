import React from 'react';
import './App.css';


function App() {
    function send() {
        console.log(window.__TEST__)
        window?.ReactNativeWebView?.postMessage('From Webview to RN');
    }

    function setColor() {
        window?.ReactNativeWebView?.postMessage('setColor');
    }
    React.useEffect(() => {
        window.addEventListener("message",(e) => {
            console.log(e.data)
        })
    }, [])
  return (
    <div className="App">
      <header className="App-header">
        Test
          <button onClick={send}>Send</button>
          <button onClick={setColor}>Set Colors</button>
      </header>
    </div>
  );
}

export default App;
