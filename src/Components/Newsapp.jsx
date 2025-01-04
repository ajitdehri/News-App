import { useEffect, useState } from 'react'
import Card from './Card'

const Newsapp = () => {
    const [search, setSearch] = useState("india");
    const [newsData, setNewsData] = useState(null)
    const API_KEY = "234293fabdc74f62a5958e7411a9050d";

    const getData = async () => {
        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles);
        let dt = jsonData.articles.slice(0, 10)
        setNewsData(dt)

    }

    useEffect(() => {
            getData()
        
    }, [])
   

    const handleInput = (e) => {
        console.log(e.target.value);
        setSearch(e.target.value)

    }
    const userInput = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div>
             
            <header className='border-b bg-blue-200 font-sans min-h-[60px] px-10 py-3 tracking-wide relative z-50'>
                <div className='flex flex-wrap items-center max-lg:gap-y-6 max-sm:gap-x-4'>
                    <h1 className="mb-4 text-sm font-medium text-gray-900 dark:text-white md:text-xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Latest</span> news.</h1>
                </div>

                <div
                    className="bg-gray-100 border border-transparent focus-within:border-blue-500 focus-within:bg-transparent flex items-center px-4 rounded-full h-10 lg:w-2/4 mt-3 mx-auto max-lg:mt-6 transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904"
                        className="w-4 h-4 fill-gray-500 mr-3">
                        <path
                            d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                        </path>
                    </svg>
                    <input type='text' placeholder='Search News'
                        className="w-full outline-none bg-transparent text-gray-600 font-semibold text-[15px]" value={search} onChange={handleInput} />
                    <button className='hover:text-blue-500' onClick={getData}>Search</button>
                </div>
            </header>

            <div className='mt-4'>
                <h1 className="mb-4 text-sm font-normal text-gray-900 dark:text-white md:text-xl lg:text-5xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Stay Update </span> with TrendyNews</h1>
            </div>


            <div className='categoryBtn'>
                <button className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 ' onClick={userInput} value="all">All News</button>
                <button className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800' onClick={userInput} value="technology">Technology</button>
                <button className='relative inline-flex items-center  justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800' onClick={userInput} value="sports">Sports</button>
                <button className='relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800' onClick={userInput} value="businees">Businees</button>
                <button className='relative inline-flex items-center  justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800' onClick={userInput} value="health">Health</button>
                <button className='relative inline-flex items-center  justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-black dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800' onClick={userInput} value="entertainment">Entertainment</button>
            </div>

            <div>
                {newsData ? <Card data={newsData} /> : null}

            </div>

           
        </div>
    )
}

export default Newsapp