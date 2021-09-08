import { WebView } from "react-native-webview";
import React from "react";
import Interface from "./interfaces/index"

export default function App () {
    const injectCode = `window.__TEST__ = 'global test'`

    const webviewRef = React.useRef(null);
    const handleOnMessage = async ({ nativeEvent: { data } }) => {
        if (Interface[data]) {
            const result = await Interface[data]?.();
            console.log(result[0]?.color)
        }
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
