import styled from "styled-components";

export const UploadContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 58px;
    background-color: ${({ theme }) => theme.colors.headerBg};
`;

export const UploadText = styled.p`
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    line-height: 1.5rem;
    color: ${({ theme }) => theme.colors.textColor};
`;
