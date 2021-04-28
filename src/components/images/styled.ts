import styled from 'styled-components';

export const ImageContainer = styled.div`
    padding: ${({ theme }) => theme.spacing.s};

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        height: 136px;
        margin: ${({ theme }) => theme.spacing.m} 0;
    }
`;

export const ImageItem = styled.image`
    height: 100px;
    width: 100px;
`;
