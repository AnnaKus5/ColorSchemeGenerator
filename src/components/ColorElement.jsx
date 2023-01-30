export default function ColorElement({color, copyColorToClipboard}) {
    return (
        <div>
        <div className="color-section" style={{backgroundColor: color}}></div>
        <p className="color-name" onClick={copyColorToClipboard}>{color}</p>
        </div>
    )
}