import { Button, ButtonGroup } from '@mui/material';
import React from 'react';

interface Props {
    currentPage: number;
    lastPage: number;
    onPageChange: (page:number) => void;
}

const Pagination = ({currentPage, lastPage, onPageChange}:Props) => {
    let minPage = currentPage - 2 >= 1 ? currentPage - 2 : 1;
    let maxPage = currentPage + 2 <= lastPage ? currentPage + 2: lastPage;
    let buttons = [];
    console.log(minPage);
    console.log(maxPage);
    console.log(currentPage);

    if(minPage > 1){
        buttons.push((<Button key={`pagination-first`} color="secondary" onClick={() => {onPageChange(1)}}>First</Button>))
    }
    
    for(let i = minPage; i <= maxPage; i++){
        if(currentPage === i){
            buttons.push((<Button key={`pagination-${i}`} color="secondary" disabled onClick={() => {onPageChange(i)}}>{i}</Button>))
        }else{
            buttons.push((<Button key={`pagination-${i}`} color="secondary" onClick={() => {onPageChange(i)}}>{i}</Button>))
        }
    }

    if(maxPage < lastPage){
        buttons.push((<Button key={`pagination-last`} color="secondary" onClick={() => {onPageChange(lastPage)}}>Last</Button>))
    }

    return (
        <ButtonGroup variant="text" color="secondary" aria-label="Click these buttons to scroll through the pages of articles" sx={{display: 'block', textAlign: 'center'}}>
            {buttons}
        </ButtonGroup>
    )
}

export default Pagination;