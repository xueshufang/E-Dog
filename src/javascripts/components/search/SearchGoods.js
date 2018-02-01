
import React,{Component} from 'react'
import axios from 'axios'
import Footer from '../footer/Footer'

class SearchGoods extends Component {

    constructor(props){
        super(props)

        this.state = {
            data:[]
        }
    }

    componentWillMount(){
        let that = this
        axios.get('/static/search.json').then((res)=>{
            that.setState({
                data:res.data
            })
        })
    }

    render(){
        let {data} = this.state
        return (
            <div className='search'>
                
                <div className="search-c">
                    <span></span>
                    <div className="searchForm">
                        <input type="text" placeholder='搜索你喜欢的宝贝'/>
                        <i className='fa fa-search'></i>
                    </div>
                    <span className='searchContent'>搜索</span>
                </div>
                <p className='title'>
                    <img src="//static.epetbar.com/static_wap/epetapp/pages/search/images/rmss.png" alt=""/>
                    <span>精品推荐</span>
                </p>
                <div className="label">
                    {
                        data.map(item=>(
                            <a key={item.id}>
                                {item.text}
                            </a>
                        ))
                    }
                </div>
                <p className='title'>
                    <img src="//static.epetbar.com/static_wap/epetapp/pages/search/images/zjss.png" alt=""/>
                    <span>最近搜索</span>
                </p>
                <div className="searchEmpty">
                    清空搜索历史
                </div>

                <Footer/>
            </div>
        )
    }
}

export default SearchGoods