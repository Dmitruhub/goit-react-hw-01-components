import styled from "styled-components";
export const ProfileItems = styled.div`
  width: 300px;
  margin: 0 auto 50px;
  background-color: white;
  border: 1px solid black;
  padding-top: 40px;
  border-radius: 10px;
  overflow: hidden;
`;
export const ProfileDescription = styled.div`
  text-align: center;
`;
export const ProfilePhoto = styled.img`
  display: block;
  margin: 0 auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px dashed black;
  background-color: brown;
`;

export const UserName = styled.p`
  font-weight: bold;
  font-size: 15px;
`;

export const UserStatus = styled.ul`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;
  padding-left: 0;
  justify-content: center;
  align-items: center;
  list-style: none;
  background-color: lightgray;
  border-radius: 6px;
`;
export const StatusItem = styled.li`
  width: 99px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 1px solid gray;
  span {
    text-align: center;
  }
  span:last-child {
    font-weight: bold;
    font-size: 15px;
  }
`;
