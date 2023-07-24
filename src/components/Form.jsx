import { useState } from "react";
import { ReactComponent as Arrow } from "../assets/arrow.svg";
import Input from "./Input";

const Form = () => {
  const [day, setDay] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  const dateFormHandler = (event) => {
    event.preventDefault();
    const currentDay = new Date().getDate();
    const currentMonth = new Date().getMonth() + 1;
    const currentYear = new Date().getFullYear();

    if (day > 0 && day <= 31 && month > 0 && month <= 12) {
      const date = {
        day: currentDay - day,
        month: currentMonth - month,
        year: currentYear - year,
      };
    }
  };
  const inputMaxLengthHandler = (e) => {
    const { value, maxLength } = e.target;
    if (String(value).length >= maxLength) {
      e.preventDefault();
      return;
    }
  };
  return (
    <form onSubmit={dateFormHandler} className='flex gap-4'>
      <Input
        value={day}
        onChangeHandler={setDay}
        onKeyHandler={inputMaxLengthHandler}
        onMaxLength={2}
        name='day'
        onPlaceholder='DD'
        onMin={1}
        onMax={31}
      />
      <Input
        value={month}
        onChangeHandler={setMonth}
        onKeyHandler={inputMaxLengthHandler}
        onMaxLength={2}
        name='month'
        onPlaceholder='MM'
        onMin={1}
        onMax={12}
      />
      <Input
        value={year}
        onChangeHandler={setYear}
        onKeyHandler={inputMaxLengthHandler}
        onMaxLength={4}
        name='year'
        onPlaceholder='YYYY'
      />

      <button className='w-20 h-20 flex items-center justify-center mt-20 ml-12 rounded-full bg-main-purple hover:bg-black duration-150'>
        <Arrow />
      </button>
    </form>
  );
};

export default Form;
