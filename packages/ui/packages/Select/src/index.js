import * as React from 'react';
import PropTypes from 'prop-types';
import { AngleDownIcon } from '@snappmarket/icons_snappmarket';
import {
  StyledSelectWrapper,
  StyledSelectIconWrapper,
  StyledSelect,
  StyledLabel,
  StyledStar,
  StyledMessage,
} from './styles';

const Select = React.forwardRef((props, ref) => {
  const {
    status,
    message,
    label,
    required,
    className,
    options,
    ...rest
  } = props;
  return (
    <StyledSelectWrapper data-testid="inputWrapper">
      {label && (
        <StyledLabel data-testid="inputLabel" htmlFor={rest.id || ''}>
          {label}{' '}
          {required && (
            <StyledStar data-testid="labelRequiredFlag">*</StyledStar>
          )}
        </StyledLabel>
      )}
      <StyledSelectIconWrapper className={className}>
        <AngleDownIcon />
        <StyledSelect
          name={label}
          ref={ref}
          status={status}
          {...rest}
        >
          {options.map(option => (
            <option key={option.key} value={option.value}>
              {option.title}
            </option>
          ))}
        </StyledSelect>
      </StyledSelectIconWrapper>
      {Object.keys(message).length > 0 && (
        <StyledMessage data-testid="inputMessages" type={message.type}>
          {message.content}
        </StyledMessage>
      )}
    </StyledSelectWrapper>
  );
});

Select.propTypes = {
  label: PropTypes.string,
  status: PropTypes.oneOf(['gray', 'red', 'blue', 'orange', 'green', 'yellow']),
  value: PropTypes.any,
  placeholder: PropTypes.any,
  message: PropTypes.shape({
    type: PropTypes.oneOf(['success', 'danger']),
    content: PropTypes.string,
  }),
  className: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  options: PropTypes.array,
};

Select.defaultProps = {
  label: '',
  status: 'gray',
  required: false,
  message: {},
};

export default Select;
