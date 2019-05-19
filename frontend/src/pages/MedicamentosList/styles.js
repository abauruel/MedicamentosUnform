import Styled from "styled-components";

export const Container = Styled.div`
  height: 100%;
  display: flex;
  flex-direction: column
    justify-content: center;
    align-items: center;
    a{
      font-size: 20px;
      font-weight: bolder;
      margin: 20px;
      text-decoration: none;
      color: #FFF;

      padding: 10px;
      border-radius: 3px;
    }
    
    table{
           
      font-size: 20px;
      border-radius: 3px;
      padding: 20px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      thead{
        background: #2980B9;
        font-weight: bolder;
      }
     
      tr,td{
        padding: 2px
      }tr:hover{
        
      }
       td {
         
        border-bottom: 1px solid #ddd;
      }
      a{
        font-size: 15px;
        padding: 5px;
        margin: 5px  ;
        border-radius: 3px;
        background: green;
        text-decoration:none;
        color: #FFF;
      }
      a:hover{
        opacity: 0.2;
      }
    }
    `;
