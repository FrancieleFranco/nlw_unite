import nlwUniteIcon  from "../assets/nlw-unite.icon.svg"

export function Header() {
  return(  <div>Header
    <div className="flex items-center gap-5 py-2">
      <img src={nlwUniteIcon} alt="NLW Unite" />

      <nav className="flex items-center gap-5">
        <a href="/eventos" className="font-medium text-sm text-zinc-300">Eventos</a>
        <a href="/participantes" className="color: red font-medium text-sm text-zinc-300">Participantes</a>
      </nav>
    </div>
  </div>
  )
}