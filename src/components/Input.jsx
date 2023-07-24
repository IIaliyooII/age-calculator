// eslint-disable-next-line react/prop-types
const Input = ({ value, onChangeHandler, onKeyHandler, name, onPlaceholder, onMin, onMax, onMaxLength }) => {
  return (
    <div className='flex flex-col gap-1 font-poppins text-black font-bold text-[2rem] uppercase duration-150'>
      <label htmlFor='day' className='text-sm tracking-wider text-smokey-grey duration-150'>
        {name}
      </label>
      <input
        value={value || ""}
        onChange={(el) => onChangeHandler(el.target.value)}
        onKeyPress={onKeyHandler}
        maxLength={onMaxLength}
        id={name}
        name={name}
        type='number'
        min={onMin}
        max={onMax}
        className='w-32 border rounded-md border-light-grey outline-none px-4 py-1 placeholder:text-smokey-grey/75 active:border-main-purple hover:border-main-purple duration-150'
        placeholder={onPlaceholder}
        autoComplete='off'
        required
      />
    </div>
  );
};

export default Input;
