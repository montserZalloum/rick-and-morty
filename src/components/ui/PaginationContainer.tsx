import { Pagination, Stack } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../app/store';

function PaginationContainer(props:any) {
    const dispatch = useDispatch();
    const {changePage} = bindActionCreators(actionCreators,dispatch)

    const [page, setPage] = useState(props.currentPage);
    const recordsCount = Math.ceil( (props.info?.count || 20) / 20 );

    const handleChange = (_e: React.ChangeEvent<unknown>,value: number) => {
      changePage(value);
      setPage(value)
    }
  return (
    <Stack direction="row" justifyContent="center">
        <Pagination page={page} count={recordsCount} onChange={handleChange} />
    </Stack>
  )
}

export default PaginationContainer