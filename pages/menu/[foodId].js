import DetailsPage from "@/components/templates/DetailsPage"
import { notFound } from "next/navigation"


function FoodDetails({data}) {
   

  return (
    <DetailsPage {...data}/>
  )
}

export default FoodDetails


export async function getStaticPaths(){
    const res=await fetch("http://localhost:3001/data/")
    const json=await res.json()
    const data=json.slice(0,10)
    
    const paths=data.map(food=>
        ({params:{foodId:food.id.toString()}})
    )

    return{
        paths,
        fallback:"blocking",
    }
}

export async function getStaticProps(context){
        const {params}=context
        const res=await fetch(`http://localhost:3001/data/${params.foodId}`)
        const data=await res.json()

        if(!data.id){
            return{
                notFound:true
            }
        }

        return{
            props:{
                data
            }
        }
}