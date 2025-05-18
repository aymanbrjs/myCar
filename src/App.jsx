import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import { SidebarProvider } from './context/SidebarContext'
import Sidebar from './components/Sidebar'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Favorite from './pages/favorite/favorite'
import Profile from './pages/profile/profile'
import Setting from './pages/setting/setting'
import Signin from './pages/signin/signin'
import Vercode from './pages/verCode/verCode'
import Signin2 from './pages/signin2/signin2'
import CarDetails from './pages/carDetails/CarDetails'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={
            <SidebarProvider>
              <Navbar />
              <Sidebar />
              <Outlet />
              <Footer />
            </SidebarProvider>
          }>
            <Route path='/' element={<Home />} />
            <Route path='/favorite' element={<Favorite />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/setting' element={<Setting />} />
            <Route path='/details/:id' element={<CarDetails />} />
          </Route>


          <Route path='/signin' element={<Signin />} />
          <Route path='/signin2' element={<Signin2 />} />
          <Route path='/code' element={<Vercode />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
