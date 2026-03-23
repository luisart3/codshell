
import { PlayCircleIcon } from "@heroicons/react/24/solid"
import { ArrowDownIcon } from "@heroicons/react/16/solid"


export const Hero = () => {
    
    return (
        <>
            <div className=" fixed top-1/2 -translate-y-1/2 w-full  md:max-w-[300px] lg:max-w-[550px]  2xl:max-w-[600px]">
                    <div className="flex flex-col space-y-6">
                        <div className="flex items-center border border-gray-500/30 rounded-full p-1.5 gap-2 cursor-pointer w-fit  hover:bg-gray-50">
                            <PlayCircleIcon className="size-6 text-amber-500" />
                            <p className=" font-semibold text-sm">Introducing Codshell</p>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <h2 className=" text-4xl lg:text-7xl font-bold text-black ">Work the way you want</h2>
                            <p className="text-xl text-gray-600 ">A new professional network for your independent journey</p>
                        </div>
                        <div className=" relative w-sm pl-5 p-3 border border-gray-400/80 rounded-4xl">

                            <input id="email" name="email" type="email" 
                                autoComplete="email"
                                placeholder="email" 
                                defaultValue="iwant@findajob.com"
                                className="block outline-0 font-medium text-md text-zinc-800 " />
                            <button type="button" className=" cursor-pointer absolute right-0 -translate-y-1/2 top-1/2 bg-[#135CE7] hover:bg-[#1649b7] px-6 py-3 rounded-full text-white text-[18px] font-semibold">Get Started</button>
                        </div>
                        
                    </div>

            </div>
            <div className=" fixed  bottom-8">
                <div className="w-fit rounded-full p-2 bg-zinc-100">
                        <ArrowDownIcon className="size-6" />
                </div>
            </div>
        </>

    )
}