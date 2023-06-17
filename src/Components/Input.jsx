/* eslint-disable react/prop-types */
const Input = ({ handleChange, style, name, label, type, value }) => {
    return (
        <div style={style} >
            <label htmlFor={name}>{label}</label>
            <input onChange={handleChange} type={type} value={value} id={name} name={name} />
        </div>
    )
}

export default Input