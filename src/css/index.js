import  styled from "styled-components";

// USER PROFILE

export const DivUserProfile = styled.div`

`
export const DivSpinner = styled.div`
    height: 100%;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

// HOME 

export const DivAddPost = styled.div`
`
// MENU

export const DivMenu = styled.div`
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: row;
    box-shadow: 0 -1px 1px -1px var(--ion-color-dark);
    width: 100%;
    background-color: var(--ion-color-primary);
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
