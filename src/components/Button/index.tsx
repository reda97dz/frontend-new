import { FC } from 'react';
import { Btn } from './Button.style';

export interface IButton {
  text: string;
  type?: string;
  [x: string]: any;
}

const Button: FC<IButton> = (props) => {
  const { text, type, ...rest } = props;
  return (
    <Btn color={type || '#44ce42'} {...rest}>
      {text}
    </Btn>
  );
};
export default Button;
