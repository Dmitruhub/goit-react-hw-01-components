import styled from "styled-components";

export const TransactionTable = styled.table`
  width: 900px;
  margin: 0 auto;
  text-align: center;
  tr:nth-child(even) {
    background-color: #ecf1f4;
  }
`;
export const TransactionTableHead = styled.thead`
  background-color: #00bcd5;
  height: 50px;
`;
export const TransactionItem = styled.td`
  height: 35px;
`;
