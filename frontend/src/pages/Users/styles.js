import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: #CFCFCF;
`;

export const Header = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const Title = styled.h1`
    margin-top: 20%;
    margin-bottom: 5%;
    font-size: 28px;
    font-weight: bold;
    color: #000;
`;

export const UserContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: white;
    width: 95%;
`;

export const UserInfo = styled.div`
    flex: 1;
    font-size: 16px;
    margin: 0 15px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 20px;
`;

export const ButtonEdit = styled.button`
    margin-left: 10px;
    padding: 10px;
    background-color: #add8e6;
    border-radius: 10px;
    border: none;
    cursor: pointer;
`;

export const ButtonDelete = styled.button`
    margin-left: 10px;
    padding: 10px;
    background-color: red;
    border-radius: 10px;
    border: none;
    cursor: pointer;
`;

export const ButtonDeleteText = styled.span`
    color: white;
`;

export const List = styled.div`
    width: 95%;
    margin-top: 0;
    padding-right: 3%;
`;