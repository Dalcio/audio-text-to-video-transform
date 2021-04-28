import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    width: 100vw;
    height: 58px;
    padding: 0 16px;
    background-color: ${({ theme }) => theme.colors.headerBg};
`;
