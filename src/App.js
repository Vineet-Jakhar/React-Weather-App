//This page imports the SplashScreen page @ line 43
//and exports the app @ last line




import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Splash from "./SplashScreen";


const LightTheme = {
  pageBackground: "white",
  titleColor: "#dc658b",
  tagLineColor: "black"
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "lightpink",
  tagLineColor: "lavender",

}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}



function App() {


  const [theme, setTheme] = useState("light");



  return (

    <ThemeProvider theme={themes[theme]}>

      <Splash theme={theme} setTheme={setTheme} />

    </ThemeProvider>

  )
}

export default App;
