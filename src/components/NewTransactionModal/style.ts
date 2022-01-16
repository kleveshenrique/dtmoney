import styled from "styled-components";
import {darken, transparentize} from "polished"

export const Container = styled.form`
    h2 {
        color: var(--text-title);
        font-size: 1.5rem;
        padding-bottom: 2rem;
        text-align: center;
    }

    input {
        width: 100%;
        padding:0 1.5rem;        
        height: 4rem;
        margin-bottom: 1.5rem;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;        
        background: #e7e9ee;
        font-weight: 400;
        font-size: 1rem;

        &::placeholder{
            color: var(--text-body);
        }
    }

    button[type="submit"]  {
        width: 100%;
        height: 4rem;
        border: 0;
        margin-top: 1,5rem;
        color: #FFF;
        padding: 0 1.5rem;
        font-weight: 600;
        font-size: 1.5rem;
        border-radius: 0.25rem;
        background: var(--green);
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`

export const TransactionTypeContainer = styled.div`
    margin: 0 0 1.5rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;    
    gap: 0.5rem;    
`

interface RadioBoxProps {
    isActive : boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    green: '#33CC95',
    red: '#E52E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
    display: flex;
        justify-content: center;
        align-items: center;
        height: 4rem;
        border-radius: 0.25rem;
        border: 1px solid #d7d7d7;
        
        background: ${(props)=>props.isActive 
            ? transparentize(0.8, colors[props.activeColor])
            : 'transparent'
        };       

        transition: border-color 0.2s;
        
        img {
            width: 20px;
            height: 20px;
        }

        span {
            display: inline-block;
            margin-left: 1rem;
            font-size: 1rem;
            color: var(--text-title);
        }

        &:hover {
            border-color: ${darken(0.1, "#d7d7d7")};
        }

`