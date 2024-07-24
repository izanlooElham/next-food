import Card from "../modules/Card"
import styles from "./MenuPage.module.css"

function MenuPage({foodData}) {
  return (
    <div className={styles.container}>
        <h2>Menu</h2>
     <div className={styles.subContainer}>
        {foodData.map(food=>(
            <Card key={food.id} {...food}/>
        ))}
     </div>    
    </div>
  )
}

export default MenuPage






