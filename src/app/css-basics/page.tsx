import React from 'react';
import "./style.css";
export default function Cssbasic() {
const styles ={
color:"white",
backgroundColor:"dodgerblue",
fontFamily:"Arial",
padding:"10px"}

  return (
    <>
    {/* inline styling */}
    <h1 style={{color:"white",backgroundColor:"blue",fontFamily:"Arial",padding:"5px"}}> heading 1 inline styling</h1>
    <br />
    {/* internal styling */}
    <h2 style={styles} > heading 2 with style save in variable internal styling</h2>
    <br />
    {/* external styling */}
    <h3>heading 3 external styling</h3>
    <br />
    <h3 className='blue-head'>heading 3 external styling + class</h3>
    <br />
    <h3 id='h0'>heading 3 external styling</h3>
    <br />
    </>
  );
}
