import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import ListGroup from 'react-bootstrap/ListGroup';

function MultiOptionSteps({ options }) {
  if (!options) return null;

  return (
    <ListGroup as="ul">
      {options.map((option, optionIndex) => (
        <ListGroup.Item as="li" key={optionIndex}>
          {option}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

function WalkthroughStep({ step }) {
  const { intros = [], instructions, options } = step;

  return (
    <React.Fragment>
      {intros.map((introPart, stepIntroIndex) => (
        <p key={stepIntroIndex}>{introPart}</p>
      ))}
      <ListGroup.Item as="li">
        {instructions ? instructions : null}
        <MultiOptionSteps options={options} />
      </ListGroup.Item>
    </React.Fragment>
  );
}

export default function WalkthroughSection({ section }) {
  const { part, title, intros = [], steps } = section;

  return (
    <Accordion.Item eventKey={part}>
      <Accordion.Header>
        {part}. {title}
      </Accordion.Header>
      <Accordion.Body>
        {intros.map((introPart, introIndex) => (
          <p key={introIndex}>{introPart}</p>
        ))}
        <ListGroup as="ol" numbered>
          {steps.map((step, stepIndex) => (
            <WalkthroughStep key={stepIndex} step={step} />
          ))}
        </ListGroup>
      </Accordion.Body>
    </Accordion.Item>
  );
}
