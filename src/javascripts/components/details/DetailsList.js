import React, {Component} from 'react'
import axios from "axios"
class DetailsList extends Component{
	constructor(props){
		super(props)
		this.state={
			data:[],
			
		}
	}
	componentWillMount(){
		let id=this.props.params.id.replace("cateid_","")
		let that=this
		axios.get('./mallcdn/v3/goods/list/main.html?version=355&brandid=0&page=1&orderby=def_desc&cateid='+id+'&pet_type=dog&extend_pam=&real_wid=&region=&system=wap&isWeb=1' , {
			_: new Date(),

		}).then((res) => {
			console.log(res.data.list)
			that.setState({
				data:res.data.list,
				
			})
		})
		
		
	}
	render(){
		let {data,
			icon
		}=this.state
		return(
			<div>
				<div className="wap-top-bar">
					<header className="head-top bgfff zcolor">
						<div>
							<a className="fa fa-angle-left"></a>
							<span className="topbar-title">商品列表</span>
							<a className="fa fa-th-large"></a>
						</div>
					</header>
					<div className="proListbox">
						<div className="search-wrap">
							<div className="search">
								<a>
									<i className="fa fa-search"></i>
									<div className="search-text">
										<input type="search" placeholder="点击搜索商品"/>
									</div>
								</a>
							</div>
						</div>
						<div className="product-list">
							<ul className="brands-list list_libox">
								{
									data.map((item,i)=>(
										<li>
											<div className="pd-box">
												<a>
													<div className="index-listimg loadimg-fixed">
														<img className="image" src={item.photo}/>
													</div>
												</a>
												<div className="index-listpro">
													<a>
														<h1 className="el2">{item.subject}</h1>
													</a>
													<div className="cu">
														<span className="dib">
															<a>
																<img src="https://static.epetbar.com/static_wap/appmall/lib/list/tagongyi.png?version=2016071303"/>
															</a>
														</span>
													</div>
													<div>
														<span  className="cred">{item.sale_price}</span>
														<span className="ml10">{item.dprice}</span>
													</div>
													<div className="c999">
														<span>{item.comments}</span>
														<span className="ml5">{item.sold}</span>
													</div>
												</div>
											</div>
											<div></div>
										</li>
									))
								}
							</ul>
						</div>
					</div>
				</div>
			
			
			
			
			</div>
		)
	}
}

export default DetailsList