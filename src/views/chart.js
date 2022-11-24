import React from 'react';
import Navbar from './navbar'
import ChartStat from '../components/bar'

const Chart = () => {
    return (
        <div>
            <Navbar/>
            <p>Chart IMC</p>
            <ChartStat />
        </div>
    );
};

Chart.propTypes = {
    
};

export default Chart;