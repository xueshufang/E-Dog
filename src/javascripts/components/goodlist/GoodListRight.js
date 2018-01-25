import React,{Component} from 'react'

class GoodListRight extends Component {
	constructor(props){
		super(props)
	}
	
	render(){
		return(
			<div className="rightbox bgfff">
				<div className="sort-detail-list">
				<div className="sort -recom bgfff">
					<div className="hot-recom">
						<a href="javascript: ;" className="title ft12 c999 pl15 mt10">
							热门分类
							<img src="https://static.epetbar.com/static_wap/appmall/lib/goods/cate_right_img.png" className="fr arrowL mr5"/>
						</a>
						<ul>
							<li className="f1 mt10">
								<a className="db">
									<div className="rela loadimg-nofixed">
									<img src="https://img2.epetbar.com/nowater/2017-09/01/17/4bf6a8f261337e34e38d4d8b43d149f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="1" className="w100 image"/>
									
									</div>
									<p className="ftc ft13 mt10 c333">体内驱虫</p>
								</a>
							</li>
							<li className="f1 mt10">
								<a className="db">
									<div className="rela loadimg-nofixed">
									<img src="https://img2.epetbar.com/nowater/2017-09/01/17/4bf6a8f261337e34e38d4d8b43d149f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="1" className="w100 image"/>
									
									</div>
									<p className="ftc ft13 mt10 c333">体内驱虫</p>
								</a>
							</li>
							<li className="f1 mt10">
								<a className="db">
									<div className="rela loadimg-nofixed">
									<img src="https://img2.epetbar.com/nowater/2017-09/01/17/4bf6a8f261337e34e38d4d8b43d149f1.jpg?x-oss-process=style/fill&$1=300&$2=300" alt="1" className="w100 image"/>
									
									</div>
									<p className="ftc ft13 mt10 c333">体内驱虫</p>
								</a>
							</li>
												</ul>
					</div>
				</div>
				</div>
			</div>
		)
	}
}

export default GoodListRight
