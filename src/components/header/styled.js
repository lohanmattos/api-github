import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 4px;
  margin-top: 25px;

  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 500px;
    height: 44px;
    padding: 8px;
    font-weight: 500;
  }

  button {
    background-color: #225ed8;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 8px;

    &:hover {
      background-color: #2c5282;
      box-shadow: 3px 2px 10px rgba(0, 0, 0, 0.2);
    }

    span {
      font-weight: bold;
      color: #ffff;
    }
  }
`;
