import { useState } from 'react';
import { AUTHOR } from '../../constants';

export const Form = ({ addMessage }) => {
  const [value, setValue] = useState('');
  const handleSubbmit = (ev) => {
    ev.preventDefault();
    addMessage({
      author: AUTHOR.user,
      value,
    });
    setValue('');
  };
  return (
    <form onSubmit={handleSubbmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button disabled={!value}>send</button>
    </form>
  );
};
