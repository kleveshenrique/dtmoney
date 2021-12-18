import styled from "styled-components"

export const Container = styled.header`
    background: var(--blue)
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 Auto;
    padding: 2rem 1rem 12rem;    
    display: flex;
    align-items: center;    
    justify-content: space-between;

    button {
        font-size: 1rem;
        padding: 0 2rem;
        border-radius: 0.25rem;
        border: none;
        color: #FFF;
        height: 3rem;
        background: var(--blue-light);
        transition: all 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }
`

