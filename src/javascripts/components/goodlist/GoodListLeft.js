import React,{Component} from 'react'
import axios from "axios"
class GoodListLeft extends Component {
	constructor(props){
		super(props)
		
	}
	getItem(num) {
				let that = this
				axios.get('./mallcdn/v3/goods/category/main.html?do=getChildren&owner='+num+'&pet_type=dog&system=wap&isWeb=1&version=303&_=', {
					params: {
						__t: Date.now()
					}
				}).then((response) => {
					console.log(response)
				})
	}
	render(){
		
		let {data} = this.props
		return(
			<div id="tab1" className="kindbox">
				<div className="leftbox bgfff scrollbar-none">
					<div>
						<ul>
						{
							data.map((item,i)=>(
								<li onClick={this.getItem.bind(null,item.cateid)} key={item.cateid}  className="ftc bgfff">{item.name}</li>
							))
						}
						</ul>
					</div>
				</div>
			</div>
		)
	}
}

export default GoodListLeft
