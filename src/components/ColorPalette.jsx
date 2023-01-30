import { useState } from "react"
import ColorElement from "./ColorElement"

export default function ColorPalette({colorPaletteData}) {

  const [isColorInClipborad, setIsColorInClipboard ] = useState(false)

  function copyColorToClipboard(e) {

    navigator.clipboard.writeText(e.target.innerText)
    setIsColorInClipboard(true)

    setTimeout(() => {
      setIsColorInClipboard(false)
    }, 3000)

  }

    return (
      <>
        <div className="color-palette-container">
        { colorPaletteData.length > 0 ? 
          colorPaletteData.map(color => {
            return <ColorElement key={color} color={color} copyColorToClipboard={copyColorToClipboard}/>
          }) :
          <p>Loading the best colors...</p>
        } 
        </div>
        {isColorInClipborad && <p className="color-copy-alert">Color copy to clipboard!</p>}
        </>
    )
}