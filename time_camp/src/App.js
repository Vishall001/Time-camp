import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Integration from './Pages/integration';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Integration/>
    </ChakraProvider>
  );
}

export default App;
