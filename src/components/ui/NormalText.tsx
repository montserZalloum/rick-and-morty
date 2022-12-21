import { Typography } from '@mui/material'

type IProps = {
    msg: String
}

function NormalText(props:IProps) {
  return (
    <Typography variant="h2" color="primary.light" align="center">{props.msg}</Typography>
  )
}

export default NormalText