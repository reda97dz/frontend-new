import { FC } from 'react';
import { Text } from './Title.style';

const Title: FC<{ text: string }> = (props) => {
  const { text } = props;

  return <Text>{text}</Text>;
};

export default Title;
