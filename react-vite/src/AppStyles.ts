import styled from "styled-components";

type ConProps = {
    bgColor: string;
}

export const Container = styled.div<ConProps>`
    background-color: ${props => props.bgColor};
    color: white ;
    padding: 20px;

    span{
        color: yellow;
        font-weight: bold;
    }

    .link{
        color: red;

        &:hover{
            color:blue
        }
    }

`
type BotaoProps = {
    bg: string;
    small?: boolean;
}

export const Botao = styled.button<BotaoProps> `
    font-size: ${props => props.small ? '15px' : '30px'};
    background-color: ${props => props.bg};

`