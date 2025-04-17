import MenuPage from "@/components/templates/MenuPage"


function Menu({foodData}) {
  return (
    <MenuPage foodData={foodData}/>
  )
}

export default Menu

export async function getStaticProps(){
    const res=await fetch("https://fakestoreapi.com/products")
    const foodData=await res.json()

    return{
        props:{foodData},
        revalidate:10 //seconds
    }
}