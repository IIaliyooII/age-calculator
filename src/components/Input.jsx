/* eslint-disable react/prop-types */
const Input = ({ value, onChangeHandler, onKeyHandler, name, onPlaceholder, onMaxLength, isValid, message }) => {
  return (
    <div className='flex flex-col  gap-1 font-poppins text-black font-bold text-base lg:text-[2rem] duration-150'>
      <label
        htmlFor='day'
        className={`text-sm tracking-wider duration-150 uppercase ${isValid ? "text-smokey-grey" : "text-light-red"}`}>
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
        className={`w-24 lg:w-32 border rounded-md outline-none px-4 py-1 placeholder:text-smokey-grey/75 active:border-main-purple hover:border-main-purple duration-150' uppercase ${
          isValid ? "border-light-grey" : "border-light-red"
        }`}
        placeholder={onPlaceholder}
        autoComplete='off'
        onBlur={blur}
      />
      {!isValid && !message && (
        <span className='font-poppins text-xs font-normal text-light-red italic duration-150'>
          This field is required!
        </span>
      )}
      {message && (
        <span className='font-poppins text-xs font-normal text-light-red italic duration-150'>{message}</span>
      )}
    </div>
  );
};

export default Input;
