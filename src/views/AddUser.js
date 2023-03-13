import React, { useReducer, useContext } from "react";
import FormField from "components/molecules/FormField/FormField";
import { Button } from "components/atoms/Button/Button";
import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
import { Title } from "components/atoms/Title/Title";
import { UsersContext } from "providers/UsersProvider";
import { useForm } from "hooks/useForm";

const initialFormState = {
   name: "",
   attendance: "",
   average: "",
   consent: false,
   error: "",
};
//

//
const AddUser = () => {
   const context = useContext(UsersContext);
   const { formValues, handleInputChange, handleClearForm, handleThrowError, handleToggleConsent } = useForm(initialFormState);

   const handleSubmitUser = (e) => {
      e.preventDefault();
      if (formValues.consent) {
         context.handleAddUser(formValues);
         //setFormValues(initialFormState);
         handleClearForm(initialFormState);
      } else {
         handleThrowError("Bitte Zustimmen!");
      }
   };

   return (
      <ViewWrapper as="form" onSubmit={handleSubmitUser}>
         <Title>Neuen Studenten hinzufügen:</Title>
         <FormField label="Nachname:" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
         <FormField label="Fakultät:" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
         <FormField label="Semester:" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
         <FormField label="Zustimmung:" id="consent" name="consent" type="checkbox" value={formValues.average} onChange={handleToggleConsent} />
         <Button type="submit">Add</Button>
         {formValues.error ? <p>{formValues.error}</p> : null}
      </ViewWrapper>
   );
};

export default AddUser;
