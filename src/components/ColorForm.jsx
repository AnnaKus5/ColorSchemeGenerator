export default function ColorForm({getColorData, basicColor, setBasicColor, colorModeOptions, colorMode, setColorMode}) {

    function changeColorPalette(e) {
        e.preventDefault()
        getColorData()
    }

    return (
        <form className="color-form">
            <input type="color" className="color-input" value={basicColor} onChange={(e) => setBasicColor(e.target.value)}/>
            <select className="mode-select" id="mode-select" value={colorMode} onChange={(e) => setColorMode(e.target.value)}>
                {colorModeOptions.map(mode => {
                    return (
                        <option key={mode} value={mode}>{mode}</option>
                        )
                })}
            </select>
            <button onClick={(e) => changeColorPalette(e)}>Get color scheme</button>
        </form>
    )
}