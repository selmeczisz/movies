import React from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button';


export const LongText = ({text}) => {
    const [fullText, setFullText] = useState(false)


    return (
        <>

            {!fullText && <div>{(text ? (text.length > 200 ? text.substr(0, 200) + "..." : text) : "Sorry, no biography available.")}
                {text.length > 200 && <Button variant="outlined" sx={{borderRadius:30, borderColor:"purple", color:"purple", margin:1}} onClick={() => setFullText(true)}>More</Button>}
            </div>}
            {fullText && <div>{(text || "Sorry, no biography available.")}
                {text.length > 200 && <Button variant="outlined" sx={{borderRadius:30, borderColor:"purple", color:"purple", margin:1}} onClick={() => setFullText(false)}>Less</Button>}
            </div>}

        </>
    )
}
