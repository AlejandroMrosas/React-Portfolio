import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import PortfolioImg from '../PhotoList';

function Portfolio(props) {
  const { currentPortfolio } = props;   
  return (
    <section>
    <h1 data-testid="h1tag">{capitalizeFirstLetter(currentPortfolio.name)}</h1>
    <p>{currentPortfolio.description}</p>
    <PortfolioImg category={currentPortfolio.name} />
  </section>
  );
}


export default Portfolio;