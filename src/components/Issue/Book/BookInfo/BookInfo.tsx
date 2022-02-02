import { faBook, faEdit, faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import { clearBook, removeBook, selectIssue } from 'app/issueSlice';
import { Icon } from 'components/Issue/Stepper/Stepper.style';
import { FC } from 'react';
import { Container, Content, Footer, Header, Title } from './BookInfo.style';

interface Info {
  number: number;
}

export const BookInfo: FC<Info> = (props) => {
  const issue = useAppSelector(selectIssue);
  const dispatch = useAppDispatch();
  const { number } = props;
  return (
    <Container>
      <Header>
        <Title>
          <Icon>
            <FontAwesomeIcon icon={faBook} color="#fff" />
          </Icon>
          <p>Title right here</p>
        </Title>
        <div>
          <FontAwesomeIcon icon={faEdit} color="#fff" onClick={() => dispatch(clearBook(number))} />
          {'     '}
          {(number !== 0 || issue.bookIds.length > 1) && (
            <FontAwesomeIcon
              icon={faMinusCircle}
              color="#f00"
              onClick={() => dispatch(removeBook(number))}
            />
          )}
        </div>
      </Header>
      <Content>
        <p>Author</p>
        <p>Category</p>
      </Content>
      <Footer>
        <p>ref</p>
        <p>ref</p>
      </Footer>
    </Container>
  );
};
