import 'antd/dist/antd.css';
import { useState} from 'react';
import 'antd/dist/antd.css';
import '../static/Calc.css';
import CardBox from './CardBox';
import {Link} from "react-router-dom";
import {Button } from 'antd'


const PlanA = () => {

    const [InputNum,setInputNum] = useState('');
    const [OutputNum,setOutputNum] = useState('');

    function mergeLetters(str) {
        let map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
        const mumber = str.split('')
        const code = []
        mumber.forEach(m => {
        if (map[m]) {
            code.push(map[m])
        }
        })
    
        const merge = (ary) => {
        let temAry = []
    
        for (let i = 0; i < ary[0].length; i++) {
            const cur = ary[0][i];
            for (let j = 0; j < ary[1].length; j++) {
            const cur2 = ary[1][j];
            temAry.push(`${cur}${cur2}`)
            }
        }

        ary.splice(0, 2, temAry)
    
        if(ary.length > 1) {
            merge(ary)
            console.log(ary)
        } else {
            return temAry
        }

        return ary[0]
        }
        return merge(code)
    }

    const convert=() => {
        const result = mergeLetters(InputNum)
        setOutputNum(result)
    }

    return ( 
        <div className="cardbox">
            <div className="btnBox">
                <Button type="danger" block width={400}>
                    <Link to="/">Current-PlanA-Conver in frontend</Link>
                </Button>
                <Button block>
                    <Link to="/planb">PlanB-Convert in backend</Link>
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
 
export default PlanA;   