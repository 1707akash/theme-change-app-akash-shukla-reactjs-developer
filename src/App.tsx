import { useSelector } from "react-redux"
import type { RootState } from "./redux/store"
import AppRouter from './routes/AppRouter'
import Header from "./components/Header"
import PlainLayout from "./layouts/PlainLayout"
import SidebarLayout from "./layouts/Sidebarlayout"
import GridLayout from "./layouts/GridLayout"
import './App.css'

function App() {
  const theme = useSelector((state: RootState)=>state.theme.currentTheme)
  
  const Layout = {
    theme1 : PlainLayout,
    theme2 : SidebarLayout,
    theme3 : GridLayout,
  }[theme]

  return (
    <>
    
    <div className="">
      
      <Layout>
        <Header />
        <AppRouter />
      </Layout>
    </div>
    </>
  )
}

export default App
