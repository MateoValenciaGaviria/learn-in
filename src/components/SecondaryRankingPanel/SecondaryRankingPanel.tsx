import React, { useEffect, useState } from 'react';
import { RankingType } from '../../utils/types/RankingType';


var localSortedRanks: RankingType[] = [
    {
        id: "",
        course: "",
        points: 0,
        rank: "",
        rankId: 0
    },
    {
        id: "",
        course: "",
        points: 0,
        rank: "",
        rankId: 0
    },
    {
        id: "",
        course: "",
        points: 0,
        rank: "",
        rankId: 0
    },
];

var currentTopRanks: RankingType[] = [];
var currentRanks: RankingType[] = [];
var rankListLength: number = 0;
var done: boolean = false;

interface SecondaryRankingPanelProps {
    rankList: RankingType[]
}

const RankingRow: React.FC<RankingType> = ({ course, points, rank, rankId }) => {

    return (
        <div className="ranking-row">
            <div className="ranking-row__icon-container">
                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className={"ranking-row__rank-color--" + rankId} d="M29.7034 1.23701C31.0293 0.471546 32.6628 0.471546 33.9886 1.23701L56.6835 14.3399C58.0093 15.1054 58.8261 16.52 58.8261 18.051V44.2568C58.8261 45.7877 58.0093 47.2024 56.6835 47.9678L33.9886 61.0707C32.6628 61.8362 31.0293 61.8362 29.7034 61.0707L7.00853 47.9678C5.68271 47.2024 4.86597 45.7877 4.86597 44.2568V18.051C4.86597 16.52 5.68271 15.1054 7.00853 14.3399L29.7034 1.23701Z" fill="#B7B7B7" />
                    <mask id="mask0_2102_1082" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="4" y="0" width="55" height="62">
                        <path d="M29.7034 1.23701C31.0293 0.471546 32.6628 0.471546 33.9886 1.23701L56.6835 14.3399C58.0093 15.1054 58.8261 16.52 58.8261 18.051V44.2568C58.8261 45.7877 58.0093 47.2024 56.6835 47.9678L33.9886 61.0707C32.6628 61.8362 31.0293 61.8362 29.7034 61.0707L7.00853 47.9678C5.68271 47.2024 4.86597 45.7877 4.86597 44.2568V18.051C4.86597 16.52 5.68271 15.1054 7.00853 14.3399L29.7034 1.23701Z" fill="#FFC91D" />
                    </mask>
                    <g mask="url(#mask0_2102_1082)">
                        <g style={{ mixBlendMode: "soft-light" }}>
                            <path d="M29.9037 57.0756L15.6003 53.2098C15.3468 53.1413 15.0819 53.1256 14.8221 53.1637C12.8273 53.4563 12.5784 56.2345 14.4893 56.877L30.4865 62.256C31.6346 62.642 32.8924 62.5242 33.9487 61.9316L57.3745 48.7903C58.7262 48.032 59.5631 46.6029 59.5631 45.0531V16.849C59.5631 15.6498 59.0607 14.5055 58.1778 13.6941L47.9271 4.27248C46.611 3.06289 44.4851 3.99641 44.4851 5.78389C44.4851 6.27279 44.6596 6.74565 44.9772 7.11736L53.2143 16.7586C53.8772 17.5345 54.2415 18.5215 54.2415 19.5421V41.9865C54.2415 43.5162 53.426 44.9299 52.1019 45.6958L33.1673 56.6482C32.1797 57.2194 31.0051 57.3733 29.9037 57.0756Z" fill="black" fill-opacity="0.5" />
                        </g>
                    </g>
                    <g style={{ mixBlendMode: "soft-light" }} opacity="0.5">
                        <path d="M29.7035 8.77607C31.0293 8.01061 32.6628 8.01061 33.9886 8.77607L50.1546 18.1095C51.4804 18.8749 52.2971 20.2896 52.2971 21.8205V40.4873C52.2971 42.0183 51.4804 43.4329 50.1546 44.1984L33.9886 53.5318C32.6628 54.2972 31.0293 54.2972 29.7035 53.5318L13.5376 44.1984C12.2117 43.4329 11.395 42.0183 11.395 40.4873V21.8205C11.395 20.2896 12.2117 18.8749 13.5376 18.1095L29.7035 8.77607Z" fill="black" />
                    </g>
                    <mask id="mask1_2102_1082" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="11" y="8" width="42" height="47">
                        <path d="M29.7035 8.77607C31.0293 8.01061 32.6628 8.01061 33.9886 8.77607L50.1546 18.1095C51.4804 18.8749 52.2971 20.2896 52.2971 21.8205V40.4873C52.2971 42.0183 51.4804 43.4329 50.1546 44.1984L33.9886 53.5318C32.6628 54.2972 31.0293 54.2972 29.7035 53.5318L13.5376 44.1984C12.2117 43.4329 11.395 42.0183 11.395 40.4873V21.8205C11.395 20.2896 12.2117 18.8749 13.5376 18.1095L29.7035 8.77607Z" fill="#FFC91D" />
                    </mask>
                    <g mask="url(#mask1_2102_1082)">
                        <g style={{ mixBlendMode: "soft-light" }}>
                            <path d="M29.9574 50.6898L19.5317 47.872C19.3396 47.8201 19.1388 47.8082 18.9418 47.8371C17.4298 48.0588 17.2411 50.1648 18.6896 50.6518L30.3792 54.5824C31.5273 54.9684 32.7851 54.8506 33.8414 54.258L50.6672 44.8191C52.0189 44.0608 52.8559 42.6317 52.8559 41.0819V20.7656C52.8559 19.5665 52.3534 18.4222 51.4705 17.6107L44.0357 10.7772C43.0381 9.8603 41.4266 10.5679 41.4266 11.9228C41.4266 12.2934 41.5589 12.6519 41.7996 12.9336L47.7948 19.9508C48.4578 20.7267 48.822 21.7137 48.822 22.7343V38.7666C48.822 40.2962 48.0066 41.7099 46.6824 42.4759L33.221 50.2624C32.2334 50.8336 31.0588 50.9874 29.9574 50.6898Z" fill="black" fill-opacity="0.3" />
                        </g>
                    </g>
                </svg>
                <h1 className="ranking-row__course-letter">{course.charAt(0)}</h1>
            </div>
            <div className="ranking-row__text-container">
                <p className="ranking-row__course-title">{course}</p>
                <p className="ranking-row__rank-title">{rank}</p>
            </div>
            <p className="ranking-row__points">{points + " Puntos"}</p>
        </div>
    );

}

