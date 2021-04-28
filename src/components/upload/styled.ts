import styled from 'styled-components';

export const UploadContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px dashed ${({ theme }) => theme.colors.textColor};

    height: 125px;

    &:hover {
        cursor: pointer;
        border-style: solid;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.small}) {
        padding: ${({ theme }) => theme.spacing.m};
        height: 80px;
    }
`;

export const UploadText = styled.p`
    line-height: 1.5rem;
    color: ${({ theme }) => theme.colors.textColor};
`;

export const UploadResponsiveText = styled.p`
    line-height: 1.5rem;
    color: ${({ theme }) => theme.colors.textColor};
`;
