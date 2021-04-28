import styled from "styled-components";

export const ToggleContainer = styled.button<{ themeName: string }>`
    cursor: pointer;
    display: flex;
    font-size: 0.5rem;
    align-items: center;
    overflow: hidden;
    padding: 0.5rem;
    position: relative;
    width: 2rem;
    height: 2rem;

    &:focus {
        outline: none;
    }

    div {
        height: auto;
        width: 2.5rem;
        transition: all 0.3s linear;

        // sun icon
        &:first-child {
            transform: ${({ themeName }) =>
                themeName === "light" ? "translateY(0)" : "translateY(100px)"};
        }

        // moon icon
        &:nth-child(2) {
            transform: ${({ themeName }) =>
                themeName === "light" ? "translateY(-100px)" : "translateY(0)"};
        }
    }
`;
