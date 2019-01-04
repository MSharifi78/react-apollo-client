import React from "react";
import { withFormsy } from "formsy-react";
import { Form, Message } from "semantic-ui-react";

const MyInput = props => {
  const {
    getErrorMessage,
    icon,
    placeholder,
    setValue,
    name,
    getValue,
    showError: shouldShowError,
    innerRef,
    value,
    validations,
    validationError,
    validationErrors,
    required,
    resetValue,
    getErrorMessages,
    isValid,
    isValidValue,
    isRequired,
    showRequired,
    showError,
    isPristine,
    isFormDisabled,
    isFormSubmitted,
    formNoValidate,
    hasValue,
    setValidations,
    ...rest
  } = props;
  return (
    <div style={{ marginBottom: "15px" }}>
      <Form.Input
        fluid
        icon={icon}
        iconPosition="left"
        placeholder={placeholder}
        onChange={(e, { value }) => setValue(value)}
        name={name}
        value={getValue() || ""}
        error={shouldShowError()}
        disabled={isFormDisabled()}
        {...rest}
      />
      {shouldShowError() && <Message negative>{getErrorMessage()}</Message>}
    </div>
  );
};

export default withFormsy(MyInput);
