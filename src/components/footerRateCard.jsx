import React, {useEffect, useState} from 'react';
import footerContent from '../images/footer-content.png';
import '../style/global.css'
import axios from "axios";

let RateCard = () => {
    const [service, setServiceData] = useState([]);
    const [program, setProgram] = useState([]);
    const [submit, setAfterSubmit] = useState([]);

    const fetchData = () => {
        // basic data
        const serviceData = 'http://reframing.co:8080/api/v1/service';
        // insight
        const programData = 'http://reframing.co:8080/api/v1/program';

        const getServiceData = axios.get(serviceData)
        const getProgram = axios.get(programData)
        axios.all([getServiceData, getProgram]).then(
            axios.spread((...allData) => {
                console.log("service", allData[0])
                console.log("program", allData[1])
                const allServiceData = allData[0].data.data
                const allProgram = allData[1].data.data

                setServiceData(allServiceData)
                setProgram(allProgram)
            })
        )
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        const data = new FormData(event.target)
        const postData = {
            name : data.get("name"),
            email : data.get("email"),
            service_id : data.get("service_id"),
            program_id : data.get("program_id"),
        }

        axios.post('http://reframing.co:8080/api/v1/inquiry', postData)
            .then(response => {
                console.log("res", response)
                setAfterSubmit({ articleId: response.data.data })
                if (response.data.status) {
                    alert("Form Submitting")
                } else {
                    alert("Failed Submit Form")
                }
            })
            .catch(error => {
                alert("Failed Submit Form")
                console.error("submit_card", error)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="row montserat-font" id="rate">
            <div className="col-lg-7 col-12 b-yellow over-x">
                <div className="rate-card-group m-auto">
                    <h4 className="fs-24 fw-700 c-black mt-50 container">
                        Bapak2id Rate Card
                    </h4>
                    <p className="c-black fs-14 container">
                        We will send it right through your e-mail
                    </p>

                    <form className="form-rate mt-50 container" method="POST" onSubmit={handleSubmit}>
                        <div class="form-row">
                            <div class="col-md-6 col-12">
                                <label htmlFor="" className="fs-14 c-black">Name</label>
                                <input type="text" name={"name"} class="form-control bg-transparent border-input plc" placeholder="Name" required/>
                            </div>
                            <div class="col-md-6 col-12 mt-md-0 mt-3">
                                <label htmlFor="" className="fs-14 c-black">Company Email</label>
                                <input type="text" name={"email"} class="form-control bg-transparent border-input plc" placeholder="Company Email" required/>
                            </div>
                        </div>
                        <div class="form-row mt-md-5">
                            <div class="form-group col-12 mt-3 mt-md-0">
                                <label for="inputState" className="fs-14 c-black">Ala Carte</label>
                                <select id="inputState" name={"service_id"} class="form-control bg-transparent options border-input" required>
                                    <option selected className="option-select options">Select Service</option>
                                    {
                                        service.length > 0 ? service.map(item => {
                                            const {datas} = item;
                                            return (

                                                <option className="option-select options" key={item.id} value={item.id}>{item.name}</option>

                                            );
                                        }) : null
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="form-row mt-50 mb-5">
                            <button type={"submit"} className="btn-cek-rate fs-14 fw-700 c-black pt-2 pb-2 b-white m-auto col">
                                Cek Rate Card
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-lg-5 col-12 footer-content-group d-lg-block d-none b-yellow">
                <img src={footerContent} alt="footer content" className="footer-content h-100 w-100"/>
            </div>
        </div>
    )
}

function footerRateCard() {

}

export default RateCard;
