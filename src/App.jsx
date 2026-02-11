import './App.css'
import './style/style.css'
import AddItems from './components/AddForms'
import ShoppingListFull from './components/ShoppingList'
import {useState} from 'react'
function App() {

 const fullList = [
    {
      id: 0,
      title: "Egg",
      total: 1,
      bought: false
    },
    {
      id: 1,
      title: "Melk",
      total: 2,
      bought: true
    },
    {
      id: 2,
      title: "Hvete",
      total: 1,
      bought: false
    },
  ]

  const [shopList, setShopList] = useState(fullList)

  return (
    <main>
      <h2>Handleliste</h2>
      <AddItems setShopList={setShopList}/>
      <ShoppingListFull fullList={shopList} setShopList={setShopList}/>
    </main>
  )
}

export default App
