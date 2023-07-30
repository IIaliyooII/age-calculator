import { useState } from "react";
import Form from "./Form";
import Age from "./components/Age";

function App() {
  const [deta, setDeta] = useState([]);

  return (
    <main className='w-full h-screen flex flex-col items-center justify-evenly px-8 '>
      <Form setDeta={setDeta} />
      <div className='flex flex-col gap-1 mb-28'>
        <Age num={deta.year} label='Years' />
        <Age num={deta.month} label='Months' />
        <Age num={deta.day} label='Days' />
      </div>
    </main>
  );
}

export default App;
