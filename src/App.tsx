import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <BrowserRouter>
      <div className="flex justify-center bg-black h-[100svh]">
        <div className="relative w-full max-w-[480px] sm:max-w-[560px] min-h-[100svh] text-white bg-gradient-to-b from-[#0B0039] via-[#090D1A] to-black [isolation:isolate]">
          <div className="pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] min-h-[inherit]">
          <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(90%,560px)] aspect-[373/729] h-[85%] rounded-full blur-[clamp(40px,9vw,90px)] opacity-90"
              style={{
                background:
                  "linear-gradient(0deg, rgba(0, 0, 0, 0.71), rgba(0, 0, 0, 0.71)), linear-gradient(107.88deg, #37D263 12.19%, #54FCF2 75.76%, #2600FF 142.77%, #003FF4 193.32%)",
              }}
            />
          </div>

          <div className="relative min-h-[inherit]">
            <AppRouter />
          </div>
        </div>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
