import Demonstracao from "./components/Demonstracao";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Integrantes from "./components/Integrantes";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />
        <Hero />
        <Demonstracao />
        <Integrantes />
        <Footer />
      </div>
    </>
  );
}

export default App;
