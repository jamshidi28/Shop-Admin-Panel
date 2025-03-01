
function RadioInput({ id, name, value, onChange, checked, label }) {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <input
        type="radio"
        label={label}
        name={name}
        id={id}
        checked={checked}
        onChange={onChange}
        value={value}
        className="w-4 h-4 cursor-pointer rounded-[5px] bg-secondary-100/80 checked:text-secondary-900 mx-2"

      />
      <label htmlFor={id} className="cursor-pointer">
        {label}
      </label>
    </div>
  )

}

export default RadioInput
