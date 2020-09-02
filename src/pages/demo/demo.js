import React from 'react'
import { Input,Button,Radio  } from 'antd';
class InputBox extends React.Component {
     constructor (){
         super();
         this.state = {
             index:-1,
             value:'',
             arr:[],
         };
     }
     change(e){ 
        this.setState({
            value:e.target.value,
        })
     }
     onChange(e){
        this.setState({
            index:e.target.value,
        })
     }
     add(arr){
        if(!arr) return
        var array = this.state.arr;
        array.push(arr)
        this.setState({
            arr:array,
            value:''
        })
     }
     render(){
         return(
            <div className="inputBbox">
                <div>
                    <Radio.Group onChange={(e)=>{this.onChange(e)}} value={this.state.index}>
                            {
                                this.state.arr.map((item, index) => {
                                    return  (
                                        <Radio value={index} key={index}>{item}</Radio> 
                                    )    
                                })
                            }
                    </Radio.Group>
                </div>
                <div className="selected">
                    {this.state.arr[this.state.index]?'Selected option is '+this.state.arr[this.state.index]:'No options yet'}
                </div>
                <Input placeholder={this.state.value} value={this.state.value}  onChange={(event)=>{this.change(event)}}/>
                <div className="addBtn">
                    <Button onClick={()=>{this.add(this.state.value)}} disabled={this.state.arr.indexOf(this.state.value)>-1?true:false}>+   Add</Button>
                </div>
            </div>
         )
     }
}
export default InputBox
