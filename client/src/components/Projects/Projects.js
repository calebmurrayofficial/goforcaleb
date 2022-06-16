import React from 'react';

const projects = [
    {
        name: 'project 1',
        description: 'this is the first project i made',
        imageSrc: '',
        href: ''
    },
    {
        name: 'project 2',
        description: 'this is the second project i made',
        imageSrc: '',
        href: '/'
    },
    {
        name: 'project 3',
        description: 'this is the third project i made',
        imageSrc: '',
        href: '/'
    },
    {
        name: 'project 4',
        description: 'this is the fourth project i made',
        imageSrc: '',
        href: '/'
    },
    {
        name: 'project 5',
        description: 'this is the fifth project i made',
        imageSrc: '',
        href: '/'
    },
]

 const Projects = () => {
  return (
    <div id='projects' className='container mx-auto flex-row items-center space-y-5 '>
        <h2 className='text-4xl font-bold text-center p-2'>Projects</h2>
        <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6">
            {projects.map((project) => (
            <div key={project.name} className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <img
                    src={project.imageSrc}
                    className="w-full h-full object-center object-cover"
                />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                <a href={project.href}>
                    <span className="absolute inset-0" />
                    {project.name}
                </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{project.description}</p>
            </div>
            ))}
        </div>
    </div>
  );
}

export default Projects;
