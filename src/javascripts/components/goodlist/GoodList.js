import React,{Component} from 'react'
import GoodListRight from './GoodListRight'
import GoodListLeft from  './GoodListLeft'
import axios from 'axios'
class GoodList extends Component {
	constructor(props){
		super(props)
		this.state={
			data:[]
		}
	}
	componentWillMount(){
		let that =this
		axios.get('./mallcdn/v3/goods/category/main.html?pet_type=dog&system=wap&isWeb=1&version=303&_=1516767778985',{
			
		})
		.then(function(data){
			console.log(data)
			that.setState({data:data.data.categorys})
		})
		.catch(function(error){
			console.log(error,2)
		})
	}
	render(){
		let {data}=this.state
		return(
			<div className="categorybox">
				<div className="allkind">
					<header className="top">
						<div className="sort nav-sort ">
							<a href="#" className="active">
								分类
							</a>
						</div>
						<div className="brand nav-sort ">
							<a href="#" className="">
								品牌
							</a>
						</div>
						<a href="#">
							<img className="search"  src="https://static.epetbar.com/static_web/wap/src/images/background/search-ico.png"/>
						</a>

					</header>
				</div>
				
				<GoodListLeft data={data}/>
				<GoodListRight data={data}/>
				
			</div>
		)
	}
}
export default GoodList