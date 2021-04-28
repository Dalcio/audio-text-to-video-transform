import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    height: 58px;
    padding: 0 24px;
    background-color: ${({ theme }) => theme.colors.headerBg};
`;
