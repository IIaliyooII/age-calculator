import { useState } from "react";
import Form from "./Form";
import Age from "./components/Age";

function App() {
  const [deta, setDeta] = useState([]);

  return (
    <main className='w-full h-screen flex flex-col items-center justify-evenly  '>
      <Form setDeta={setDeta} />
      <div className='flex flex-col gap-1 font-extrabold text-8xl italic mb-28'>
        <Age num={!deta.year ? "--" : deta.year} label='Years' />
        <Age num={!deta.month ? "--" : deta.month} label='Months' />
        <Age num={!deta.day ? "--" : deta.day} label='Days' />
      </div>
    </main>
  );
}

export default App;
