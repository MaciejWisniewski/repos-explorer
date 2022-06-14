import * as React from 'react';
import InputUnstyled, { InputUnstyledProps } from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import { blue, grey } from '../../styles/colors';

const StyledInputElement = styled('input')(`
  width: 320px;
  font-size: 0.875rem;
  font-family: IBM Plex Sans, sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: ${grey[400]});
  background: ${grey[50]};
  border: 1px solid ${grey[200]};
  padding: 12px 12px;

  &:hover {
    background: ${grey[100]}};
    border-color: ${grey[300]};
  }

  &:focus {
    outline: 2px solid ${blue[100]};
  }
`);

const CustomInput = React.forwardRef(function CustomInput(
  props: InputUnstyledProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <InputUnstyled
      components={{ Input: StyledInputElement }}
      {...props}
      ref={ref}
    />
  );
});

type InputProps = {
  placeholder?: string;
};

const Input: React.FC<InputProps> = ({ placeholder }) => {
  return <CustomInput placeholder={placeholder} />;
};

export default Input;
