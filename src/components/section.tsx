import Link from "next/link"
export default function Section(){
    return(
        
        <div className="flex justify-center w-[100%] h-[100%] flex-wrap p-10 gap-6 " >
        <div className="h-[400px] w-[300px] border-solid border-2 border-teal-400 p-2 m-4 rounded-lg mt-10 bg-black transition-all duration-300 group cursor-pointer hover:scale-110 filter group-hover:blur-sm hover:shadow-[0px_4px_10px_rgba(0,128,128,0.7)] ">
            <div className=""><img src="https://img.freepik.com/premium-vector/colorful-vector-illustration-people-run-their-goal-move-up-by-motivation-goal-achievement-concept-goal-achievement-business-winner-victory-first-place-number-one_569417-746.jpg" alt="goal image"  height={"300"} width={"400"} className="rounded-tr-md rounded-tl-md"/>
                <div className="text-gray-300 font-serif text-2xl mt-4 text-center"><h1>Career Goals</h1>
                <div className="text-gray-300 font-serif text-base mt-2"><p>A clear career goal serves as a compass,guiding you towards success with purpose and direction.</p></div>
                <button className=" font-serif border-solid border-2 border-teal-300 text-base  p-2 m-3 rounded-md hover:bg-teal-700  hover:shadow-[0px_4px_10px_rgba(0,128,128,0.5)]"><Link href={"/carda"}>Read More</Link></button>
                </div>
            </div>
        </div>
        <div className="  h-[400px] w-[300px] border-solid border-2 border-teal-400 p-2 m-4 rounded-lg mt-10  bg-black transition-all duration-300 group cursor-pointer hover:scale-110 filter group-hover:blur-sm hover:shadow-[0px_4px_10px_rgba(0,128,128,0.7)]">
        <div className=""><img src="https://cdn.pixabay.com/photo/2024/05/20/08/19/ai-generated-8774131_640.jpg" alt="goal image"  height={"300"} width={"400"} className="rounded-tr-md rounded-tl-md"/>
            <div className="text-gray-300 font-serif text-2xl mt-4 text-center"><h1>Developing soft skills</h1>
            <div className="text-gray-300 font-serif text-base mt-2"><p>It enhances your ability to lead,collaborate,and communicate effectively in any professional setting.</p></div>
            <button className=" font-serif border-solid border-2 border-teal-300 text-base  p-2 m-4 rounded-md hover:bg-teal-700  hover:shadow-[0px_4px_10px_rgba(0,128,128,0.5)]"><Link href={"/cardb"}>Read More</Link></button>
            </div>
        </div>
    </div>
    <div className="  h-[400px] w-[300px] border-solid border-2 border-teal-400 p-2 m-4 rounded-lg mt-10  bg-black transition-all duration-300 group cursor-pointer hover:scale-110 filter group-hover:blur-sm hover:shadow-[0px_4px_10px_rgba(0,128,128,0.7)]">
        <div className=""><img src="https://cdn.pixabay.com/photo/2024/02/21/07/25/business-coach-8586938_640.jpg" alt="goal image"  className="rounded-tr-md rounded-tl-md h-[190px] w-[350px]"/>
            <div className="text-gray-300 font-serif text-2xl mt-3 text-center"><h1>Personal Branding for Career Success</h1>
            <div className="text-gray-300 font-serif text-base mt-1"><p>It showcasing your unique strengths and driving your career success.</p></div>
            <button className=" font-serif border-solid border-2 border-teal-300 text-base  p-2 m-3 rounded-md hover:bg-teal-700  hover:shadow-[0px_4px_10px_rgba(0,128,128,0.5)]"><Link href={"/cardc"}>Read More</Link></button>
            </div>
        </div>
    </div>
    <div className="h-[400px] w-[300px] border-solid border-2 border-teal-400 p-2 m-4 rounded-lg mt-12  bg-black transition-all duration-300 group cursor-pointer hover:scale-110 filter group-hover:blur-sm hover:shadow-[0px_4px_10px_rgba(0,128,128,0.7)]">
            <div className=""><img src="https://img.freepik.com/premium-vector/work-life-balance-illustration-person-balancing-with-job-leisure-activities-multitasking_2175-16697.jpg" alt="goal image" className="rounded-tr-md rounded-tl-md h-[180px] w-[300px]"/>
                <div className="text-gray-300 font-serif text-2xl mt-2 text-center"><h1>Balancing Work and Life</h1>
                <div className="text-gray-300 font-serif text-base mt-1 "><p>Balancing work and life fosters harmony,reducing stress while both personal and professional fulfillment thrive.</p></div>
                <button className=" font-serif border-solid border-2 border-teal-300 text-base  p-2 m-3 rounded-md hover:bg-teal-700  hover:shadow-[0px_4px_10px_rgba(0,128,128,0.5)]"><Link href={"/cardd"}>Read More</Link></button>
                </div>
            </div>
        </div>
        <div className="  h-[400px] w-[300px] border-solid border-2 border-teal-400 p-2 m-4 rounded-lg mt-12  bg-black transition-all duration-300 group cursor-pointer hover:scale-110 filter group-hover:blur-sm hover:shadow-[0px_4px_10px_rgba(0,128,128,0.7)]">
        <div className=""><img src="https://img.freepik.com/free-vector/time-management-cartoon-composition-with-winners-cup-business-planning-creative-idea-goal-flat-icons-vector-illustration_1284-80552.jpg" alt="goal image" className="rounded-tr-md rounded-tl-md h-[180px] w-[280px]"/>
            <div className="text-gray-300 font-serif text-2xl mt-2 text-center"><h1>Effective Time Management</h1>
            <div className="text-gray-300 font-serif text-base"><p>Effective time management turns goals into reality by maximizing productivity and minimizing distractions.</p></div>
            <button className=" font-serif border-solid border-2 border-teal-300 text-base  p-2 m-2 rounded-md hover:bg-teal-700  hover:shadow-[0px_4px_10px_rgba(0,128,128,0.5)]"><Link href={"/carde"}>Read More</Link></button>
            </div>
        </div>
    </div>
    <div className="  h-[400px] w-[300px] border-solid border-2 border-teal-400 p-2 m-4 rounded-lg mt-12 bg-black transition-all duration-300 group cursor-pointer hover:scale-110 filter group-hover:blur-sm hover:shadow-[0px_4px_10px_rgba(0,128,128,0.7)]">
        <div className=""><img src="https://blog.gocrackit.com/wp-content/uploads/2024/05/Picture1-1.png" alt="goal image" className="rounded-tr-md rounded-tl-md h-[180px] w-[300px]"/>
            <div className="text-gray-300 font-serif text-2xl mt-3 text-center"><h1>Seeking Mentorship</h1>
            <div className="text-gray-300 font-serif text-base "><p>Seeking mentorship accelerates your growth with valueable guidance,insights and support from experienced professionals.</p></div>
            <button className=" font-serif border-solid border-2 border-teal-300 text-base  p-2 m-3 rounded-md hover:bg-teal-700  hover:shadow-[0px_4px_10px_rgba(0,128,128,0.5)]"><Link href={"/cardf"}>Read More</Link></button>
            </div>
        </div>
    </div>
               
               
    </div>      
    )
}