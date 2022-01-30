import { faAngleDoubleDown, faArrowDown, faCheckSquare, faDiceOne, faDiceTwo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'
import { Container, Step, Icon } from './Stepper.style'
import { selectIssue } from 'app/issueSlice'
import { useAppSelector } from 'app/hooks'

export const Stepper: FC = () => {
  const issue = useAppSelector(selectIssue)

  return (
    <Container>
      <Step active={issue.step >= 1}>
        <Icon>
          <FontAwesomeIcon icon={faDiceOne} />
        </Icon>
        <p>Select a member</p>
      </Step>
      <Step active={issue.step >= 2}>
        <Icon>
          <FontAwesomeIcon icon={faDiceTwo} />
        </Icon>
        <p>Select a book</p>
      </Step>
      <Step active={issue.step === 3}>
        <Icon>
          <FontAwesomeIcon icon={faCheckSquare} />
        </Icon>
        <p>All Done!</p>
      </Step>
    </Container>
  )
}