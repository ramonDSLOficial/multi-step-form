import styled from 'styled-components';
import type { CommonInputProps } from '../transientsProps';

// interface StyledInputProps extends Omit<CommonInputProps, '$type'> {

// }
export const Input = styled.input<Omit<CommonInputProps, '$type'>>``;

/* 
input[type='checkbox'] {
    position: relative;
    appearance: none;
    border: 2px solid black;
    border-radius: 25px;
    background-color: aqua;
    padding: 12px 25px;
    outline: none;
}

input[type='checkbox']::after {
    content: '';
    position: absolute;
    right: -14%;
    bottom: -1px;
    width: 25px;
    height: 25px;
    border: 1px solid gray;
    border-radius: 50%;
    background-color: yellow;
    transition: right .5s ease-in-out;
}

input[type='checkbox']:checked::after {
    right: 60%;
}
*/
