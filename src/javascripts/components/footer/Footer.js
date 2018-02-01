
import React,{Component} from 'react'
import {Link} from 'react-router'

class Footer extends Component {

    constructor(props){
        super(props)

        this.state = {
            navds:[
                {id:1,text:'首页',icon:'home',path:'/home'},
                {id:2,text:'分类',icon:'align-justify',path:'/ranking'},
                {id:3,text:'购物车',icon:'cart-plus',path:'/classify'},
                {id:4,text:'我的E宠',icon:'user-circle',path:'/mine'}
            ]
        }
    }

    render(){
        let {navds} = this.state
        let {pathname} = this.props
        return (
            <footer className="footer-c">
                {
                   navds.map((item)=>(
                        <Link className={pathname===item.path?'active':''} to={item.path} key={item.id}>
                            <i className={`fa fa-${item.icon}`}></i>
                            <span>{item.text}</span>
                        </Link>
                   )) 
                }
             </footer> 
        )
    }
}

export default Footer