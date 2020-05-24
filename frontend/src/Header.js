import React from 'react';

/*
posso receber apenas as propriedades que se espera
ex: function Header ({title})
Posso acessar propriedades passadas sem identificacao
atraves de props.children.
*/
function Header(props){
    return (
        <header>
            <h1>{props.title}</h1>
            {props.children}
        </header>
    );
}

export default Header;
