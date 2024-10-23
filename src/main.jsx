
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import Header from './components/Header.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Header/>
    <App/>
  </Provider>
)
