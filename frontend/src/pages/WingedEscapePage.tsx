import { Unity, useUnityContext } from "react-unity-webgl";

const WingedEscapePage = () => {

    const { unityProvider } = useUnityContext({
        loaderUrl: "/wegame/WebGL-v1.1.loader.js",
        dataUrl: "/wegame/WebGL-v1.1.data.br",
        frameworkUrl: "/wegame/WebGL-v1.1.framework.js.br",
        codeUrl: "/wegame/WebGL-v1.1.wasm.br",
    });

    return (
        <>
            <center>
            <Unity unityProvider={unityProvider} className="max-w-5l w-11/12 mx-auto min-w-96" />
            </center>
        </>
    )
};

export default WingedEscapePage