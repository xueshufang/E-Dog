
import React,{Component} from 'react'
import 'swiper/dist/css/swiper.min.css'
import Swiper from 'swiper'

class ExperienceBanner extends Component {

    constructor(props){
        super(props)

        this.state = {

        }
    }

    shouldComponentUpdate(props){
        if(props.experience.length===this.props.experience.length){
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
        let atlas = this.props.atlas.length?this.props.atlas[37]:{}
        let imgUrlLeft = atlas.value?atlas.value.left.img.image:''
        let imgUrlRight = atlas.value?atlas.value.right.img.image:''
        console.log(atlas,'experience-atlas')
        let {experience} = this.props
        console.log(experience,'experience')
        return (
            <div className="ExperienceBanner">
                <div className="atlas-c">
                       <div className="brandSale">
                        {
                            <img src={imgUrlLeft} alt=""/>
                        }    
                        
                    </div>
                    <div className="more-c">
                        {
                            <img src={imgUrlRight} alt=""/>
                        }
                    </div>   
                </div>

                  <div className="experienceBanner">
                     <div className="swiper-container banner experience">
                        <div className="swiper-wrapper">
                               {
                                experience.map(item=>(
                                    <div className="swiper-slide" key={item.advid}>
                                        <img width="100%" src={item.image} alt={item.advid}/>
                                    </div>
                                ))
                            }    
                         
                        </div>
                        <div className="swiper-pagination banner-pagination"></div>
                    </div> 
                 </div> 

            </div>
        )
    }
} 

export default ExperienceBanner