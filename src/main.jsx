import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { OrderProvider } from './context/OrderContext'; // Import your AuthProvider

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <OrderProvider>
      <App />
  </OrderProvider>
  
)
