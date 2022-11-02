
import React from "react";
import CopyrightWrapper from './ptf.style';

const Ptf_converter = () => {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('udirdamj.pdf').then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'udardamj.pdf';
                alink.click();
            })
        })
    }

    return(
        <CopyrightWrapper id="key_values" >
            <center >
                <button className="button-pdf trail" onClick={onButtonClick}>
                   <span className="btn-text">Удирдамж татах</span>
                </button>
            </center>
            
        </CopyrightWrapper>
    );
}


export default Ptf_converter;