export default function AddItems({setShopList}) {

  const handleClick = (e) => {

    e.preventDefault()

    const form = e.target
    const title = form.title.value
    const total = form.quantity.value

    //Hvis input felt er tomt, så skjer ingenting (bortsett fra console.log) 
    if (!title) 
    return console.log("INPUT FELT ER TOMT!")

    //Pakker ut og legger til nytt objekt i listen, gir også en tilfeldig id og nullstiller formen
    setShopList(prev => [...prev, {id: crypto.randomUUID(), title, total, bought: false}])
    form.reset()}

  return (
    <form className="addform" onSubmit={handleClick}>
      <label htmlFor="itemtitle">Vare</label>
      <input type="text" name="title" id="itemtitle" />
      <label htmlFor="quantity">Antall</label>
      {/* Bruker bygd inn funksjonn i HTML for å definere minimum verdi på antall varer */}
      <input type="number" name="quantity" min="1" defaultValue="1" />

      <button>Legg til vare</button>
    </form>
  )
}