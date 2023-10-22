import React from "react";

const Scroll = (props) => {
   return (
            <div style = {{overflowY : 'scroll', border:'5px solid black', height: '1000px', width: '99%',
             margin:'0 0 0 '}} >
            {props.children}
            </div>
    );
}

export default Scroll;