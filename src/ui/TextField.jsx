function TextField({
    label,
    name,
    value,
    onChange,

}) {
    return (
        <div>
            <label className="mb-2 block text-secondary-700" htmlFor={name}>
                {label}
            </label>
            <input
                id={name}
                name={name}
                onChange={onChange}
                value={value}
                className="textField__input"
                type="text"
                outoComplete="off"
            />

        </div>
    );
}
export default TextField;

