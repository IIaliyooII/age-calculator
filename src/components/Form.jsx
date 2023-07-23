import { ReactComponent as Arrow } from "../assets/arrow.svg";

const Form = () => {
  return (
    <form className='flex gap-4'>
      <div className='flex flex-col gap-1 font-poppins text-black font-bold text-[2rem] uppercase duration-150'>
        <label htmlFor='day' className='text-sm tracking-wider text-smokey-grey duration-150'>
          day
        </label>
        <input
          id='day'
          name='day'
          type='number'
          min={1}
          max={31}
          className='w-32 border rounded-md border-light-grey outline-none px-4 py-1 placeholder:text-smokey-grey/75 active:border-main-purple hover:border-main-purple duration-150'
          placeholder='DD'
          autoComplete='off'
          required
        />
      </div>

      <div className='flex flex-col gap-1 font-poppins text-black font-bold text-[2rem] uppercase duration-150'>
        <label htmlFor='month' className='text-sm tracking-wider text-smokey-grey duration-150'>
          month
        </label>
        <input
          id='month'
          name='month'
          type='number'
          min={1}
          max={31}
          className='w-32 border rounded-md border-light-grey outline-none px-4 py-1 placeholder:text-smokey-grey/75 active:border-main-purple hover:border-main-purple duration-150'
          placeholder='MM'
          autoComplete='off'
          required
        />
      </div>

      <div className='flex flex-col gap-1 font-poppins text-black font-bold text-[2rem] uppercase duration-150'>
        <label htmlFor='year' className='text-sm tracking-wider text-smokey-grey duration-150'>
          year
        </label>
        <input
          id='year'
          name='year'
          type='number'
          min={1}
          max={31}
          className='w-32 border rounded-md border-light-grey outline-none px-4 py-1 placeholder:text-smokey-grey/75 active:border-main-purple hover:border-main-purple duration-150'
          placeholder='YYYY'
          autoComplete='off'
          required
        />
      </div>

      <button className='w-20 h-20 flex items-center justify-center mt-20 ml-12 rounded-full bg-main-purple hover:bg-black duration-150'>
        <Arrow />
      </button>
    </form>
  );
};

export default Form;
