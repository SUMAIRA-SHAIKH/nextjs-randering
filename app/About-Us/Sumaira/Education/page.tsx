import { text } from "stream/consumers";
import Link from "next/link";

export default function Education(){
    return (
        <div>
            <h1 style={{color:"green",fontSize:30}}>****This is Sumaira's page****</h1>
            <h1 style={{color:"green",fontSize:25}}>Sumaira Aziz</h1>
       <h1>Software Engineer</h1>
       <h1>batch-1, Quarter-2 Governor House</h1>
       <h1>Tuesday 2-5</h1>
       <Link href="/About-Us"><li>About-Us</li></Link>
       <Link href="/"><li>HOME</li></Link>

       </div>
    )
   }
