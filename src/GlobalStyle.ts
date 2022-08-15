import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;600;700&display=swap');

    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: "Poppins";
        list-style: none;
    }
    #root{
            margin:0 auto;
    }
    input {
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        color: inherit;
    }
    button {
        border: unset;
        background-color: unset;
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        color: inherit; 
    }
    ::-webkit-scrollbar {
            width: 8px;
    }
    ::-webkit-scrollbar-track {
        background: unset;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 4px;
        background: #888;
    }
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`