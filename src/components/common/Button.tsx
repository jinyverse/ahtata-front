import styled from 'styled-components';

export const NormalButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 17px 11px 16px;
    gap: 10px;
    width: 100%;
    height: 44px;
    color: white;
    background: #ffffff;
    background-blend-mode: overlay;
    border: 1px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(30px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 30px;
    cursor: pointer;

    background: rgba(255, 255, 255, 0.5);
    background-blend-mode: overlay;
    border: 1.5px solid rgba(255, 255, 255, 0.5);
    backdrop-filter: blur(30px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 20px;
`;
