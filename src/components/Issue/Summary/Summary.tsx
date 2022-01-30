import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC } from "react";
import { Container, Header, Icon } from "./Summary.style";

export const Summary: FC = () => {
  return (
    <Container>
      <Header>
        <Icon>
          <FontAwesomeIcon icon={faClipboard} color="#001b2e" />
        </Icon>
        <p>Summary</p>
      </Header>
    </Container>
  )
}