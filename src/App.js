import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <body className="relative font-inter antialiased ">
      <div className="sticky min-h-screen flex flex-col justify-center bg-[#F7F7F7] overflow-hidden top-0">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="text-center">
            <div className="font-extrabold text-6xl md:text-7xl [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 to-50% to-slate-200 text-left flex justify-center items-center flex-col">
              <span className="text-black inline-flex flex-col h-[calc(theme(fontSize.6xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.7xl)*theme(lineHeight.tight))] overflow-hidden">
                <ul className="block animate-text-slide-8 leading-tight [&_li]:block  text-center">
                  <li>Coming Soon.</li>
                  <li>Segera Hadir.</li>
                  <li>即将推出.</li>
                  <li>近日公開.</li>
                  <li>À venir.</li>
                  <li>เร็วๆ นี้.</li>
                  <li>Prossimamente.</li>
                  <li>Muy pronto.</li>
                  <li aria-hidden="true">Coming Soon.</li>
                </ul>
              </span>
              <div>
                <h1 className="text-black/60 font-normal text-[18px]">
                  Aurellio Dhiya Wisnu Rajendra
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
