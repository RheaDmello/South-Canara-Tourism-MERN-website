import styled from 'styled-components';

export const GlobalStyle = styled.div`
    body {
        margin: 0;
        padding: 0;
        font-family: Arial, sans-serif;
        background-image: url('bg1img.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
`;

export const FormGroup = styled.div`
    label {
        display: block;
        margin-bottom: 5px;
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    font-size: 16px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;