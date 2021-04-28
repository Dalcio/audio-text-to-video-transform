import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const HeaderText = styled.p`
    font-size: 1.75rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.white};

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        display: none;
    }
`;
