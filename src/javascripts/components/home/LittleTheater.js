
import React,{Component} from 'react'

class LittleTheater extends Component {

    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        let littleAtlas = this.props.atlas.length?this.props.atlas[44].value[0].cover.image:{}
        let atlas = this.props.atlas.length?this.props.atlas[43]:{}
        let imgUrlLeft = atlas.value?atlas.value.left.img.image:''
        let imgUrlRight = atlas.value?atlas.value.right.img.image:''
        let sisi = this.props.atlas.length?this.props.atlas[44].value[0]:{}
        let Ec = this.props.atlas.length?this.props.atlas[46].content_images[0][0]:[]

        console.log(Ec,'Ec')
        console.log(littleAtlas,'atlas+little')
        return (
            <div className='littleTheater'>
            
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
                       <h3>{sisi.title}</h3>
                     <div className='ppp-c'>
                         <div className="ppp-v">
                             <p>{sisi.visit}</p> <p>|</p> <p>{sisi.time}</p>
                         </div>
                     </div>  
                </div>

                <div className="emptya-c"></div>       
                 <div className="Ec-c">
                     <img src={Ec.image} alt={Ec.advid}/> 
                </div> 
            </div>
        )
    }
}

export default LittleTheater
