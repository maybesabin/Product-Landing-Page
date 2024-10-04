const Review = ({ image, name, action, icon, isDarkMode }: { image: string, name: string, action: string, icon: string, isDarkMode: boolean }) => {
    return (
        <div className={`rounded-full cursor-pointer hover:scale-[1.025] transition-all border border-zinc-600 w-56 h-14 flex items-center justify-start px-2 ${isDarkMode ? "bg-black hover:bg-[#131313]" : "bg-white shadow-lg border-none text-black hover:bg-none"} gap-4 relative`}>
            <div className={`absolute -top-4 right-1 ${isDarkMode ? "bg-zinc-800" : "bg-white shadow-lg"} rounded-full p-2`}>
                <img src={icon} width={'17px'} alt="" />
            </div>
            <div className="flex items-center justify-center gap-4">
                <img src={image} width={'40px'} alt="" />
                <div className="flex flex-col items-start">
                    <h1>{name}</h1>
                    <p className="text-zinc-500 text-xs">{action}</p>
                </div>
            </div>
        </div>
    )
}

export default Review