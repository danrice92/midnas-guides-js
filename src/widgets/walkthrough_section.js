import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

export default function WalkthroughSection({ guideName, section }) {
  const { part, title, intros = [], steps } = section;

  return (
    <Accordion.Item eventKey={title}>
      <Accordion.Header>
        {guideName} Part {part}: {title}
      </Accordion.Header>
      <Accordion.Body>
        {intros.map((introPart, introIndex) => (
          <p key={introIndex}>{introPart}</p>
        ))}
        <ListGroup as="ol" numbered>
          {steps.map((step, stepIndex) =>
            typeof step === 'string' ? (
              <ListGroup.Item as="li" key={stepIndex}>
                {step}
              </ListGroup.Item>
            ) : (
              <React.Fragment key={stepIndex}>
                {step.intros &&
                  step.intros.map((introPart, stepIntroIndex) => (
                    <p key={stepIntroIndex}>{introPart}</p>
                  ))}
                {step.title && <h3>{step.title}</h3>}
                {step.subSteps.map((subStep, subStepIndex) => (
                  <ListGroup.Item as="li" key={subStepIndex}>
                    {subStep}
                  </ListGroup.Item>
                ))}
              </React.Fragment>
            )
          )}
        </ListGroup>
      </Accordion.Body>
    </Accordion.Item>
  );
}

{
  /* <Accordion.Item eventKey="firstQuestWalkthrough">
<Accordion.Header>First Quest Walkthrough</Accordion.Header>
<Accordion.Body>
</Accordion.Body>
</Accordion.Item> */
}
