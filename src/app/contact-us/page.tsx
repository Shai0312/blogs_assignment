export default function Contactus(){
    return(
        <section className="bg-black py-12 ">
      <div className="container mx-auto  px-6 ">
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>
        <div className="max-w-lg mx-auto bg-black border-solid border-2 border-teal-400 p-8 shadow-lg rounded-lg">
          <form action="/api/contact" method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block text-xl font-medium text-gray-300">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-indigo-500" 
              />
            </div>
            
            <div className="mb-4">
              <label htmlFor="email" className="block text-xl font-medium text-gray-300">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-indigo-500"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-xl font-medium text-gray-300">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows= {4} 
                required 
                className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-indigo-500"
              ></textarea>
            </div>

            <div className="text-center">
              <button 
                type="submit" 
                className=" hover:shadow-[0px_4px_10px_rgba(0,128,128,0.4)]
              >inline-block bg-indigo-600 text-white py-2 px-6 rounded-md hover hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    )
}