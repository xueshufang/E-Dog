
import React,{Component} from 'react'

class Atlas extends Component {

    constructor(props){
        super(props)

        this.state = {

        }
    }

   

    render(){

        let atlas = this.props.atlas.length?this.props.atlas[14]:{}
        let imgUrlLeft = atlas.value?atlas.value.left.img.image:''
        let imgUrlRight = atlas.value?atlas.value.right.img.image:''

        let Ary = [];
        this.props.atlas.length?this.props.atlas.forEach((item,ind)=>{

            if(ind%2!==0&&ind>=15&&ind<=35){
                
                Ary.push(item)
            }

        }):[]
        // this.props.atlas.length?this.props.atlas.forEach((item,index)=>{

        //     if(index%2==0&&index>=14&&index<=34){
        //         Ary.push(item)
        //     }

        // }):[]

        console.log(Ary,'Ary')
        
        return (
            <div>
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
                 <div className="atlas-img">
                       {
                        Ary.map(item=>(
                            <div className='atlas-img-c' key={item.index}>
                              <img src={item.content_images["0"]["0"].image} alt={item.content_images["0"]["0"].advid} />
                           </div>
                        ))
                       }   
                </div> 
            </div>
        )
    }
}

export default Atlas