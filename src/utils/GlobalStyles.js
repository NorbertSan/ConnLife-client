import { createGlobalStyle } from "styled-components";
import theme from "utils/theme";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
*,*::after,*::before{
    box-sizing:border-box;
}
html{
    font-size:62.5%;
}
body{
    font-size:1.6rem;
    font-family: 'Roboto', sans-serif;
    background:${theme.colors.tertiary};
    color:${theme.colors.secondary};
    margin:0;
    overflow-x:hidden;
    width:100vw;
}  
a{
    text-decoration:none!important;
    color:${theme.colors.secondary}!important;
}
`;

export default GlobalStyles;
