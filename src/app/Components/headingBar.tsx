import { Weight } from "lucide-react"
import { Playfair_Display,Cinzel,Bodoni_Moda,Prata,Montserrat } from "next/font/google"

const font_playFair= Playfair_Display({subsets:["latin"]})
const font_Cinzel= Cinzel({subsets:["latin"]})
const font_Bodoni_Moda= Bodoni_Moda({subsets:["latin"]})
const font_Prata= Prata({subsets:["latin"], weight:"400"})
const font_Montserrat= Montserrat({subsets:["latin"]})

const HeadingBar = () => {
  return (
    <div className="bg-black w-full h-[122px] flex justify-center space-x-8 md:justify-between items-center px-10 flex-wrap">
      <h1 className={`${font_playFair.className} text-white text-2xl md:text-4xl` }>VERSACE</h1>
      <h1 className={`${font_Cinzel.className} text-white text-2xl md:text-4xl`}>ZARA</h1>
      <h1 className={`${font_Bodoni_Moda.className } text-white text-2xl md:text-4xl`}>GUCCI</h1>
      <h1 className={`${font_Prata.className} text-white text-2xl md:text-4xl`}>PRADA</h1>
      <h1 className={`${font_Montserrat.className} text-white text-2xl md:text-4xl`}>CALVIN KLEIN</h1>
    </div>
  )
}

export default HeadingBar