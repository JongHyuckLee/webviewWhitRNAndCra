import React from 'react';
import './App.css';


function App() {
    function send() {
        console.log(window.__TEST__)
        window?.ReactNativeWebView?.postMessage('From Webview to RN');
    }

    function getColors() {
        window?.ReactNativeWebView?.postMessage('getColor');
    }
    React.useEffect(() => {
        window.addEventListener("message",(e) => {
            alert(e.data)
        })
    }, [])
  return (
    <div className="App">
      <header className="App-header">
        Test
          <button onClick={send}>Send</button>
          <button onClick={getColors}>Get Colors</button>
      </header>
    </div>
  );
}

export default App;
