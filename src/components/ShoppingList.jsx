import ShopItem from "./ShoppingItem";


export default function ShoppingListFull({fullList, setShopList}){

    return(
        <section id="shoppinglist">
            
            {fullList.map((item) => <ShopItem key={item.id} title={item.title} total={item.total} id={item.id} bought={item.bought} setShopList={setShopList} />)}

        </section>
    )
}