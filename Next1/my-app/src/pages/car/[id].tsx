import { NextPage } from 'next'
import { useRouter } from 'next/router'

const CarPage: NextPage = () => {
    const { push, replace, query } = useRouter(); 
    console.log( query );
    
    
  return (
   <div>
    <div>HOME</div>
        <button onClick={()=> push('/')}>Go home push</button>
        <button onClick={()=> replace('/')}>Go home replace</button>
   </div>

  )
}

export default CarPage