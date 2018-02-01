import React, {Component} from 'react'
import axios from 'axios'

class GoodListRight extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			list: [],
			list1: [],
			list2:[],
			list3:[]
			
		
		}
	}
	componentWillMount() {
		console.log(this)
		this.getItem_list(this.props.cateid)

	}
	//属性改变的时候执行
	componentWillReceiveProps(props) {
		this.getItem_list(props.cateid)
	}
	//	}
	
	
	//分类的列表显示数据
	getItem_list(cateid) {

		let that = this

		axios.get('./mallcdn/v3/goods/category/main.html?do=getChildren&owner=' + cateid, {

			pet_type: 'dog',
			system: 'wap',
			isWeb: 1,
			version: 303,
			_: new Date(),

		}).then((res) => {

			that.setState({
				data: res.data.cate_list,
				list: res.data.cate_list[0].list,
				list1: res.data.cate_list[1].list,
				list2:res.data.cate_list[0],
				list3:res.data.cate_list[1],
				

			})
			console.log(res)
		}).catch((err) => {

		})

	}

	render() {
		let {
			data,
			list,
			list1,
			list2,
			list3
			
		} = this.state

		return(
			<div className="rightbox bgfff">
				<div className="sort-detail-list">
				<div className="sort -recom bgfff">
					<div className="hot-recom">
						<a href="javascript: ;" className="title ft12 c999 pl15 mt10">
							{list2.title}
							<img src="https://static.epetbar.com/static_wap/appmall/lib/goods/cate_right_img.png" className="fr arrowL mr5"/>
						</a>
						<ul>
							{list.map((item,i)=>(
								<li key={i} className="f1 mt10">
										<a className="db">
											<div className="rela loadimg-nofixed">
												<img className="w100 image" src={item.photo}/>
												
											</div>
											<p className="ftc ft13 mt10 c333">{item.name}</p>
										</a>
								</li>	
							))}
						</ul>
					</div>	
				</div>
				
				<div className="sort -recom bgfff bbtf3">
					<div className="hot-recom">
						<a href="javascript: ;" className="title ft12 c999 pl15 mt10">
							{list3.title}
							
						</a>
						<ul className="list2">
							{list1.map((item,i)=>(
								
								<li key={i} className="f1 mt10 llogo rela">
										<a className="db">
											<div className="img loadimg-nofixed">
												<img className="lheight" src={item.logo}/>
												
											</div>
											<p className="ftc ft12 mt5">{item.name}</p>
										</a>
								</li>	
							))}
						</ul>
					</div>	
				</div>
				</div>
			</div>
		)
	}
}

export default GoodListRight


