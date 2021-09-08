import { WebView } from "react-native-webview";
import React from "react";

export default function App () {
    const injectCode = `window.__TEST__ = 'global test'`

    const webviewRef = React.useRef(null);
    const handleOnMessage = ({ nativeEvent: { data } }) => {
        console.log(data)
    }
    const handleOnLoadEnd = () => {
        webviewRef.current.postMessage("from RN to Webview")
    }

    return (
        <WebView
            domStorageEnabled={true}
            sharedCookiesEnabled={true}
            originWhitelist={["*"]}
            renderLoading={() => <></>}
            onLoadEnd={handleOnLoadEnd}
            onMessage={handleOnMessage}
            ref={webviewRef}
            source={{ uri: 'http://localhost:3000/' }}
            javaScriptEnabled={true}
            injectedJavaScript={injectCode}
        />
    );
};
