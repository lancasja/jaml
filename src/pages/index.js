import React from "react"
import SEO from "../components/seo"
import { Global } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import { Flex } from "rebass"

const theme = {
  colors: {
    dark: "#111",
    gray: "#333",
    light: "#eee"
  }
}

const IndexPage = () => (
  <ThemeProvider theme={ theme }>
    <SEO title="Home" />
    <Global
      styles={{
        body: {
          margin: 0,
          fontFamily: "sans-serif"
        }
      }}
    />
    <Flex
      sx={{
        p: 40,
        bg: "gray",
        color: "light",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Flex
        sx={{
          p: 4,
          position: "fixed",
          top: 0,
          bg: "dark",
          color: "light",
          width: "100%",
          justifyContent: "flex-end"
        }}
      >
        We make music
      </Flex>
      <Flex
        sx={{
          bg: "dark",
          p: 4,
          borderRadius: 8,
          border: "1px solid ",
          letterSpacing: "1px",
          flex: 1
        }}
      >
        Check it out here
      </Flex>
    </Flex>
    <Flex
      sx={{
        p: 4,
        position: "fixed",
        bottom: 0,
        bg: "dark",
        color: "light",
        width: "100%"
      }}
    >
      And connect with us here
    </Flex>
  </ThemeProvider>
)

export default IndexPage
