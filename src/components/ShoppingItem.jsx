export default function ShopItem({title, total, id, bought, setShopList}){


  //Brukte KI for veiledning for denne delen av koden KILDE: https://chatgpt.com/share/6987568d-3f78-800d-99ef-7725a35f2e65  
  const handleCheckboxChange = () => {
    setShopList(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, bought: !item.bought }
          : item
      )
    )
  }

    return(
        <article className="itemCard">
            <label htmlFor="check"></label>
            <input type="checkbox" checked={bought} onChange={handleCheckboxChange} name="check" id="check"/>
            <h3>{title}</h3>
            <label htmlFor="quantity"></label>
            <input type="number" id="quantity" name="quantity" min="1" defaultValue={total}/>
        </article>
    )
}