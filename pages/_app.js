import TinaProvider from "../.tina/components/TinaDynamicProvider";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../styles/globals.css";
const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 8000; // frequency provider is polling
  return library;
};

//https://coolors.co/palette/011627-fdfffc-2ec4b6-e71d36-ff9f1c
const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
  colors: {
    brand: {
      /*
      --rich-black-fogra-29: #011627ff;
      --baby-powder: #fdfffcff;
      --tiffany-blue: #2ec4b6ff;
      --rose-madder: #e71d36ff;
      --orange-peel: #ff9f1cff;
      */
      100: "#011627ff",
      200: "#fdfffcff",
      300: "#2ec4b6ff",
      400: "#e71d36ff",
      500: "#ff9f1cff",
    },
  },
});

const App = ({ Component, pageProps }) => {
  return (
    <TinaProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Web3ReactProvider>
    </TinaProvider>
  );
};

export default App;
