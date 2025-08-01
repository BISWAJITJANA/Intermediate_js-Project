import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter} from 'react-router-dom';
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
      <React.StrictMode>
      <HashRouter>
       <ChakraProvider>
         <App />
      </ChakraProvider> 
      </HashRouter>
      </React.StrictMode>
     
)