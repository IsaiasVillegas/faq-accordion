import Accordion from "./components/Accordion";

function App() {
  return (
    <>
      <main className="w-full h-screen flex justify-center items-center bg-light-pink px-6 bg-pattern-mobile bg-no-repeat sm:bg-pattern-desktop">
        <Accordion />

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 font-inter text-black text-center text-xs">
          Challenge by{" "}
          <a
            className="text-blue-600"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            className="text-blue-600"
            href="https://github.com/IsaiasVillegas"
            target="_blank"
          >
            Isaias Villegas
          </a>
          .
        </div>
      </main>
    </>
  );
}

export default App;
