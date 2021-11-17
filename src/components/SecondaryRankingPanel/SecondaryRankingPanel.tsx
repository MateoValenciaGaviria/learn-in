import React from 'react';
import { RankingType } from '../../utils/types/RankingType';

interface RankingRowProps{
    rankList: RankingType[]
}

const LocalRank = [
    {
        id: "spanish",
        course: "Español",
        points: 0,
        rank: "Plata"
    }
];

export const RankingRow: React.FC<RankingType> = ({ id, course, points, rank }) => {

    return (
      <div className="ranking-Row">
      </div>
    );
  
}

export const SecondaryRankingPanel: React.FC<RankingRowProps>= ({ rankList }) => {

  return (
    <div className="secondary-ranking-panel">
        {rankList.map(rank => {
            <RankingRow
            id={rank.id}
            course={rank.course}
            points={rank.points}
            rank={rank.rank}
            rankId={rank.rankId}></RankingRow>
        })}
    </div>
  );

}