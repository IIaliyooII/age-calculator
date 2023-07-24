import Form from "./components/Form";

function App() {
  return (
    <main className='w-full h-screen flex flex-col items-center justify-evenly  '>
      <Form />
      <div className='flex flex-col gap-1 font-extrabold text-8xl italic mb-28'>
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
