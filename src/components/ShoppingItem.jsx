export default function ShopItem({title, total, id, setShopList}){

        const handleClick = () => {
        setShopList((prev) => prev.filter(item => item.id !== id))
        console.log(id)
    }

    return(
        <article className="itemCard">
            <label htmlFor="check"></label>
            <input type="checkbox" id="check" name="check"/>
            <h3>{title}</h3>
            <label htmlFor="quantity"></label>
            <input type="number" id="quantity" name="quantity" min="1" defaultValue={total}/>
        </article>
    )
}