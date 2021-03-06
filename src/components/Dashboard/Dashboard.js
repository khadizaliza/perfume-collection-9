
import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import SpeacialChart from '../SpeacialChart/SpeacialChart';

const Dashboard = () => {
    const data = [
        {
            month: "Mar",
            investment: 100000,
            sell: 241,
            revenue: 10401,
        },
        {
            month: "Apr",
            investment: 200000,
            sell: 423,
            revenue: 24500,
        },
        {
            month: "May",
            investment: 500000,
            sell: 726,
            revenue: 67010,
        },
        {
            month: "Jun",
            investment: 500000,
            sell: 529,
            revenue: 40405,
        },
        {
            month: "Jul",
            investment: 600000,
            sell: 601,
            revenue: 50900,
        },
        {
            month: "Aug",
            investment: 700000,
            sell: 670,
            revenue: 61000,
        }
    ]
    return (
        <div>
            <LineChart width={800} height={500}  data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <Line dataKey={'month'}></Line>
            <Line dataKey={'investment'}></Line>
            <Line dataKey={'revenue'}></Line>
            <XAxis dataKey={'sell'}></XAxis>
            <Tooltip></Tooltip>
            <YAxis></YAxis>
            
        <></></LineChart>
        <SpeacialChart></SpeacialChart>
        </div>
            
      
        
    );
};

export default Dashboard;







