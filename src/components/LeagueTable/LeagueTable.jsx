import React from 'react';
import '../WeeklyAgenda/WeeklyAgenda2.css';

const LeagueTable = ({ leagueData }) => {
    return (
        <>
            <div className="task-item">
                <div className='agenda-day'>
                    <div className="day-header">League Table</div>
                    <div className="agenda-day">
                        <ul className="task-list">
                            {leagueData.length > 0 ? (
                                leagueData.map((entry, index) => (
                                    <li key={index} className="task-item">
                                        <div className="task-content">
                                            <div className="task-title">
                                                {entry.position}. {entry.person}
                                            </div>
                                        </div>
                                        <div className="task-points">Points: {entry.points}</div>
                                    </li>
                                ))
                            ) : (
                                <li className="no-tasks">No league data available</li>
                            )}

                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LeagueTable;
