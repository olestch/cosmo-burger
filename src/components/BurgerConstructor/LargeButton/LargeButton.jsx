import React from "react";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

const LargeButton = (props) => {
  return (
    <Button type="primary" size="large" onClick={props.open} htmlType="button">
      {props.text}
    </Button>
  );
};

LargeButton.propTypes = {
  open: PropTypes.func.isRequired,
  text: PropTypes.string
};

export { LargeButton };
