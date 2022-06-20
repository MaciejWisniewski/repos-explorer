import * as React from 'react';
import ButtonUnstyled, {
  buttonUnstyledClasses,
} from '@mui/base/ButtonUnstyled';
import { styled } from '@mui/system';

const blue = {
  1: 'rgb(45, 156, 219)',
  2: 'rgb(40, 141, 199)',
  3: 'rgb(35, 125, 177)',
};

const CustomButton = styled(ButtonUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  font-weight: bold;
  font-size: 0.875rem;
  background-color: ${blue[1]};
  padding: 12px 24px;
  color: white;
  transition: all 150ms ease;
  cursor: pointer;
  border: none;
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;

  &:hover {
    background-color: ${blue[2]};
  }

  &.${buttonUnstyledClasses.active} {
    background-color: ${blue[3]};
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

type ButtonProps = {
  label?: string;
  disabled?: boolean;
  type?: string;
};

const Button: React.FC<ButtonProps> = ({ label, ...rest }) => {
  return <CustomButton {...rest}>{label}</CustomButton>;
};

export default Button;
