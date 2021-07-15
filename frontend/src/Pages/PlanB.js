import 'antd/dist/antd.css';
import axios from "axios"
import CardBox from './CardBox';
import { useState} from 'react';
import {Link} from "react-router-dom";
import {Button } from 'antd'

const PlanB = () => {

    const [InputNum,setInputNum] = useState('');
    const [OutputNum,setOutputNum] = useState('');

    const convert = () => {
        let baseUrl="http://localhost:3001";
        axios({
            method:"post",
            url:baseUrl+"/convert",
            data:{
                "input":"23"
            },
            header:{ 'Access-Control-Allow-Origin':'*' }
        }).then(
            (res) => {
                //console.log("res---",res)
                const covertedValue=res.data.result.join(",")
                setOutputNum(covertedValue)
            }
        )
    }

    return ( 

        <div className="cardbox">
            <div className="btnBox">
                <Button block>
                    <Link to="/">PlanA-Conver in frontend</Link>
                </Button>
                <Button type="danger" block>
                    <Link to="/planb">Current-PlanB-Convert in backend</Link>
                </Button>
            </div>
            <CardBox 
                convert={convert}
                setInputNum={setInputNum}
                setOutputNum={setOutputNum}
                OutputNum={OutputNum}
                InputNum={InputNum}
            />
        </div>
     );
}
 
export default PlanB;   