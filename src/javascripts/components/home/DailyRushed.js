
import React,{Component} from 'react'

import axios from 'axios'

class DailyRushed extends Component {

    constructor(props){
        super(props)

        this.state = {
            dailyGoods:[]
        }
    }
    //https://mall.api.epet.com/v3/index/main.html?do=GetDynamicV315&pet_type=dog&version=358&system=wap&isWeb=1&_=1517369184250
    componentWillMount(){
        let that = this
        axios.get('./mallcdn/v3/index/main.html',{
            params:{
                do:'GetDynamicV315',
                pet_type:'dog',
                version:358,
                system:'wap',
                isWeb:1,
                _t:Date.now()
            }
        })
        .then(function({data}){
            that.setState({
                dailyGoods:data.data
            })
        })
    }

    render(){
        let {dailyGoods} = this.state

        let daily = dailyGoods['3']?dailyGoods['3'].goods:[]
       

        console.log(daily,'dailyGoods')
       
        return (

            <div className='dailyRushed'>

                 {
                    daily.map(item=>(
                        <div key={item.gid} className='dailyRushedItem'>
                            <a>
                                <img src={item.image.image} alt={item.gid}/>
                            </a>
                            <p>
                                <span>￥{item.sale_price}</span> 
                                <span>{item.little_price}</span>
                            </p>
                        </div>
                    ))
                } 
                

            </div>
        )
    }
}

export default DailyRushed