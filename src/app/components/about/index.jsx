import React from 'react'
import clsx from "clsx";

const ItemLayout = ({ children, className }) => {
    return (
        <div className={clsx('custom-bg p-8 rounded-xl flex items-center justify-center', className)}>
            {children}
        </div>
    )
}


const AboutDetails = () => {
    return (
        <section className='w-full py-1'>
            <div className='grid grid-cols-12 gap-8 w-full'>

                <ItemLayout className={'col-span-8 row-span-2 flex-col items-start'}>
                    <h2 className='text-4xl text-left w-full capitalize'>
                        May the source code be with you
                    </h2>
                    <p className='font-light text-sm'>
                        I am a software engineer with a passion for building web applications and exploring new technologies. I have experience in full-stack development, and I enjoy working on projects that challenge me to learn and grow.
                    </p>
                </ItemLayout>

                <ItemLayout className={'col-span-4 text-accent'}>
                    <div className='font-semibold w-full text-left text-5xl'>
                        10+ <sub className='font-semibold text-base'>industries</sub>
                    </div>
                </ItemLayout>

                <ItemLayout className={'col-span-4 text-accent'}>

                    <div className='font-semibold w-full text-left text-5xl'>
                        15+ <sub className='font-semibold text-base'>years of experience</sub>
                    </div>
                </ItemLayout>

                <ItemLayout className={'col-span-8 !p-0'}>
                    <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api?username=duaneq&theme=transparent&hide_border=true&title_color=FEFE58"
                        alt='duaneQ'
                        loading='lazy' />
                </ItemLayout>

                <ItemLayout className={'col-span-4 !p-0'}>
                    <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api/top-langs/?username=duaneq&theme=transparent&hide_border=true&title_color=FEFE58"
                        alt='duaneQ'
                        loading='lazy' />
                </ItemLayout>

                <ItemLayout className={'col-span-full !p-0'}>
                    <img className='w-full h-auto' src="https://skillicons.dev/icons?i=js,html,css,androidstudio,flutter,react,tailwind,git,github,figma,vscode,java,python,mysql,mongodb,angular,apple,aws,azure,bitbucket,cypress,docker,dotnet,eclipse,gradle,ai,jest,kubernetes,maven,nextjs,postman,postgress,ubuntu"
                        alt='duaneQ'
                        loading='lazy' />
                </ItemLayout>

                <ItemLayout className={'col-span-6 !p-0'}>
                    <img className='w-full h-auto' src="https://github-readme-streak-stats.herokuapp.com?user=duaneq&theme=dark&hide_border=true&type=png&background=EB545400&ring=32EB6F"
                        alt='duaneQ'
                        loading='lazy' />
                </ItemLayout>

                <ItemLayout className={'col-span-8 !p-0'}>
                    <img className='w-full h-auto' src="https://github-readme-stats.vercel.app/api/pin/?username=duaneq&repo=NextJs-Portfolio&theme=transparent&hide_border=true&title_color=FEFE58"
                        alt='duaneQ'
                        loading='lazy' />
                </ItemLayout>
            </div>
        </section>
    )
}

export default AboutDetails