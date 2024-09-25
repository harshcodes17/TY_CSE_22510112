import React from 'react';
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const FilterSort = ({ setFilter, setSort }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
      <FormControl variant="outlined" style={{ minWidth: '200px' }}>
        <InputLabel>Category</InputLabel>
        <Select onChange={(e) => setFilter(e.target.value)} label="Category">
          <MenuItem value="">All Categories</MenuItem>
          <MenuItem value="electronics">Electronics</MenuItem>
          <MenuItem value="fashion">Fashion</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" style={{ minWidth: '200px' }}>
        <InputLabel>Sort By</InputLabel>
        <Select onChange={(e) => setSort(e.target.value)} label="Sort By">
          <MenuItem value="low-to-high">Price: Low to High</MenuItem>
          <MenuItem value="high-to-low">Price: High to Low</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterSort;