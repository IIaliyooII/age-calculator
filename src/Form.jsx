import { useState } from "react";
import { ReactComponent as Arrow } from "./assets/arrow.svg";
import Input from "./components/Input";

// eslint-disable-next-line react/prop-types
const Form = ({ setDeta }) => {
  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [isValid, setIsValid] = useState(true);

  const currentDay = new Date().getDate();
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  const dateFormHandler = (event) => {
    event.preventDefault();

    if (day === 0 || month === 0 || year === 0) {
      setIsValid(false);
      return;
    }

    if (day < 31 && day > 0 && month < 12 && month > 0 && year < currentYear && year > 0) {
      const date = {
        day: currentDay - day,
        month: currentMonth - month,
        year: currentYear - year,
      };
      setDeta(date);
      setIsValid(true);
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
        isValid={isValid}
        message={day > 31 ? "Must be valid day" : ""}
      />
      <Input
        value={month}
        onChangeHandler={setMonth}
        onKeyHandler={inputMaxLengthHandler}
        onMaxLength={2}
        name='month'
        onPlaceholder='MM'
        isValid={isValid}
        message={month > 12 ? "Must be valid month" : ""}
      />
      <Input
        value={year}
        onChangeHandler={setYear}
        onKeyHandler={inputMaxLengthHandler}
        onMaxLength={4}
        name='year'
        onPlaceholder='YYYY'
        isValid={isValid}
        message={year > currentYear ? "Must be in the past" : ""}
      />

      <button className='w-20 h-20 flex items-center justify-center mt-20 ml-12 rounded-full bg-main-purple hover:bg-black duration-150'>
        <Arrow />
      </button>
    </form>
  );
};

export default Form;
