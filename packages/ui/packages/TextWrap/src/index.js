import * as React from 'react';
import PropTypes from 'prop-types';

import { StyledTextWrap } from './styles';

const TextWrap = props => <StyledTextWrap data-testid="textWrap" {...props} />;

TextWrap.propTypes = {
  lines: PropTypes.number.isRequired,
  lineHeight: PropTypes.number.isRequired,
};

export default TextWrap;
