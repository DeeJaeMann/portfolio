import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

const WingedEscapePage = () => {

    const { unityProvider } = useUnityContext({
        loaderUrl: "/build/WebGL-v1.1.loader.js",
        dataUrl: "/build/WebGL-v1.1.data.br",
        frameworkUrl: "/build/WebGL-v1.1.framework.js.br",
        codeUrl: "/build/WebGL-v1.1.wasm.br",
    });

    return (
        <>
            <center>
            <Unity unityProvider={unityProvider} className="max-w-5l w-11/12 mx-auto" />
            </center>
        </>
    )
};

export default WingedEscapePage