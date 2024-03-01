import { styled } from "styled-components";
import { hover03 } from "../../../styled/common/common.styled";

export const PopBrowseBtnExit = styled.span`
    display: flex;
    height: 30px;
    width: 90px;
    border-radius: 4px;
    background: #565EEF;
    border: none;
    outline: none;
    color: #FFFFFF;
    align-items: center;
    justify-content: center;

    ${hover03}
`;

export const PopBrowseDiv = styled.div`
    width: 100%;
    height: 100%;
    min-width: 375px;
    min-height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 7;
`;