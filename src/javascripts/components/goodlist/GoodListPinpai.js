import React, {Component} from 'react'
import axios from 'axios'
import { Link } from 'react-router'

class GoodListPinpai extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		}
	}
	//属性改变的时候执行
	componentWillReceiveProps(props) {
		this.getItem_r(props.cateid)
	}
	componentWillMount() {
		this.getItem_r(this.props.cateid)
	}
	getItem_r(cateid) {
		let that = this
		axios.get('./mallcdn/v3/brand/list/main.html', {
			pet_type: 'dog',
			system: 'wap',
			isWeb: 1,
			version: 303,
			_: new Date(),
			owner: cateid
		}).then((res) => {
			that.setState({
				data: res.data.brand,
			})
		}).catch((err) => {

		})
	}
	render() {
		let {data} = this.state
		return(
			<div className="allkind">
				<header className="top">
					<div className="sort nav-sort ">
						<Link className='' to='goodList'>分类</Link>
					</div>
					<div className="brand nav-sort ">
						<Link className="active" to='goodListPinpai'>品牌</Link>
					</div>
					<a>
						<img className="search"  src="https://static.epetbar.com/static_web/wap/src/images/background/search-ico.png"/>
					</a>
				</header>
				<div >
					{
						data.map((item,i)=>(
							<div  className="brand-list">
								<p key={item.title} className="title2 ftc c999 ft12">—— {item.title}——</p>
								<div> 
									{
										item.list.map((list)=>(
											<ul className="list clearfix">
	                                    <li className="fl rela">
	                                        <a>
	                                            <div className="img1  loadimg-nofixed rela">
	                                                <img className="db image" key={list.logo} src={list.logo}/>
	                                            </div>
	                                            <p className="name ftc ft13 mt5" key={list.name}>{list.name}</p>
	                                            <p className="address ftc c999 ft12" key={list.address}>{list.address}</p>
	                                        </a>
	                                    </li>
	                                </ul>
										))
									}
								</div>
								
							</div>
						))
					}
				
				</div>				

			</div>
			)
			}
			}

export default GoodListPinpai