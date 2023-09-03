import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import Header from './components/Header'
import Browse from './components/Browse'
import SinglePage from './components/SinglePage'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/:photoId' element={<SinglePage />}></Route>
        <Route path='/browse' element={<Browse />}></Route>
      </Routes>
    </BrowserRouter>
  )
}
