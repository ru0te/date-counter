function App() {
  const today = new Date();
  const weekDay = today.toLocaleDateString('en-US', { weekday: 'short' });
  const month = today.toLocaleDateString('default', { month: 'short' });
  const day = today.getDate();
  const year = today.getFullYear();
  return (
    <>
      <div className='container'>
        <div className='date'>
          <p>{weekDay}</p>
          <p>{month}</p>
          <p>{day}</p>
          <p>{year}</p>
        </div>

        <div className='controls'>
          <div className='control'>
            <button>-</button>
            <p>Step:</p>
            <button>+</button>
          </div>
          <div className='control'>
            <button>-</button>
            <p>Count:</p>
            <button>+</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
