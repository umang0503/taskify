export default  function Newsletter() {
    return (
       <div className="flex flex-row items-center justify-evenly
 w-full h-screen bg-blue-200 ">
        <div>
            <h1 className="text-4xl font-bold text-center">Join our Newsletter</h1>
            <p className="text-center mt-2">Stay updated with the latest news and offers.</p>
            <form className="mt-4">
                <input type="email" placeholder="Enter your email" className="p-2 border rounded bg-white  font-bold "/>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded ml-2  font-bold ">Subscribe</button>
            </form>
        </div>
        <div>
        <img src="/newsletter.svg" alt="Animated Newsletter" className="w-80 h-90" />

        </div>
       </div>
    );
}