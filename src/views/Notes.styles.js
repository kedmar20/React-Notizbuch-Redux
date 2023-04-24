import styled from "styled-components";
import FormField from "components/molecules/FormField/FormField";

export const Wrapper = styled.div`
   width: 100%;
   height: 100%;
   display: grid;
   grid-template-columns: 1.2fr 0.8fr;
   grid-gap: 30px;
   padding: 30px;
`;

export const FormWrapper = styled.form`
   padding: 40px;
   background: ${({ theme }) => theme.colors.white};
   border-radius: 25px;
   width: 100%;
   height: 95%;
   display: flex;
   flex-direction: column;
   justify-content: flex-start;
   align-items: center;
`;

export const StyledFormField = styled(FormField)`
   height: ${({ isTextarea }) => (isTextarea ? "300px" : "unset")};
   border: ${({ theme }) => theme.colors.darkGrey} solid 3px;
   width: 80%;
   background: ${({ theme }) => theme.colors.lightGrey};
`;

export const NotesWrapper = styled.div`
   padding: 20px 60px;
   display: flex;
   flex-direction: column;
`;
