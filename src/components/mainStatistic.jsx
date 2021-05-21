import React, {Component, useEffect, useState} from 'react';
import axios from "axios";

class MainStatistic extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }

    componentDidMount() {
        fetch("http://reframing.co:8080/api/v1/bapak2id/insight?period=day")
            .then(res => res.json())
            .then(parsedJSON => parsedJSON.results.map(data => (
                {
                    datas: `${data.data.data}`
                }
            )))
            .then(items => this.setState({
                items,
                isLoaded: false
            }))
            .catch(error => console.log('parsing failed', error))
    }

    render() {
        const {items } = this.state;
        return (


        <div className="ptb-100 b-grey" id="analisis">
            <div className="row container m-auto d-block pb-100 pb-500-50">
                <h4 className="fs-24 c-black fw-700 montserat-font">
                    Our Statistic
                </h4>
                <p className="fs-14 c-black montserat-font">
                    Real Time Analitycs
                </p>
            </div>
            <div className="row container m-auto">

                {
                    items.length > 0 ? items.map(item => {
                        const {datas} = item;
                        return (

                            <div className="col-lg-4 col-md-6 col-12 mb-100 mb-900-30 mb-500-0">
                                <h4 className="c-black fs-24 fs-500-18 fw-700 montserat-font">
                                    {datas.title}
                                </h4>
                                <h1 className="c-purple fs-144 fs-500-96 bebas-font">
                                    {datas.name}
                                </h1>
                            </div>

                        );
                    }) : null
                }



            </div>
        </div>


        );

    }

}

const List = () => {

    const [basicData, setBasicData] = useState([]);

    const fetchData = () => {
        // basic data (realtime)
        const basicData = 'http://128.199.107.24:8080/api/v1/bapak2id/realtime';

        const getBasicData = axios.get(basicData)
        axios.all([getBasicData]).then(
            axios.spread((...allData) => {
                console.log("basic", allData[0])
                const allBasicData = allData[0].data.data

                setBasicData(allBasicData)
            })
        )
    }

    const k_formatter = (num) => {

        return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num)/1000).toFixed(1)) + 'K' : Math.sign(num) * Math.abs(num)
    }

    const ranges = [
        {divider: 1e18, suffix: 'E'},
        {divider: 1e15, suffix: 'P'},
        {divider: 1e12, suffix: 'T'},
        {divider: 1e9, suffix: 'G'},
        {divider: 1e6, suffix: 'M'},
        {divider: 1e3, suffix: 'K'}
    ];

    const formatNumber = (num) => {
        for (let i = 0; i < ranges.length; i++) {
            if (Math.abs(num) >= ranges[i].divider) {
                // return (n / ranges[i].divider).toString() + ranges[i].suffix;
                return ((Math.abs(num)/ranges[i].divider).toFixed(1)).toString() + ranges[i].suffix
            }
        }
        return (Math.sign(num) * Math.abs(num)).toString();
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (

        <div className="ptb-100 b-grey" id="analisis">
            <div className="row container m-auto d-block pb-100 pb-500-50">
                <h4 className="fs-24 c-black fw-700 montserat-font">
                    Our Statistic
                </h4>
                <p className="fs-14 c-black montserat-font">
                    Real Time Analytics
                </p>
            </div>
            <div className="row container m-auto">
                <div className="col-lg-4 col-md-6 col-12 mb-100 mb-900-30 mb-500-0">
                    <h4 className="c-black fs-24 fs-500-18 fw-700 montserat-font">
                        Followers
                    </h4>
                    <h1 className="c-purple fs-144 fs-500-96 bebas-font">
                        { formatNumber(basicData.followers) }
                        {/*{ k_formatter(basicData.followers) }*/}
                    </h1>
                </div>
                <div className="col-lg-4 col-md-6 col-12 border-left">
                    <h4 className="c-black fs-24 fs-500-18 fw-700 montserat-font">
                        Avg Engagement Rate
                    </h4>
                    <h1 className="c-purple fs-144 fs-500-96 bebas-font">
                        5%
                    </h1>
                </div>
                <div className="col-lg-4 col-md-6 col-12 border-left mb-900-30 mb-500-0">
                    <h4 className="c-black fs-24 fs-500-18 fw-700 montserat-font">
                        Reach/Post
                    </h4>
                    <h1 className="c-purple fs-144 fs-500-96 bebas-font">
                        { formatNumber(basicData.reach) }
                        {/*{ k_formatter(basicData.reach) }*/}
                    </h1>
                </div>
                <div className="col-lg-4 col-md-6 col-12">
                    <h4 className="c-black fs-24 fs-500-18 fw-700 montserat-font">
                        Content Interaction
                    </h4>
                    <h1 className="c-purple fs-144 fs-500-96 bebas-font">
                        { formatNumber(basicData.impressions) }
                        {/*{ k_formatter(basicData.impressions) }*/}
                    </h1>
                </div>
                <div className="col-lg-4 col-md-6 col-12 border-left">
                    <h4 className="c-black fs-24 fs-500-18 fw-700">
                        Profile Visit
                    </h4>
                    <h1 className="c-purple fs-144 fs-500-96 bebas-font">
                        { formatNumber(basicData.profile_views) }
                        {/*{ k_formatter(basicData.profile_views) }*/}
                    </h1>
                </div>
            </div>
        </div>

    )
}


export default List;
