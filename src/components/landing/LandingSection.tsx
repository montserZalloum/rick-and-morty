import LandingContainer from "./landing-container/LandingContainer";

import { Stack } from "@mui/material";
function LandingSection() {
  return (
    <Stack component="section" direction="column" pt={4} className="landing-section">
        <LandingContainer slogan="“Wubba Lubba Dub Dub!”" />
        <img src="/assets/images/land-bg.png" width="100%" />
    </Stack>
  )
}

export default LandingSection