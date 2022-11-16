import { useState } from 'react';
import { Divider, Input } from 'antd';

// Iteration 5
function Search(props) {
    const {filterFood} = props;
    const [query, setQuery] = useState('');
    const handleQuery = (e) => {
        setQuery(e.target.value);
        filterFood(e.target.value);
    }
  return (
    <>
      <Divider>Search</Divider>
      <label>Search</label>
      <Input value={query} type="text" onChange={handleQuery} />
    </>
  );
}

export default Search;
