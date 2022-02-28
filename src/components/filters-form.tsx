import React, { useEffect, useState } from 'react';
import { Grid, FormControl, Autocomplete, InputLabel, Select, MenuItem, Button, TextField, SelectChangeEvent } from '@mui/material';
import { Author, Type } from '../types';

interface Props {
    updateFilters: (author: string, type: string) => void;
}

const FiltersForm = ({ updateFilters }:Props) =>  {
    const [authors, setAuthors] = useState<Author[]>([]);
    const [types, setTypes] = useState<Type[]>([]);
    const [author, setAuthor] = useState('');
    const [type, setType] = useState('');

    useEffect(() => {
        if(authors.length === 0){
            fetch('https://content-store.explore.bfi.digital/api/authors').then(res => res.json()).then(res => {
              setAuthors(res.data);
            })
          }
          if(types.length === 0){
            fetch('https://content-store.explore.bfi.digital/api/types').then(res => res.json()).then(res => {
              setTypes(res.data);
            })
          }
    }, [authors, types])

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        updateFilters(author, type)
    }

    return (
    <form className="filter-form" onSubmit={handleSubmit}>
        <Grid item xs={12} sm={6} md={4} className="author-filter">
          <FormControl fullWidth>
            <Autocomplete className="author-filter-input" getOptionLabel={option => option.name} renderOption={(props, option) => {
                                                                return (
                                                                  <li {...props} key={option.id}>
                                                                    {option.name}
                                                                  </li>
                                                                );
                                                              }} disablePortal id="author-filter" options={authors} renderInput={params => <TextField {...params} label="Filter by author" />} onChange={(e, value) => setAuthor(value ? value.id : '')} />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} md={4} className="type-filter">
          <FormControl fullWidth>
            <InputLabel id="type-filter-label">Filter by type</InputLabel>
            <Select className="type-filter-input" labelId="type-filter-label" id="type-filter" value={type} onChange={(e: SelectChangeEvent) => setType(e.target.value as string)}>
              {types.map(type => (
                <MenuItem key={type.id} value={type.id}>{type.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={12} md={4} className="filter-submit">
          <Button sx={{fontWeight: 600, padding: "6px 30px", fontSize: "1rem"}} className="filter-submit-button" type="submit" variant="contained" color="secondary">Filter</Button>
        </Grid>
      </form>
    )
}

export default FiltersForm;