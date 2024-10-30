import { Header } from "./components/Header"

export const App = () => {
  return (
    <>
      <div className="container mx-auto w-1/2 bg-slate-200 h-48">
        <Header />
        <div>
          <input type="text" />
          <button />
        </div>
        <h2>A FAZER</h2>
        {/* TASKLIST */}
        <h2>FEITO</h2>
        {/* TASKLIST */}
      </div>   
    </>
  )
}
