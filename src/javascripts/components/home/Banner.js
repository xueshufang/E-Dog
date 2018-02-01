
import React,{Component} from 'react'

import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'

class Banner extends Component {

    constructor(props){
        super(props)

        this.state = {

        }
    }

    shouldComponentUpdate(props){
        if(props.data.length===this.props.data.length){
            return false           
        }else{
            return true
        }
    }

    componentDidUpdate(){
        new Swiper('.banner',{
            pagination: {
                el: '.banner-pagination',
              },
            autoplay:true
        })
    }

    render(){
        let {data} = this.props
        console.log(data,'Banner')
        return (
            <div className="swiper-container banner">
                <div className="swiper-wrapper">
                     {
                        data.map(item=>(
                            <div className="swiper-slide" key={item.advid}>
                                <img width="100%" src={item.image} alt={item.name}/>
                            </div>
                        ))
                    } 
                   
                </div>
                <div className="swiper-pagination banner-pagination"></div>
            </div>
        )
    }
}

export default Banner