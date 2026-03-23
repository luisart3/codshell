import PAnimado from './assets/Personaje-Animado-3D-Playa.png'
import Profile1 from './assets/Profile-1.png'
import Profile2 from './assets/Profile-2.png'

import { StarIcon, PlusCircleIcon } from '@heroicons/react/24/solid'
import { NavBar } from './components/ui/navbar/NavBar'
import { Hero } from './components/ui/hero/Hero'

function App() {

  return (
    <>
      <div className='h-full'>
        <div className='hidden md:block fixed -z-40 md:right-0 pointer-events-none md:w-[40vh] lg:w-[55vh]   2xl:w-[73vh] '>
          <div className='h-full overflow-hidden rounded-4xl rounded-tr-none  rounded-tl-none rounded-br-none  '>
          <img src={PAnimado} className='min-h-screen w-full  object-cover object-top' alt='Personaje Animado' />
          </div>
          <div className='absolute -left-28 bottom-50'>
            <div className='bg-black/10 backdrop-blur-md rounded-full rounded-tr-none p-2'>
              <div className='flex justify-between items-center gap-5'>
                <div className='flex flex-row items-center gap-2'>
                  <div className='h-12 w-12 overflow-hidden'>
                    <img src={Profile2} className=' h-full w-full object-cover' />
                  </div>
                  <div className='flex flex-col space-y-2'>
                    <div className='border border-4 w-15 rounded-full border-gray-600'></div>
                    <div className='border border-4 w-25 rounded-full border-gray-300'></div>
                  </div>
                </div>
                <div className='flex items-center' >
                  <svg className='size-10' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.25 12.375C2.25 7.61154 6.11154 3.75 10.875 3.75H11.625C16.8027 3.75 21 7.94733 21 13.125V19.4318C21 20.2979 20.2979 21 19.4318 21H10.875C6.11154 21 2.25 17.1385 2.25 12.375V12.375Z" fill="#FDA122" />
                    <path d="M9 11.25H15" stroke="white" strokeLinecap="round" />
                    <path d="M9 14.25H13.5" stroke="white" strokeLinecap="round" />
                  </svg>

                </div>

              </div>
            </div>
          </div>
          <div className='absolute right-5 bottom-25'>
            <div className='bg-gradient-to-tr from-white/25 to-white/60 border border-white backdrop-blur-md rounded-full rounded-tr-none  p-2'>
              <div className='flex justify-between items-center gap-6'>
                <div className='flex flex-row items-center gap-3'>
                  <div className='h-12 w-12 overflow-hidden'>
                    <img src={Profile1} className='h-full w-full object-cover' />
                  </div>
                  <div className='flex flex-col gap-1.5'>
                    <div className='border border-4 w-15 rounded-full border-gray-600'></div>
                    <div className='flex'>
                      {Array.from({ length: 5 }, (_, i) => {
                        const n = i + 1;
                        return (
                          <StarIcon
                            key={n}
                            className={`size-4 text-amber-400 ${n === 5
                                ? "[mask-image:linear-gradient(to_right,black,transparent)]"
                                : ""
                              }`} />
                        )
                      })}
                    </div>
                  </div>
                </div>
                <div className='flex items-center'>
                  <PlusCircleIcon className='size-8 text-blue-600' />
                </div>
              </div>
            </div>
          </div>
         
        </div>
        <div className=' max-w-7xl mx-auto p-6 md:p-7 h-full'>
          <NavBar />
          <Hero />
        </div>
      </div>
    </>
  )
}

export default App
