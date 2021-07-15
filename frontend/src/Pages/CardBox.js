import { Card, Input, Button } from 'antd';
const { TextArea } = Input;

const  CardBox= (props) => {
    console.log(props.OutputNum)
    return ( 
        <Card bordered={false} style={{ width: 400 }} >
            <Input
                id="userName"
                size="large"
                placeholder="Enter a number here..."
                onChange={(e)=>{props.setInputNum(e.target.value)}}
            /> 

            <br/><br/>

            <Button type="primary" size="large" block onClick={props.convert} > Convert </Button>
            <br/><br/>
            <TextArea
                value={props.OutputNum}
                size="large"
                placeholder="The converted letters will be here..."
                autoSize={{ minRows: 3, maxRows: 5 }}
            />
        </Card>
     );
}
 
export default CardBox;