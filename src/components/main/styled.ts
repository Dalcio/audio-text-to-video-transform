import styled from "styled-components";

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background};
    min-height: calc(100vh - 58px);
`;

export const Col = styled.div`
    @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
        display: flex;
    }
`;
