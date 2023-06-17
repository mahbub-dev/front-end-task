import { useRef, useState } from "react"
import Graph from "../Components/Graph"


const Interview = () => {
    const [compareData, setCompareData] = useState([])
    const heroDataRef = useRef()
    const initialInput = { id: 0, strength: 0, invisibility: 0, healing: 0, shape_shift: 0, telekinesis: 0 }
    const [inputData, setInputData] = useState(initialInput)
    const style = { main: { flexDirection: 'column', alignItems: 'center', gap: '1rem' }, sub: { width: '100%' } }
    const handleLoadData = (e) => {
        const data = localStorage.getItem('heroData')
        const parseData = JSON.parse(data)
        const { id, ...hero } = parseData.find(i => i.id === e.target.value)
        heroDataRef.current = hero
    }

    const handleChange = (e) => {
        setInputData(p => ({ ...p, [e.target.name]: e.target.value }))
    }

    const handleCheck = () => {
        const data = []
        for (const key in heroDataRef.current) {
            const element1 = heroDataRef.current[key];
            const element2 = inputData[key];
            const item = { name: key, pv: element1, uv: element2 }
            data.push(item)
        }
        setCompareData(data)
    }
    return (
        <><div className="interveiw">
        </div>
            {compareData.length === 0 ? <div className="inputform" >


                <div>
                    <label htmlFor="id" style={style.sub}>ID:</label>
                    <input type="number" id="id" onChange={handleLoadData} name="id" />
                </div>
                <div style={style.main}>
                    <label htmlFor="strength" style={style.sub}>How strong are you?</label>
                    <input type="range" style={style.sub} value={inputData?.strength} id="strength" onChange={handleChange} name="strength" />
                </div>
                <div style={style.main} >
                    <label htmlFor="invisibility" style={style.sub}>Your invisibility power -</label>
                    <input type="range" style={style.sub} id="invisibility" value={inputData?.invisibility} onChange={handleChange} name="invisibility" />
                </div>
                <div style={style.main}>
                    <label htmlFor="healing" style={style.sub}>How fast can you heal?</label>
                    <input type="range" style={style.sub} id="healing" onChange={handleChange} value={inputData?.healing} name="healing" />
                </div>
                <div style={style.main}>
                    <label htmlFor="shape_shift" style={style.sub}>Your Shape Shift</label>
                    <input type="range" style={style.sub} id="shape_shift" onChange={handleChange} value={inputData?.shape_shift} name="shape_shift" />
                </div>
                <div style={style.main} >
                    <label htmlFor="telekinesis" style={style.sub}>Your telekinesis power -</label>
                    <input type="range" style={style.sub} id="telekinesis" onChange={handleChange} value={inputData?.telekinesis} name="telekinesis" />
                </div>
                <button type="button" onClick={handleCheck}>Check</button>
            </div> : <Graph data={compareData} />}
        </>
    )
}

export default Interview