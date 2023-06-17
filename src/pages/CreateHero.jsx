import { useState } from "react"
import { toast } from "react-toastify"
import Input from "../Components/Input"

const CreateHero = () => {
    const initialInput = { id: 0, strength: 0, invisibility: 0, healing: 0, shape_shift: 0, telekinesis: 0 }
    const [inputData, setInputData] = useState(initialInput)
    const handleChange = (e) => {
        setInputData(p => ({ ...p, [e.target.name]: e.target.value }))
    }
    const handleCreate = (e) => {
        e.preventDefault()
        if (Object.values(inputData).some(i => i === 0)) {
            toast.warn('Please fill the required fields')
            return
        }
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
            initialInput(initialInput)
        } else {
            const data = JSON.stringify([inputData])
            localStorage.setItem('heroData', data)
            setInputData(initialInput)
        }
        e.target.reset()
        toast.success('One Hero is Created')
    }
    return (
        <div className="cratehero">
            <form className="inputform" onSubmit={handleCreate} >
                <Input
                    handleChange={handleChange}
                    label={'ID:'}
                    name={'id'}
                    type={'number'}
                />
                <Input
                    handleChange={handleChange}
                    label={'Strength:'}
                    name={'strength'}
                    type={'range'}
                    value={inputData.strength}
                />
                <Input
                    handleChange={handleChange}
                    label={'Invisibility:'}
                    name={'invisibility'}
                    type={'range'}
                    value={inputData.invisibility}
                />
                <Input
                    handleChange={handleChange}
                    label={'Healing:'}
                    name={'healing'}
                    type={'range'}
                    value={inputData.healing}
                />
                <Input
                    handleChange={handleChange}
                    label={'Shape Shift:'}
                    name={'shape_shift'}
                    type={'range'}
                    value={inputData.shape_shift}
                />
                <Input
                    handleChange={handleChange}
                    label={'Telekinesis:'}
                    name={'telekinesis'}
                    type={'range'}
                    value={inputData.telekinesis}
                />
                <button type="submit">Create Hero</button>
            </form>
        </div>
    )
}

export default CreateHero