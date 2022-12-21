import React from 'react'
import { Stack } from '@mui/material'
function Loader() {
  return (
    <Stack direction="row" justifyContent="center">
        <img src="/assets/images/loader-2.gif" width="200" alt="loading..." />
    </Stack>
  )
}

export default Loader