export const SecondaryRankingPanel: React.FC<SecondaryRankingPanelProps> = ({ rankList }) => {

    const [sortedRanks, setSortedRanks] = useState(localSortedRanks);

    const handleLoadRanks = () => {
        currentRanks = [];
        currentTopRanks = [];
        loadCurrentRanks();
        getTopRanks();
        localSortedRanks = currentTopRanks;
    }

    const loadCurrentRanks = () => {
        Object.keys(rankList).map((key: any) => {
            const value = rankList[key]
            const temporalRank: RankingType = {
                id: value.id,
                course: value.course,
                points: value.points,
                rank: value.rank,
                rankId: value.rankId
            }
            currentRanks.push(temporalRank);
        });
        rankListLength = currentRanks.length;
    }

    const getTopRanks = () => {

        currentRanks.sort((a, b) => {
            var n = b.rankId - a.rankId;
            if (n !== 0) {
                return n;
            }

            return b.points - a.points;
        });

        currentTopRanks = currentRanks;
        currentTopRanks.splice(0, 3);
    }

    useEffect(() => { handleLoadRanks() }, []);
    useEffect(() => { setSortedRanks(currentTopRanks) }, [localSortedRanks]);

    return (
        <div className="secondary-ranking-panel">
            <div className="secondary-ranking-panel__wraper">
                {sortedRanks.map(rank => {
                    return <RankingRow
                        id={rank.id}
                        course={rank.course}
                        points={rank.points}
                        rank={rank.rank}
                        rankId={rank.rankId}></RankingRow>
                })}
            </div>
        </div>
    );

}