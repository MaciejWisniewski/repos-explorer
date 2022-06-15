import * as React from 'react';
import InputUnstyled, { InputUnstyledProps } from '@mui/base/InputUnstyled';
import { styled } from '@mui/system';
import { blue, grey } from '../../styles/colors';

const StyledInputElement = styled('input')(`
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${grey[5]};
  background: ${grey[1]};
  border: 1px solid ${grey[3]};
  padding: 12px 12px;
  width: 100%;

  &:hover {
    background: ${grey[2]}};
    border-color: ${grey[4]};
  }

  &:focus {
    outline: 2px solid ${blue[2]};
  }
`);

const Root = styled('div')(`
width: 100%;`);

const CustomInput = React.forwardRef(function CustomInput(
  props: InputUnstyledProps,
  ref: React.ForwardedRef<HTMLDivElement>
) {
  return (
    <InputUnstyled
      components={{ Input: StyledInputElement, Root }}
      {...props}
      ref={ref}
    />
  );
});

type InputProps = {
  placeholder?: string;
  autoFocus?: boolean;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<any>) => void;
};

const Input: React.FC<InputProps> = (props) => {
  return <CustomInput {...props} />;
};

export default Input;
