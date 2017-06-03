import React, { Component } from 'react';
import BasicPage from './basic-page';
import FooterComponents from 'components/footer';
//css
import styles from 'css/pages/concat.css';

class ConcatPage extends BasicPage {

    componentDidMount() {
        this.hideNProgress();
        let BMap = window.BMap;
        if(!BMap) return ;
        var map = new BMap.Map("map-container");          // 创建地图实例  
        var point = new BMap.Point(116.724782, 23.372552);  // 创建点坐标  
        map.centerAndZoom(point, 18);                 // 初始化地图，设置中心点坐标和地图级别  
        map.addControl(new BMap.NavigationControl());
        // var marker = new BMap.Marker(point);        // 创建标注    
        // map.addOverlay(marker);  
        var opts = {    
            width : 272,     // 信息窗口宽度    
            height: 87,     // 信息窗口高度    
            title : "汕头市号角网络科技有限公司"  // 信息窗口标题   
        }    
        var infoWindow = new BMap.InfoWindow("地址：广东省汕头市龙湖区金砂东路长荣大厦", opts);  // 创建信息窗口对象    
        map.openInfoWindow(infoWindow, map.getCenter());      // 打开信息窗口
    }

    render() {
        return (
            <div>
                <div className={styles.banner}>
                </div>
                <div className={styles.container}>
                    <br/>
                    <div className={styles.solid}>
                        <div className={styles['column-name']}>
                            汕头市号角网络科技有限公司
                        </div>
                        <ul>
                            <li>电话：0754-86328585</li>
                            <li>
                                邮箱： 
                                <a 
                                    className="font-color hover-theme-color"
                                    href="mailto:kefu@13u88.com"
                                >kefu@13u88.com</a>
                            </li>
                            <li>
                                移动电话：15363123456
                            </li>
                            <li>
                                商务QQ：
                                <a 
                                    className="font-color hover-theme-color"
                                    target="_blank" 
                                    href="http://wpa.qq.com/msgrd?v=3&amp;uin=1294453357&amp;site=qq&amp;menu=yes" 
                                    title="点击这里给我发消息"
                                >
                                    1294453357
                                </a>
                            </li>
                            <li>
                               地址：广东省汕头市龙湖区金砂东路长荣大厦
                            </li>
                        </ul>
                        <div id="map-container">
                        </div> 
                    </div>
                </div>
                <FooterComponents />
            </div>
        );
    }
}

export default ConcatPage;