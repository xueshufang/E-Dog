
import React,{Component} from 'react'

class AdventureDog extends Component {

    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        let littleAtlas = this.props.atlas.length?this.props.atlas[41].value[0].cover.image:{}
        let siyi = this.props.atlas.length?this.props.atlas[41].value[0]:{}
        let atlas = this.props.atlas.length?this.props.atlas[40]:{}
        let imgUrlLeft = atlas.value?atlas.value.left.img.image:''
        let imgUrlRight = atlas.value?atlas.value.right.img.image:''

        console.log(littleAtlas,'littleAtlas')
        return (
            <div className="adventureDog">

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

                 <div className="virtualDog">
                      <img width="100%" src={littleAtlas} alt=""/>  
                       <h3>{siyi.title}</h3>
                     <div className='ppp-c'>
                         <div className="ppp-v">
                             <p>{siyi.visit}</p> <p>|</p> <p>{siyi.time}</p>
                         </div>
                     </div>  
                </div> 
            </div>
        )
    }
}

export default AdventureDog