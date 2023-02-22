import React, { useEffect, useState } from 'react';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { State } from './types';
import Header from './components/Header';
import StopWatch from './components/Stopwatch';
import Chart from './components/Chart';
import self_care from './assets/self-care.jpg';
import { useDisclosure } from '@chakra-ui/react';
import ModalOverlay from './components/ModalOverlay';
import Footer from './components/Footer';

function App() {
  const [state, setState] = useState<State>({
    start: false,
    show: true
  })

  const { isOpen, onOpen, onClose } = useDisclosure()

  useEffect(() => {
    onOpen();
  }, [])
  return (
    <ChakraProvider>
      <div className='app'>
        <Header isOpen onOpen={onOpen} onClose={onClose}/>
        <StopWatch state={state} setState={setState} />
        {state.show && <Chart />}
        {!state.show && 
        <img src={self_care} className='self-care'/>}
        <ModalOverlay onClose={onClose} isOpen={isOpen} onOpen={onOpen}/>
        <Footer></Footer>
      </div>

    </ChakraProvider>
  );
}

export default App;
