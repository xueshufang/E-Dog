
import React,{Component} from 'react'

class OverseasGood extends Component {

    constructor(props){
        super(props)

        this.state = {

        }
    }

    render(){
        let atlas1 = this.props.atlas.length?this.props.atlas[7].content_images[0][0]:[]
        let atlas2 = this.props.atlas.length?this.props.atlas[7].content_images[1][0]:[]
        let atlas3 = this.props.atlas.length?this.props.atlas[7].content_images[1][1]:[]
        console.log(atlas1,'overseasGood')
        console.log(atlas2,'overseasGood')
        return (
            <div className='overseas-c'>
                <div className="overseas-l">
                    <img src={atlas1.image} alt=""/>
                </div>
                <div className="overseas-r">
                    <img src={atlas2.image} alt=""/>
                    <img src={atlas3.image} alt=""/>
                </div>
            </div>
        )
    }

}

export default OverseasGood