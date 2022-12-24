import { Stack } from "@mui/system";
import { Typography } from "@mui/material";
import '../LandingSection.css'

type IProps = {
    slogan: String
}

function LandingContainer(props:IProps) {
  return (
    <Stack direction="column" alignItems="center" textAlign="center">
        <Typography color="white" variant="h1" className="font-55" >{props.slogan}</Typography>
        <img src='/assets/images/hero-img.png' width="300" alt="hero image" />
    </Stack>
  )
}

export default LandingContainer