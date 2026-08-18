import { useState } from 'react';

function App() {
  const count = 1;
  const [date, setDate] = useState(new Date());

  const weekDay = date.toLocaleDateString('en-US', { weekday: 'short' });
  const month = date.toLocaleDateString('default', { month: 'short' });
  const day = date.getDate();
  const year = date.getFullYear();

  const handleCountUp = () => {
    setDate((d) => {
      const newDate = new Date(d); // create new date based on current date in the state
      newDate.setDate(date.getDate() + count); // call setDate on the new Date and then use getDate function on it and add count
      return newDate;
    });
  };

  const handleCountDown = () => {
    setDate((d) => {
      const newDate = new Date(d);
      newDate.setDate(date.getDate() - count);
      return newDate;
    });
  };

  return (
    <>
      <div className='container'>
        <div className='date'>
          <p>{weekDay}</p>
          <p>{month}</p>
          <p>{day}</p>
          <p>{year}</p>
        </div>

        <div className='control'>
          <button onClick={handleCountDown}>count down</button>
          <button onClick={handleCountUp}>count up</button>
        </div>
      </div>
    </>
  );
}

export default App;
