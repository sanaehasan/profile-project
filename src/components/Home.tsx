import { Link } from "react-router-dom";

export default function Home(){
    return <div className="relative isolate px-6 pt-4 lg:px-8 homediv">
     
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
         
          <div className="text-center">
            <h1 className="text-2xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
              Hello my name is sanae 
             
            </h1>
            <p className="mt-6 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
               I help turn ideas to reality
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/reachme"
                className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Contact me 
              </Link>
              <Link to="/projects" className="text-sm/6 font-semibold text-white">
                My Projects <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
        
        </div>
     
    
}