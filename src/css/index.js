import  styled from "styled-components";

// USER PROFILE

export const DivUserProfile = styled.div`
    padding: 10px;
`
export const DivSpinner = styled.div`
    text-align: center;
    margin-top: 50%;
`

// HOME 

export const DivAddPost = styled.div`
`
// MENU

export const DivMenu = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    box-shadow: 0 -1px 1px -1px var(--ion-color-dark);
    width: 100%;
`
// MODAL

export const ButtonWritePost = styled.button`
  margin-top: 10px;
  display: inline-block;
  background-color: var(--ion-color-primary) ;
  text-align: center;
  border-radius: 0.25rem;
  cursor: ${( props ) =>  props.disabled ? "not-allowed" : "pointer" };
  margin-top: 10px;
  padding: 4px;
  width: 120px;
`;
