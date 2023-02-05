import React from 'react';

const MySelect = ({ options, defaultValue, value, sortPosts }) => {
  return (
    <select value={value} onChange={(event) => sortPosts(event.target.value)}>
      <option disabled value="value1">
        {defaultValue}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
