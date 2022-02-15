import React, { useEffect, useState } from 'react';
import jsonData from './data';

const SelectFilter = () => {
  const [data, setData] = useState('All');
  const [json, setJson] = useState([]);

  const onChangeHandler = (e) => {
    setData(e.target.value);
  };

  useEffect(() => {
    if (data === 'All') {
      setJson(jsonData);
    } else {
      const filteredJson = jsonData.filter((item) => item.gender === data);
      setJson(filteredJson);
    }
  }, [data]);

  return (
    <div>
      <select
        className='select-wrapper'
        onChange={onChangeHandler}
        value={data}
      >
        <option value='All'>All</option>
        <option value='male'>Male</option>
        <option value='female'>Female</option>
      </select>

      {json &&
        json.map((i) => (
          <div
            className={i.gender == 'female' ? 'female' : 'male'}
            key={i.name}
          >
            {i.name}
          </div>
        ))}
    </div>
  );
};

export default SelectFilter;
