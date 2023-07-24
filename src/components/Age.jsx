// eslint-disable-next-line react/prop-types
const Age = ({ num, label }) => {
  return (
    <div className='flex flex-row gap-6 items-center justify-center font-extrabold italic text-4xl lg:text-8xl '>
      <span className='text-main-purple text-5xl lg:text-9xl'>{num}</span>
      <p>{label}</p>
    </div>
  );
};

export default Age;
