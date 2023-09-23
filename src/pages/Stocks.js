import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LineChart from '../components/Chart';
import axios from 'axios';

const Stocks = () => {
    const [chartData, setChartData] = useState({});
    const [summary, setSummary] = useState(null);
    const [flag, setFlag] = useState(null);
    const { state } = useLocation();
    const apiKey = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        const fetchTrend = async () => {
          try {
            const options = {
                method: 'GET',
                url: `https://yfapi.net/v8/finance/chart/${state}?range=1mo&interval=1d`,
                headers: {
                    'x-api-key': apiKey
                }
            };

            const response = await axios.request(options);
            setChartData({
                labels: response.data.chart.result[0].timestamp.map((elem) => new Date(elem * 1000).toLocaleDateString("en-US")),
                datasets: [{
                    label: 'Changes Reflected Daily',
                    data: response.data.chart.result[0].indicators.quote[0].close,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderWidth: 5
                }],
            });
            setSummary(response.data.chart.result[0].meta);
            setFlag(response.data.chart.result);
          } catch (error) {
            console.error(error);
          }
        }
    
        fetchTrend();
    }, [apiKey, state]);

    return (
        <>
        {
            !flag ? (
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card rounded shadow-lg m-2 chart-true">
                                <p className="error-message" style={{ padding: "9px" }}>Loading Data...</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="stock-row">
                    <div className="stock-column-data">
                        {
                            summary ? (
                                <>
                                    <h2><span style={{ color: "black" }}><span className='summary-span'>{ summary.exchangeName } ({summary.symbol})</span> ${summary.regularMarketPrice}</span></h2>
                                    <div className='stock-headings'>
                                        <h4><span className='summary-span'>Exchange Name:</span><span style={{ color: "black"}}> {" "} {summary.exchangeName}</span></h4>
                                        <hr /><br />
                                        <h4><span className='summary-span'>Instrument Type:</span><span style={{ color: "black"}}>{" "} {summary.instrumentType}</span></h4>
                                        <hr /><br />
                                        <h4><span className='summary-span'>Previous Close Price:</span><span style={{ color: "black"}}>{" "} ${summary.chartPreviousClose}</span></h4>
                                        <hr /><br />
                                        <h4><span className='summary-span'>Current Price:</span><span style={{ color: "black"}}>{" "} ${summary.regularMarketPrice}</span></h4>        
                                        <hr /><br />
                                    </div>
                                </>
                            ) : (
                                <div>Loading....</div>
                            )
                        }
                    </div>
                    <div className="stock-column-chart">
                        <LineChart chartData={chartData} />
                    </div> 
                </div>
            )
        }
        </>
    )
}

export default Stocks;