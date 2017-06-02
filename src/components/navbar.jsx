import React, { Component } from 'react';
import {Link} from 'react-router';

//css
import styles from 'css/components/navbar.css';

class NavBarComponent  extends Component {
    data = [
        {
            path:'/',
            text: '任务大厅'
        },
        {
            path:'f',
            text: '发布任务'
        },
        {
            path:'f',
            text: '推广合作'
        },
        {
            path:'f',
            text: '联系我们'
        }
    ]

    render() {
        const {location} = this.props,
            {pathname} = location;
        return (
            <div className={styles.navbar}>
                <div className={styles['navbar-inner']}>
                    <Link to="/">
                        <img src={`${process.env.PUBLIC_URL}/images/logo.jpg`} alt="粉快来" />
                    </Link>
                    <ul>
                        {
                            this.data.map((item,index)=>{
                                const {path,text} = item;
                                return (
                                    <li key={index}
                                        className={
                                            pathname.indexOf(item.path) !== -1 ? 
                                            'theme-bg-color '+styles.active : 
                                            'hover-lighten-bg-color '
                                        }
                                    >
                                        <Link to={path} className="font-color">
                                            {text}
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default NavBarComponent;