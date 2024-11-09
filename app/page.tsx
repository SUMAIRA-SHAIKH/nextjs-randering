import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
   // <h1>hello world</h1>
   
    <div>

  <h1 style={{color:"blue",fontSize:30}}>This is my first website HOME page </h1>  
    <ul >
    <Link href="/"><li>Home</li></Link>

    <Link href="/About-Us"><li>About-Us</li></Link>

    <Link href="/Career">
    <li>Career</li>

    <Link href="/About-Us/Sumaira/Education"><li>SUMAIRA</li></Link>
    
    </Link>

  </ul>
  
  </div>

   
  );
}
