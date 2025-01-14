import Footer from "./components/Footer"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"

const App = () => {
  return (
    <div className="max-h-screen flex flex-col">
      <Header />
      <HomePage />
      <Footer />
    </div>
  )
}

export default App
