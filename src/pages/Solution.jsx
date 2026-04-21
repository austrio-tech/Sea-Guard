import React from 'react';
import SolutionHero from '../components/Solution/SolutionHero';
import ProblemSolution from '../components/Solution/ProblemSolution';
import Technology from '../components/Solution/Technology';
import MarketInsight from '../components/Solution/MarketInsight';
import FutureVision from '../components/Solution/FutureVision';
import '../styles/Solution.css';

const Solution = () => {
  return (
    <div className="solution-page">
      <SolutionHero />
      <ProblemSolution />
      <Technology />
      <MarketInsight />
      <FutureVision />
    </div>
  );
};

export default Solution;
