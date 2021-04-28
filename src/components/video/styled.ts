import styled from 'styled-components';

export const VideoPlayerContainer = styled.div`
    padding: 0 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        height: calc(100vh - 299px);
        padding: ${({ theme }) => theme.spacing.m};
        min-height: 130px;
        max-height: ${({ theme }) => theme.breakpoints.small};
    }
`;
