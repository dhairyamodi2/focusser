import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    LogarithmicScale
  } from 'chart.js'
  import { Chart as reactChart} from 'react-chartjs-2'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    LogarithmicScale
  )

const Chart : React.FC = () => {

    const [history, setHistory] = useState<Array<number>>();
    useEffect(() => {
        
        let focus_time_history = localStorage.getItem("focus_time_history");
        if(focus_time_history != null){
            let ft : Array<number> = JSON.parse(focus_time_history);
            setHistory(ft);
        }
    }, [])
    return (
        <div className="chart">
            {history && 
            <Line options={
                {
                    responsive: true,
                    plugins: {
                        legend: {position: 'top' as const},
                        title: {display: true, text: 'PERFORMANCE LINE CHART', font: {family: 'Ubuntu', size: 20}}
                    },
                    scales: {
                        x: {
                            display: true,
                            beginAtZero: true
                        },
                        y: {
                            min: 0,
                            display: true,
                            type: 'logarithmic',
                           
                        },

                        
                    }
                }
            } data={
                {
                    labels: history.map((item, index) => index + 1),
                    datasets: [{
                        label: 'Performance',
                        data: history,
                        borderColor: '#319795'
                    }],
                }
            }/>}
        </div>
    )
}

export default Chart;