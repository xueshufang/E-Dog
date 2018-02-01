import React, {
	Component
} from 'react'
import GoodListRight from './GoodListRight'
import GoodListLeft from './GoodListLeft'
import axios from 'axios'
import { Link } from 'react-router'
class GoodList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: [],
			cateid: 88888
		}
	}
	changeId(cateid) {
		this.setState({
			cateid
		})
	}
	render() {
		let {
			data
		} = this.state

	
	render(){
		return(
			<div className="categorybox">
				<div className="allkind">
					<header className="top">
						<div className="sort nav-sort ">
							<Link className='active' to='goodList'>
								分类
							</Link>
						</div>
						<div className="brand nav-sort ">
							<Link className="" to='goodListPinpai'>
								品牌
							</Link>
						</div>
						<a href="#">
							<img className="search"  src="https://static.epetbar.com/static_web/wap/src/images/background/search-ico.png"/>
						</a>

					</header>
				</div>
				
				<GoodListLeft changeId={this.changeId.bind(this)} cateid={this.state.cateid} data={this.data}/>
				
				<GoodListRight cateid={this.state.cateid} />
				
			</div>
		)
	}
}
export default GoodList