import React, {
	Component
} from 'react'
import axios from "axios"
class GoodListLeft extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			type: 88888 //默认是cateid88888的
		}

	}

	componentWillMount() {
		let that = this
		axios.get('./mallcdn/v3/goods/category/main.html?pet_type=dog&system=wap&isWeb=1&version=303&_=1516767778985', {

			})
			.then(function(data) {
				console.log(data)
				that.setState({
					data: data.data.categorys
				})
			})
			.catch(function(error) {
				console.log(error, 2)
			})
	}

	getItem(num) {

		this.setState({
			type: num
		})

		this.props.changeId(num)
	}

	render() {

		let {
			data
		} = this.state
		return(
			<div id="tab1" className="kindbox">
				<div className="leftbox bgfff scrollbar-none">
					<div>
						<ul>
							{
								data.map((item,i)=>(
									<li onClick={()=>this.getItem(item.cateid)} key={item.cateid}  className={item.cateid===this.state.type?'ftc bgfff on':'ftc bgfff'}>{item.name}</li>
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