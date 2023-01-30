import { useEffect, useState } from 'react'
import './App.css'
import ColorForm from './components/ColorForm'
import ColorPalette from './components/ColorPalette'


function App() {

  const [colorPaletteData, setColorPaletteData] = useState([])
  const [basicColor, setBasicColor] = useState("#0047AB")
  const [colorMode, setColorMode] = useState("monochrome") 
  const colorModeOptions = ["monochrome", "monochrome-dark", "monochrome-light", "analogic", "complement", "analogic-complement","triad", "quad"]

  const getColorData = async () => {
    const basicColorWithoutHash = basicColor.slice(1)
    try {
      const response = await fetch(`https://www.thecolorapi.com/scheme?hex=${basicColorWithoutHash}&mode=${colorMode}`)
      const data = await response.json()
      const colorArr = data.colors.map(color => color.hex.value)
      setColorPaletteData(colorArr)
    } 
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getColorData()
  }, [])


return (
  <>
    <ColorForm 
      getColorData={getColorData} 
      basicColor={basicColor} 
      setBasicColor={setBasicColor}
      colorMode={colorMode}
      setColorMode={setColorMode}
      colorModeOptions={colorModeOptions}/>
    <ColorPalette 
      colorPaletteData={colorPaletteData}/>
  </>
)

}

export default App