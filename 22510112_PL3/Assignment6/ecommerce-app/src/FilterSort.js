import React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

const FilterSort = ({ setFilter, setSort }) => {
  return (
    <Box display="flex" justifyContent="space-between" mb={4}>
      <FormControl variant="outlined" style={{ minWidth: 200 }}>
        <InputLabel>Category</InputLabel>
        <Select
          onChange={(e) => setFilter(e.target.value)}
          label="Category"
        >
          <MenuItem value="">All Categories</MenuItem>
          <MenuItem value="electronics">Electronics</MenuItem>
          <MenuItem value="fashion">Fashion</MenuItem>
        </Select>
      </FormControl>
      <FormControl variant="outlined" style={{ minWidth: 200 }}>
        <InputLabel>Sort By</InputLabel>
        <Select
          onChange={(e) => setSort(e.target.value)}
          label="Sort By"
        >
          <MenuItem value="low-to-high">Price: Low to High</MenuItem>
          <MenuItem value="high-to-low">Price: High to Low</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default FilterSort;