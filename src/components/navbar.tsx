import Link from "next/link"
export default function Navbar(){
    return(
    
        
            <nav className=" flex justify-between p-5 mx-5 sm:flex-col md:item-center  lg:flex-row     ">
        <h1 className="  text-gray-400 text-4xl font-serif font-semibold ">Shaista Khan</h1>
   <ul className=" flex items-center gap-10 text-gray-400 text-3xl font-serif  ">
    <li className="hover:text-teal-300 hover:border-b-2 border-solid rounded-[15px] border-teal-300 "><Link href={"/"}>Home</Link></li>
    <li className=" hover:text-teal-300 hover:border-b-2 border-solid rounded-[15px] border-teal-300"><Link href={"/about-us"}>About us</Link></li>
    <li className=" hover:text-teal-300 hover:border-b-2 border-solid rounded-[15px] border-teal-300"><Link href={"/blogs"}>Blogs</Link></li>
    <li className=" hover:text-teal-300 hover:border-b-2 border-solid rounded-[15px] border-teal-300"><Link href={"/contact-us"}>Contact us</Link></li>
   </ul>
   </nav>
       
    
       
    )
}