export default function Projects(){
    const projects=[
   {
    id: 1,
    title: 'NC-News',
    
    description:`It’s a mini news app, The API was developed using PSQL and React using an MVC model hosted using
SuperBase for the database and Render for the backend. The front end was developed using ReactJs and
deployed by using NetLify`,
    href: 'https://sanae-nc-news.netlify.app/',
    imageUrl:
        '../../nc-news.png',
    },
    {
    id: 2,
    title: 'Ripple',

    description:`Ripple is an app for good aimed to share extra items with needy people, The backend was developed using the MVC
model and the front end was developed using NextJs.The app
implemented Postgis for geolocalisation in the backend and Mapbox in the front end of the app`,
href: 'https://ripple-rouge.vercel.app/',
      imageUrl:
        '../../ripple.png',
 },{
    id: 3,
    title: 'Events manager',
    description:`It's an event management app that i created MVP for as a freelancer. I was responsible for developing and
managing this project and used Node.js and Express in the backend, Typescript, React and Tailwind in the
frontend.`,
    href: 'https://events-surfer.netlify.app/',
    imageUrl:
        '../../event-manager.png',
    },
         {
    id: 4,
    title: 'Oasis',
 
    description:
      `An app developed using ReactJs and Java. the MapBox API had been used for the map element of the app. This app aimed to tackle water scarcities in remote areas`,
    
    href: 'https://splashpool.github.io/',
    imageUrl:
        '../../oasis.png',
  }
    ]
    return(

    
     <div className="bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">My Projects</h2>
          <p className="mt-2 text-lg/8 text-gray-600">This is some projects i created</p>
        </div>
        <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-5 sm:mt-16 sm:pt-6 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {projects.map((project)=>(
            <article key="1" className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
               
              </div>
              <div className="group relative grow">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href={project.href} target="_blank">
                    <span className="absolute inset-0" />
                   {project.title}
                  </a>
                </h3>
                <img className="mt-5 " src={project.imageUrl}/>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
              
                <div className="text-sm/6">
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            </article>
))}
        </div>
      </div>
    </div>
    )
}