
function CheckBox({lable,onChange,value,name,id,checked}) {
  return (
    <div>
      <input 
      type="checkbox"
      lable={lable}
      name={name}
      id={id}
      checked={checked}
      onChange={onChange}
      value={value}
      className="w-4 h-4 cursor-pointer form-checkbox rounded-[5px] bg-secondary-100/80 checked:text-secondary-900 mx-2"
      
      />
      <lable htmlForm={id} className="cursor-pointer">{lable}</lable>
    </div>
  )
}

export default CheckBox
