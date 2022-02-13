import {
  faCheckCircle,
  faDotCircle,
  faExclamationCircle,
  faExclamationTriangle,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AlertState } from 'app/alertSlice';
import { FC } from 'react';
import { Container, Icon } from './Alert.style';

export const Alert: FC<AlertState> = (props) => {
  const { message, severity } = props;
  // eslint-disable-next-line consistent-return
  const severityType = () => {
    switch (severity) {
      case 'error':
        return { icon: faExclamationCircle, color: '#f75c03' };
      case 'info':
        return { icon: faInfoCircle, color: '#547AA5' };
      case 'warning':
        return { icon: faExclamationTriangle, color: '#D36135' };
      case 'success':
        return { icon: faCheckCircle, color: '#03a10a' };
      default:
        return { icon: faDotCircle, color: '#1e1e1e' };
    }
  };
  return (
    <Container color={severityType().color}>
      <Icon>
        <FontAwesomeIcon icon={severityType().icon} color={severityType().color} size="lg" />
      </Icon>
      <p>{message}</p>
    </Container>
  );
};
