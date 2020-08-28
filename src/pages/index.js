import React from "react"
import SEO from "../components/seo"
import { Global, css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { Box } from "rebass"

const theme = {

}

const IndexPage = () => (
  <ThemeProvider theme={ theme }>
    <SEO title="Home" />
    <Global
      styles={css`
        body {
          margin: 0;
          font-family: sans-serif;
        }
      `}
    />
    <Box
      sx={{
        p: 40,
        bg: "#111",
        color: "#eee"
      }}
    >
      Hi, I'm Jonathan, this is going to be my site.
    </Box>
  </ThemeProvider>
)

export default IndexPage
