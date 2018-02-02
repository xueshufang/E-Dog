
import React,{Component} from 'react'
import Header from '../header/Header'
import Banner from './Banner'
import ENav from './ENav'
import Atlas from './Atlas'
import Footer from '../footer/Footer'
import ExperienceBanner from './ExperienceBanner'
import AdventureDogs from './AdventureDogs'
import LittleTheater from './LittleTheater'
import OverseasGood from './OverseasGood'
import DailyRushed from './DailyRushed'

import axios from 'axios'
class Home extends Component {

    constructor(props){
        super(props)

        this.state = {
            data:[],
            navs:[],
            atlas:[],
            experience:[]
        }
    }

    //https://mallcdn.api.epet.com/v3/index/main.html?pet_type=dog&version=358&is_single=0&system=wap&isWeb=1&_=1516804292565
    componentWillMount(){
        let that = this
        axios.get('./mallcdn/v3/index/main.html',{
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
            that.setState({
                data:data.datas[0].value,
                navs:data.datas[2].menus,
                atlas:data.datas,
                experience:data.datas[38].value
            })
        })
    }

    render(){
        let {data,navs,atlas,experience} = this.state
        // console.log(data,navs)
        let {pathname} = this.props.location
        console.log(this.props.location,9999999)
        console.log(atlas,'atlas')   
        return (
            <div>
                {/*每日疯狂下面的接口
                https://mall.api.epet.com/v3/index/main.html?do=GetDynamicV315&pet_type=dog&version=358&system=wap&isWeb=1&_=1517234111144  */}
                <div className="mainmessage">
                    <Header/> 
                    <Banner data={data}/>
                    <ENav  navs={navs}/>
                    <DailyRushed/>
                    <div className='empty-c'></div>
                    <OverseasGood atlas={atlas}/>
                    <Atlas atlas={atlas}/>
                    <div className='emptys-c'></div>
                    <ExperienceBanner atlas={atlas} experience={experience}/>
                    <div className='empty-c'></div>
                    <AdventureDogs atlas={atlas}/>
                    <div className='empty-c'></div>
                    <LittleTheater atlas={atlas}/>
                
                </div>

                <Footer pathname={pathname}/>
                
            </div>
        )
    }
}

export default Home