import { Box, ChakraProvider } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Store from "./components/Store";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
function App() {
  return (
    <ShoppingCartProvider>
      <ChakraProvider>
        <Box className="container" marginTop="40px">
          <Navbar />
          <Store />
        </Box>
      </ChakraProvider>
    </ShoppingCartProvider>
  );
}

export default App;
