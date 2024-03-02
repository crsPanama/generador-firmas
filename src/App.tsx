import { Firma } from "./components/Firma"
export  const App = () => {

  return (
    <main className="bg-slate-600 w-full h-screen flex flex-col justify-center items-center">
      <h1 className="text-white">Generador de firmas</h1>
      <div className=" ">
        <Firma  />
      </div>
    </main>
  )
}
