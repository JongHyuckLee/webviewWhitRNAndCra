import { WebView } from "react-native-webview";
import React from "react";
import Interface from "./interfaces/index"
import { Button } from 'react-native-elements';

export default function App () {
    const [backgroundColor, setBackgroundColor] = React.useState('#0f0')
    const injectCode = `window.__TEST__ = 'global test'`

    const webviewRef = React.useRef(null);
    const handleOnMessage = React.useCallback(async ({ nativeEvent: { data } }) => {
        if (Interface[data]) {
            await Interface[data]?.(setBackgroundColor);
        }
    }, [])
    const handleOnLoadEnd = () => {
        webviewRef.current.postMessage("from RN to Webview")

    }

    return (
        <>
        <WebView
            containerStyle={  {
                width: '50%',
                alignSelf: 'center',
                alignContent: 'center',
                borderRadius: 15,
                paddingTop: 100,
                paddingBottom: 100,
            }}
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
            <Button title="Native Button" buttonStyle={{backgroundColor}} />
        </>
    );
};
