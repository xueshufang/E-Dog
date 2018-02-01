
import React,{Component} from 'react'
import {Link} from 'react-router'
import axios from 'axios'
class Header extends Component {

    constructor(props){
        super(props)

        this.state = {
            data:[]
        }
    }

    componentWillMount(){
        let that = this
        axios.get('/epet/v3/index/main.html',{
            params:{
                pet_type:'dog',
                version:358,
                is_single:0,
                system:'wap',
                isWeb:1,
                _t:Date.now()
            }
        })
        .then(function({data}){
            that.setState({data:data.menus})
            // console.log(data.menus)
        })
    }

    render(){
        let {data} = this.state
        console.log(data,'shouye')
        return (
            <header  className="homeRoot">
                <div className="main-c">
                    <div className="main-c-t">
                        <div className="main-c-t-search clearfix">
                            <div className="main-c-t-l clearfix">
                                <span>狗狗站</span>
                                <span>|</span>
                                <span>重庆 <i className="fa fa-sort-down "></i></span>
                            </div>
                            <div className="main-c-t-r clearfix">
                                <input type="text" placeholder="搜索商品和品牌"/> <i className="fa fa-search"></i>
                                <img src="//static.epetbar.com/static_web/wap/src/images/mydope.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="main-c-b">
                        <ul className="clearfix">
                            {
                                data.map(item=>(
                                    <li key={item.menu_id}>
                                        <Link href="#">{item.menu_name}</Link>
                                    </li>
                                ))
                            } 
                        </ul>
                    </div>
                </div>
            </header>
        )
    }

}

export default Header