import React from "react";
import PropTypes from "prop-types";
import { UserShape } from "types";
import FormField from "components/molecules/FormField/FormField";
import { Button } from "components/atoms/Button/Button";
import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
import { Title } from "components/atoms/Title/Title";

const AddUser = ({ handleAddUser, formValues, handleInputChange }) => {
  return (
    <ViewWrapper as="form" onSubmit={handleAddUser}>
      <Title>Neuen Studenten hinzufügen:</Title>
      <FormField
        label="Nachname:"
        id="name"
        name="name"
        value={formValues.name}
        onChange={handleInputChange}
      />
      <FormField
        label="Teilnahmefrequenz:"
        id="attendance"
        name="attendance"
        value={formValues.attendance}
        onChange={handleInputChange}
      />
      <FormField
        label="Durchschnitt:"
        id="average"
        name="average"
        value={formValues.average}
        onChange={handleInputChange}
      />
      <Button type="submit">Add</Button>
    </ViewWrapper>
  );
};

AddUser.propTypes = {
  handleAddUser: PropTypes.func.isRequired,
  formValues: PropTypes.shape(UserShape),
  handleInputChange: PropTypes.func.isRequired,
};

export default AddUser;
