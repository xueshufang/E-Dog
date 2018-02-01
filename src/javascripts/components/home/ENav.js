
import React,{Component} from 'react'

class ENav extends Component {
    constructor(props){
        super(props)

        this.state = {
    
        }
    }


    render(){
        let {navs} = this.props
        return (
            <div className="enav-c">
                <ul className="clearfix">
                    {
                         navs.map(item=>(

                            <li key={item.name}>
                                <a><img src={item.image} alt={item.name}/></a>
                            </li>
                        ))
                    }
                </ul>
                <div className="empty-c"></div>
                <div className="newPerson">
                    <img src="https://img2.epetbar.com/nowater/2017-12/18/09/60c354a5d94be9fd114523ee77259c73.gif" alt=""/>
                </div>
            </div>
        )
    }
}

export default ENav