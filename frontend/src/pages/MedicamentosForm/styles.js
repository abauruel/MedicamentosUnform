import Styled from "styled-components";

export const Container = Styled.div`
  height: 100%;
  
  display: flex;
  flex-direction: column
    justify-content: center;
    align-items: center;
    
  
  label{
      font-size: 20px;
      font-weight: bolder;
    }
 
  form{
    padding: 20px;
    display: flex;
    flex-direction: column
    justify-content: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    label{
      font-size: 20px;
      font-weight: bolder;
    }
    
    
    span{
      margin-bottom: 10px;
      background: red;
      
    }
    
    input{
      margin: 10px 0;
      padding: 10px;
      width:  400px;
      font-size: 16px;

    }
    button{
      margin: 10px 0;
      padding: 10px;
      background: #05972a;
      border: 0;
      color: #FFF;
      font-size: 20px;
      font-weight: bolder;
      cursor: pointer;
      :hover {
        background: #07c538;
      }
      
    }
  }
`;
