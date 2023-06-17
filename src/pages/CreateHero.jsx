import { useState } from "react"
import { toast } from "react-toastify"

const CreateHero = () => {
    const [inputData, setInputData] = useState({})
    const handleChange = (e) => {
        setInputData(p => ({ ...p, [e.target.name]: e.target.value }))
    }
    const handleCreate = (e) => {
        e.preventDefault()
        const preData = localStorage.getItem('heroData')
        if (preData) {
            const parsePreData = JSON.parse(preData)
            if (parsePreData.some(i => i.id === inputData.id)) {
                toast.warning('The id is already inserted')
                return
            }
            const newData = [...parsePreData, inputData]
            const data = JSON.stringify(newData)
            localStorage.setItem('heroData', data)
            e.target.reset()
        } else {
            const data = JSON.stringify([inputData])
            localStorage.setItem('heroData', data)
            e.target.reset()
        }
        toast.success('One Hero is Created')
    }
    return (
        <div className="cratehero">
            <form className="inputform" onSubmit={handleCreate} >
                <div>
                    <label htmlFor="id" style={{ marginRight: '.5rem' }}>ID:</label>
                    <input onChange={handleChange} type="number" id="id" name="id" />
                </div>
                <div>
                    <label htmlFor="strength" style={{ marginRight: '.5rem' }}>Strength:</label>
                    <input type="range" onChange={handleChange} id="strength" name="strength" />
                </div>
                <div>
                    <label htmlFor="invisibility" style={{ marginRight: '.5rem' }}>Invisibility:</label>
                    <input type="range" id="invisibility" onChange={handleChange} name="invisibility" />
                </div>
                <div>
                    <label htmlFor="healing" style={{ marginRight: '.5rem' }}>Healing:</label>
                    <input type="range" id="healing" name="healing" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="shape_shift" style={{ marginRight: '.5rem' }}>Shape Shift:</label>
                    <input type="range" id="shape_shift" name="shape_shift" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="telekinesis" style={{ marginRight: '.5rem' }}>Telekinesis:</label>
                    <input type="range" id="telekinesis" name="telekinesis" onChange={handleChange} />
                </div>
                <button type="submit">Create Hero</button>
            </form>
        </div>
    )
}

export default CreateHero