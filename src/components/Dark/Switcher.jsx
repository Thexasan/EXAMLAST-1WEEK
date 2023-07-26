import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "../../hooks/useDarkSide";



function Switcher(){
    const [colorTheme, setTheme] = useDarkSide()
    const[darkSide, setDarkSide] = useState(colorTheme === "dark" ? true : false)

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme)
        setDarkSide(checked)
    }
    return (
        <>
        <div>
            <DarkModeSwitch
                checked = {darkSide}
                onChange = {toggleDarkMode}
                size = {35}
            />
        </div>
        </>
    )
}
export  default Switcher