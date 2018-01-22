import React,{component} from 'react'

class ThemeBox extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="theme-box">
                <div className="theme-header">
                    <span className="left">123</span>
                    <span className="right">更多</span>
                </div>
                <div className="them-body">
                    123
                </div>
            </div>
        )
    }
}
export default ThemeBox