import { PureComponent, useRef, useState } from "react"
import Chart from "../Components/Graph"
import Graph from "../Components/Graph"

const Interview = () => {
    const [heroData, setHeroData] = useState({})
    const [compareData, setCompareData] = useState([])
    const heroDataRef = useRef()
    const handleLoadData = (e) => {
        const data = localStorage.getItem('heroData')
        const parseData = JSON.parse(data)
        const { id, ...hero } = parseData.find(i => i.id === e.target.value)
        heroDataRef.current = hero
        setHeroData(hero)
    }

    const handleChange = (e) => {
        setHeroData(p => ({ ...p, [e.target.name]: e.target.value }))
    }

    const handleCheck = () => {
        const data = []
        for (const key in heroDataRef.current) {
            const element1 = heroDataRef.current[key];
            const element2 = heroData[key];
            const item = { name: key, pv: element1, uv: element2 }
            data.push(item)
        }
        setCompareData(data)
    }
    console.log(compareData)
    return (
        <><div className="interveiw">
            <div className="inputform" >
                <div>
                    <label htmlFor="id" style={{ marginRight: '.5rem' }}>ID:</label>
                    <input type="number" id="id" onChange={handleLoadData} name="id" />
                </div>
                <div style={{ flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <label htmlFor="strength" style={{ marginRight: '.5rem' }}>How strong are you?</label>
                    <input type="range" value={heroData?.strength || 0} id="strength" onChange={handleChange} name="strength" />
                </div>
                <div style={{ flexDirection: 'column', alignItems: 'center', gap: '1rem' }} >
                    <label htmlFor="invisibility" style={{ marginRight: '.5rem' }}>Your invisibility power -</label>
                    <input type="range" id="invisibility" value={heroData?.invisibility || 0} onChange={handleChange} name="invisibility" />
                </div>
                <div style={{ flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <label htmlFor="healing" style={{ marginRight: '.5rem' }}>How fast can you heal?</label>
                    <input type="range" id="healing" onChange={handleChange} value={heroData?.healing || 0} name="healing" />
                </div>
                <div style={{ flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <label htmlFor="shape_shift" style={{ marginRight: '.5rem' }}>Your Shape Shift</label>
                    <input type="range" id="shape_shift" onChange={handleChange} value={heroData?.shape_shift || 0} name="shape_shift" />
                </div>
                <div style={{ flexDirection: 'column', alignItems: 'center', gap: '1rem' }} >
                    <label htmlFor="telekinesis" style={{ marginRight: '.5rem' }}>Your telekinesis power -</label>
                    <input type="range" id="telekinesis" onChange={handleChange} value={heroData?.telekinesis || 0} name="telekinesis" />
                </div>
                <button type="button" onClick={handleCheck}>Check</button>
            </div>



        </div>
            {compareData.length && <Graph data={compareData} />}
        </>
    )
}

export default Interview