import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Pie} from "react-chartjs-2";

let MainLocation = () => {
    const [citiesData, setCitiesData] = useState([]);
    const [ageData, setAgeData] = useState([]);
    const [genderData, setGenderData] = useState([]);
    const [label, setChartData] = useState([]);
    const [percent, setPercentData] = useState([]);

    const fetchData = () => {
        // insight (statistic)
        const urlStatisticData = 'http://reframing.co:8080/api/v1/bapak2id/statistic';

        const getStatisticData = axios.get(urlStatisticData)
        axios.all([getStatisticData]).then(
            axios.spread((...allData) => {
                console.log("statistic", allData[0])
                const allStatisticData = allData[0].data.data

                setCitiesData(allStatisticData.cities)
                setAgeData(allStatisticData.age_range)
                setGenderData(allStatisticData.gender)

                setChartData(buildChartDataLabel(allStatisticData.gender))
                setPercentData(buildChartDataPercent(allStatisticData.gender))
            })
        )
    }

    const buildChartDataLabel = (rawData) => {
        const label = []

        Object.keys(rawData).map(item => {
            return label.push(item);
        })
        return label
    }

    const buildChartDataPercent = (rawData) => {
        const percent = []

        Object.keys(rawData).map(item => {
            const purePercent = rawData[item]
            return percent.push(purePercent.replace("%", ""));
        })
        return percent
    }

    const pieChart = {
        labels: label,
        datasets: [
            {
                label: 'Rainfall',
                backgroundColor: [
                    '#6B52FC',
                    '#C9DE00',
                    '#E8E8E8',
                    '#00A6B4',
                    '#6800B4'
                ],
                hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                    '#175000',
                    '#003350',
                    '#35014F'
                ],
                data: percent
            }
        ]
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (

        <div className="ptb-100 row m-auto container">
            <div className="col-lg-4 col-12 mb-900-30">
                <h4 className="c-black fw-700 fs-24 montserat-font">
                    Top Location
                </h4>
                <div className="content-wrapper mt-3">

                    {

                        Object.keys(citiesData).length > 0 ? Object.keys(citiesData).map(item => {

                            const percentage = citiesData[item]
                            return (

                                <div className="content-progress">
                                    <label htmlFor="file" className="mr-2 text-left w-15">{citiesData[item]}</label>
                                    <progress id="file" value={ percentage.replace("%", "") } max="100" className=""> {citiesData[item]}</progress>
                                    <span className="ml-2">{item}</span>
                                </div>

                            );
                        }) : null
                    }

                </div>
            </div>
            <div className="col-lg-4 col-12 mb-900-30">
                <h4 className="c-black fw-700 fs-24 montserat-font">
                    Gender
                </h4>
                <div className="content-wrapper">
                    {/*<div className="pieChart rounded-circle m-auto mt-3"></div>*/}
                    <Pie
                        data={pieChart}
                        options={{
                            title:{
                                display:false,
                                text:'Average Rainfall per month',
                                fontSize:20
                            },
                            legend:{
                                display:false,
                                position:'right'
                            }
                        }}
                    />
                    <div className="percentage d-flex justify-content-around">
                        {

                            Object.keys(genderData).length > 0 ? Object.keys(genderData).map(item => {

                                const percentage = genderData[item]
                                return (

                                    <h3 className="d-block fs-24 fw-700">{genderData[item]} <br/> <span className="fs-14 fw-400">{ item.trim().replace(/^\w/, (c) => c.toUpperCase()) }</span></h3>

                                );
                            }) : null
                        }

                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-12 mb-900-30">
                <h4 className="c-black fw-700 fs-24 montserat-font mb-3">
                    Age Range
                </h4>

                {

                    Object.keys(ageData).length > 0 ? Object.keys(ageData).map(item => {

                        const percentage = ageData[item]
                        return (

                            <div className="content-progress">
                                <label htmlFor="file" className="mr-2 text-left label-age">{ageData[item]}</label>
                                <progress id="file" value={ percentage.replace("%", "") } max="100" className=""> {ageData[item]}</progress>
                                <span className="ml-2">{item}</span>
                            </div>

                        );
                    }) : null
                }

            </div>
        </div>
    )
}


export default MainLocation
