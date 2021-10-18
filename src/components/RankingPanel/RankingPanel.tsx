import React from 'react';

export const RankingPanel = () => {

  return (
    <div className="ranking-panel">
      <h4 className="ranking-panel__title">Ranking</h4>
      <div className="ranking-panel__ranks-container">
          <div className="ranking-panel__rank">
            <div className="ranking-panel__rank-icon pearl">
                <h1 className="ranking-panel__course-letter">F</h1>
            </div>
            <h3 className="ranking-panel__course-name">Física</h3>
            <div className="ranking-panel__rank-name">Perla</div>
          </div>
          <div className="ranking-panel__rank ranking-panel__rank--middle">
            <div className="ranking-panel__rank-icon ranking-panel__rank-icon--middle diamond">
                <h1 className="ranking-panel__course-letter ranking-panel__course-letter--middle">M</h1> 
            </div>
            <h3 className="ranking-panel__course-name">Matemáticas</h3>
            <div className="ranking-panel__rank-name">Diamante</div>
          </div>
          <div className="ranking-panel__rank">
            <div className="ranking-panel__rank-icon pearl">
                <h1 className="ranking-panel__course-letter">E</h1>
            </div>
            <h3 className="ranking-panel__course-name">Español</h3>
            <div className="ranking-panel__rank-name">Perla</div>
          </div>
      </div>
    </div>
  );

}