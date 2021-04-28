import styled from 'styled-components';

export const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 106px);
    margin: ${({ theme }) => theme.spacing.l};

    @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
        margin: ${({ theme }) => `${theme.spacing.m} ${theme.spacing.xxl}`};
    }

    div:first-child,
    div div {
        border-radius: ${({ theme }) => theme.borderRadius.s};
        background-color: ${({ theme }) => theme.colors.cardsBg};
    }
`;

export const Col = styled.div`
    display: flex;
    flex: 1;

    flex-direction: column;
    align-items: stretch;

    div {
        align-self: stretch;
        &:last-child {
            margin-left: 0;
        }
    }

    @media (width: ${({ theme }) => theme.breakpoints.small}) {
        div {
            height: unset;
            &:first-child {
                margin: 0;
            }
        }
    }

    @media (min-width: ${({ theme }) => theme.breakpoints.small}) {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding-top: ${({ theme }) => theme.spacing.m};

        div {
            flex: 1;
            &:first-child {
                max-width: 160px;
            }
            &:last-child {
                margin-left: ${({ theme }) => theme.spacing.m};
            }
        }
    }
`;
