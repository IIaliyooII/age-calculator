import Form from "./components/Form";

function App() {
  return (
    <main className='w-full h-screen flex flex-col items-center justify-evenly italic '>
      <Form />
      <div className='flex flex-col gap-1 font-extrabold text-8xl'>
        <div className='flex flex-row gap-1'>
          <span className='text-main-purple'>10</span>
          <p>Years</p>
        </div>
        <div className='flex flex-row gap-1'>
          <span className='text-main-purple'>4</span>
          <p>Months</p>
        </div>
        <div className='flex flex-row gap-1'>
          <span className='text-main-purple'>38</span>
          <p>Days</p>
        </div>
      </div>
    </main>
  );
}

export default App;
