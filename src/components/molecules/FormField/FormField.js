import React from "react";
import PropTypes from "prop-types";
import { Label } from "../../atoms/Label/Label";
import { Input } from "../../atoms/Input/Input";
import { Wrapper } from "./FormField.styles";

const FormField = ({ onChange, value, name, id, label, type = "text", ...props }) => {
   return (
      <Wrapper>
         <Label htmlFor={id}>{label}</Label>
         <Input name={name} id={id} type={type} value={value} onChange={onChange} data-testid={label} />
      </Wrapper>
   );
};

FormField.propTypes = {
   label: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   id: PropTypes.string.isRequired,
   type: PropTypes.string,
};

export default FormField;
