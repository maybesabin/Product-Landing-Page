import blackbottle from '../assets/images/whitebottle.png'
import Navbar from '../components/Navbar';
import energy from '../assets/images/energy.png'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { useEffect, useState } from 'react';
import Review from '../components/Review'
import heart from '../assets/images/heart.png'
import lock from '../assets/images/lcok.png'
import boy from '../assets/images/boy.png'
import girl from '../assets/images/girl.png'
import circleArrow from '../assets/images/circle arrow.png'
import test from '../assets/images/test.png'
import bgtest from '../assets/images/bgtest.jpg'
import gsap from "gsap";
import SplitText from 'gsap-trial/SplitText';

const App = () => {
    useEffect(() => {
        gsap.fromTo(
            ".fade-in-slow",
            { y: -40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 2, ease: "back.inOut" }
        )
        gsap.fromTo(
            ".fade-delay",
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay: 2.5, ease: "back.inOut" }
        )
        gsap.fromTo(
            ".fade-in",
            { y: 120, opacity: 0},
            { y: 0, opacity: 1, duration: 1.5, delay: 0, ease: "back.inOut"  }
        )
        gsap.fromTo(
            ".fade",
            { opacity: 0},
            { opacity: 1, duration: 3, delay: 0, ease: "back.inOut"  }
        )
        gsap.fromTo(
            ".fade-left",
            { x:-120, opacity: 0},
            { x:0, opacity: 1, duration: 1.5, delay: 2, ease: "back.inOut"  }
        )
        let mySplitText = new SplitText(".split", {type: "chars"})
        let chars = mySplitText.chars;
        gsap.from(chars, {
            yPercent: 100,
            opacity: 0,
            stagger: 0.04,
            ease: "back.out",
            duration: 1,
            delay: 0.4
        })
    }, [])

    const [activeItem, setActiveItem] = useState("")

    const [isDarkMode, setIsDarkMode] = useState(true);

    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    return (
        <div className={`${isDarkMode ? "bg-[#151515]" : "bg-white"} flex flex-col items-center justify-start py-12 h-screen w-screen text-white overflow-hidden relative`}>

            <div className={`w-full z-[997] bg-transparent fade-in-slow`}>
                <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
            </div>

            <section className='flex items-start justify-center gap-[12rem] pt-[14rem] w-full'>

                <div className='flex flex-col items-start gap-9 -mt-12'>
                    <div className={`text-[5.5rem] ${isDarkMode ? "text-white" : "text-black"} flex flex-col items-start leading-[6rem] tracking-[0.15rem] font-bold`}>
                        <h1 className='split'>Organic</h1>
                        <div className='relative'>
                            <h1 className='z-[992] relative split'>kohaku</h1>
                            <img className={`absolute -top-6 -right-2 z-[991] fade ${isDarkMode ? "brightness-75" : "brightness-150"}`} src={test} width={'180px'} alt="" />
                            <img className={`absolute -top-6 -left-2 z-[991] fade ${isDarkMode ? "brightness-75" : "brightness-150"}`} src={test} width={'180px'} alt="" />
                        </div>
                        <h1 className='flex items-center gap-2 z-[992] fade-left'>water <img className='rotate-12 hover:rotate-[25deg] hover:scale-125 transition-all cursor-pointer' src={energy} width={'80px'} alt="" /> </h1>
                    </div>

                    <h3 className={`${isDarkMode ? "text-white" : "text-black"} text-6xl fade-delay`}>&pound;32.00</h3>
                    <div className='absolute top-[54%] right-[36%] z-[999] fade'>
                        <img src={circleArrow} className='w-[90px] rotate-[370deg] scale-[-1]' alt="" />
                    </div>

                    <p className='text-zinc-500 w-[400px] z-[995] fade-delay'>Stay Hydrated, Stay Inspired: Discover the Ultimate Water Bottle for Every Adventure!</p>

                    <div className='flex items-center gap-6 group fade-delay'>
                        <button
                            className={`flex items-center gap-4 ${isDarkMode ? "bg-white text-black group-hover:bg-black group-hover:text-white"
                                : "bg-[#151515] text-white group-hover:bg-zinc-200 group-hover:text-black"} pl-6 pr-12 py-3 rounded-full transition-all duration-500 ease-in-out`}>

                            <svg xmlns="http://www.w3.org/2000/svg" className={`${isDarkMode ? "stroke-black group-hover:stroke-white" : "stroke-white group-hover:stroke-black"} 
                            transition-all icon icon-tabler icon-tabler-check"`} width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M5 12l5 5l10 -10" />
                            </svg>
                            <h1 className='font-semibold'>Add to cart</h1>
                        </button>
                        <svg className='z-[995]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"
                            color={isDarkMode ? "white" : "black"} fill="none">
                            <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                    </div>
                </div>

                <div className='relative flex items-center justify-center'>
                    <div className={`absolute fade flex items-center justify-center -top-[5rem] -left-[6.5rem] h-[95%] w-[400px] ${isDarkMode ? "bg-[#6a787b] green-shadow" : "bg-[#9aadb1] black-shadow"} border-none rounded-full rounded-b-none z-[995]`}>
                        <img src={bgtest} className='rounded-full rounded-b-none w-full h-full' alt="" />
                    </div>
                    <img src={blackbottle} className='fade-in w-[200px] relative z-[997]' alt="" />

                    <div className='absolute top-[5rem] -right-[17rem] z-[997] fade-in-slow'>
                        <Review isDarkMode={isDarkMode} icon={heart} name='Kohaku' action='has liked this item' image={girl} />
                    </div>

                    <div className='absolute bottom-[40%] -left-[10rem] z-[997] fade-delay'>
                        <Review isDarkMode={isDarkMode} icon={lock} name='Mayo Shiro' action='has just purchased' image={boy} />
                    </div>

                    <div className='absolute fade bottom-[7rem] left-[4rem] z-[997] rounded-full border border-black p-6' id='arrow-down'>
                        <svg width="24" height="24" className='rotate-90' xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" /></svg>
                    </div>
                </div>


                <div className='flex flex-col items-start justify-between h-[90%] gap-6 -mt-12 fade-in-slow'>
                    <div className='flex items-center gap-6'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="rotate-180 stroke-zinc-500 icon icon-tabler icon-tabler-arrow-right" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l14 0" />
                            <path d="M13 18l6 -6" />
                            <path d="M13 6l6 6" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-zinc-500 icon icon-tabler icon-tabler-arrow-right" width="32" height="32" viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l14 0" />
                            <path d="M13 18l6 -6" />
                            <path d="M13 6l6 6" />
                        </svg>
                    </div>

                    <Accordion type="single" collapsible className='fade-delay'>
                        <AccordionItem value="item-1" className='w-[250px]'>
                            <AccordionTrigger
                                className={`${activeItem === 'item-1' ? "text-white" : "text-zinc-500"} ${isDarkMode ? "" : "text-black"} text-xl hover:no-underline`}
                                onClick={() => setActiveItem('item-1')}
                            >Description</AccordionTrigger>
                            <AccordionContent className='text-zinc-500'>
                                Fresh, tangy, and zesty lime with refreshing minty notes.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className='w-[250px]'>
                            <AccordionTrigger
                                className={`${activeItem === 'item-2' ? "text-white" : "text-zinc-500"} ${isDarkMode ? "" : "text-black"} text-xl hover:no-underline`}
                                onClick={() => setActiveItem('item-2')}
                            >Nutrition</AccordionTrigger>
                            <AccordionContent className='text-zinc-500'>
                                Calories, protein, and other nutritional information.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className='w-[250px] border-b-0'>
                            <AccordionTrigger
                                className={`${activeItem === 'item-3' ? "text-white" : "text-zinc-500"} ${isDarkMode ? "" : "text-black"} text-xl hover:no-underline`}
                                onClick={() => setActiveItem('item-3')}
                            >Ingredients</AccordionTrigger>
                            <AccordionContent className='text-zinc-500'>
                                Fresh, tangy, and zesty lime with refreshing minty notes.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
            </section>
        </div>
    )
}

export default App;