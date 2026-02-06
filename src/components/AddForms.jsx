export default function AddItems(){



    const handleClick = (e) => {
    e.preventDefault()
    // const uniqId = crypto.randomUUID()
    // ((prev) => ([...prev, {id: uniqId,...task}]))
    console.log("Submitted")
        
    }

    return(
        <form className="addform" onSubmit={handleClick}>
            <label htmlFor="itemtitle">Vare</label>
            <input type="text" name="title" id="itemtitle" placeholder="Feks. Brød"/>
            <label htmlFor="quantity"></label>
            <input type="number" id="quantity" name="quantity" min="1" defaultValue="0"/>
            <button>Legg til vare</button>

        </form>
    )
}