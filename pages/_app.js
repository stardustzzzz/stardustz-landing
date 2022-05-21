import TinaProvider from "../.tina/components/TinaDynamicProvider";
import { Web3ReactProvider } from "@web3-react/core";
import { ethers } from "ethers";
import { ChakraProvider } from "@chakra-ui/react";

const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = 8000; // frequency provider is polling
  return library;
};

const App = ({ Component, pageProps }) => {
  return (
    <TinaProvider>
      <Web3ReactProvider getLibrary={getLibrary}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
      </Web3ReactProvider>
    </TinaProvider>
  );
};

export default App;
