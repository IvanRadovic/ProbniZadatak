const InputDefault = ({type, value, onChange, style, placeholder }) => {
    return ( 
        <input 
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            style={style}
        />
     );
}
 
export default InputDefault;