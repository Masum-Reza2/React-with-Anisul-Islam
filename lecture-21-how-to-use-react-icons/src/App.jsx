import './App.css'
import { SlEarphones } from "react-icons/sl";
import { AiFillAndroid } from "react-icons/ai";
import { CiApple } from "react-icons/ci";
import { FcAssistant } from "react-icons/fc";
import { GoCopilot } from "react-icons/go";
import { PiApertureBold } from "react-icons/pi";
import { VscBell } from "react-icons/vsc";

// in this tutorial we learn how to add react icons in our react project.
// >>npm install react-icons --save
// >>import { IconName } from "react-icons/bs";
{/* <IconName style={iconStyle}/> */}
// Thats it.


function App() {

  const iconStyle = {padding:'10px', textAlign:'center', color:'orange', fontWeight:'bold', fontSize:'3rem'}

  return (
    <>
      <h1>Hello React Icon</h1>
      <SlEarphones style={iconStyle}/>
      <AiFillAndroid style={iconStyle}/>
      <CiApple style={iconStyle}/>
      <FcAssistant style={iconStyle}/>
      <GoCopilot style={iconStyle}/>
      <PiApertureBold style={iconStyle}/>
      <VscBell style={iconStyle}/>
    </>
  )
}

export default App