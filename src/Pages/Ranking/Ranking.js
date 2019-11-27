import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './RankingHeader';
import RankingList from './RankingList';
import { getRankingList } from '../../store/actions/rankingActions'
import Tab from '../../Components/Tab';

export default function Ranking() {
    const dispatch = useDispatch();
    const tabItems = ["Cidade", "Estado", "País"];
    const [viewBy, setViewBy] = useState("School");
    const [activeTab, setActiveTab] = useState(tabItems[0]);
    const { rankingList } = useSelector(({ ranking }) => ranking)

    useEffect(() => {
        dispatch(getRankingList(`/${viewBy.toLowerCase()}/${activeTab.toLowerCase()}`))
    }, [viewBy, activeTab, dispatch])

    useEffect(() => {
        setActiveTab("Cidade")
    }, [viewBy])

    return (
        <>
            <Header viewBy={viewBy} setViewBy={setViewBy} />
            <div className="rankingContent">
                <Tab tabItems={tabItems} activeTab={activeTab} setActiveTab={setActiveTab}>
                    {rankingList ? <RankingList list={rankingList} /> : <p>Carregando</p>}
                </Tab>
            </div>
        </>
    )
};