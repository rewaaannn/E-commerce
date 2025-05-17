import React, { createContext, useEffect, useState } from 'react'
import style from './Admin.module.css'
import { Link, NavLink, Outlet } from 'react-router-dom'
import logo from '../../images/logo3-removebg-preview.png'
import logoWithoutName from '../../images/logo3-removebg-preview-copy.png'

export const ThemeContext = createContext(null)

export default function Admin() {
    let [open, setOpen] = useState(false)

    let [open3, setOpen3] = useState(false)

    let [open4, setOpen4] = useState(false)

    let [open5, setOpen5] = useState(false)

    let [open6, setOpen6] = useState(false)

    let [active, setActive] = useState(false)

    let [active3, setActive3] = useState(false)

    let [active4, setActive4] = useState(false)

    let [active5, setActive5] = useState(false)

    let [active6, setActive6] = useState(false)

    // useEffect( () => {
        
    //     let handler = () => {
    //         setOpen(false);
    //     }
        
    //     document.addEventListener('mousedown', handler)
        
    // });
    

    let [list, setList] = useState([
    
        {
        
            id: 0,
        
            title: 'dashboard'
        
        },
    
        {
        
            id: 1,
        
            title: 'add user'
        
        },
    
        {
        
            id: 2,
        
            title: 'all user ',
        
        },
    
        {
        
            id: 3,
        
            title: 'add product',
        
        },
    
        {
        
            id: 4,
        
            title: 'all product',
        
        },
    
        {
        
            id: 5,
        
            title: 'categories',
        
        },
    
        {
        
            id: 6,
        
            title: 'add store',
        
        },
    
        {
        
            id: 7,
        
            title: 'all store',
        
        },
    
        {
        
            id: 8,
        
            title: 'add order',
        
        },
    
        {
        
            id: 9,
        
            title: 'all order',
        
        },
    
        {
        
            id: 10,
        
            title: 'media',
        
        },
    
        {
        
            id: 11,
        
            title: 'pages',
        
        },
    
        {
        
            id: 12,
        
            title: 'shipping',
        
        },
    
        {
        
            id: 13,
        
            title: 'coupons',
        
        },
    
        {
        
            id: 14,
        
            title: 'points',
        
        },
    
        {
        
            id: 15,
        
            title: 'wallet',
        
        },
    
        {
        
            id: 16,
        
            title: 'theme options',
        
        },
    
        {
        
            id: 17,
        
            title: 'setting'
        
        }
    
    ])

    useEffect( () => {
    
        localStorage.setItem('adminSearch', JSON.stringify(list))
    
    })

    const [searchItems, setSearchItems] = useState([]);

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem('adminSearch'));
        if (items) {
            setSearchItems(items);
        }
    }, []);

    let fox = [];

    const [display, setDisplay] = useState(false)

    const [box, setBox] = useState(fox)

    const [listLength, setListLength] = useState(0)

    function searchResult(e) {
        let input = e.target.value;
        fox = []
        for ( let i = 0; i < searchItems.length; i++ ) {
        
            if (searchItems[i].title.includes(input.trim().toLowerCase()) === true || searchItems[i].title.includes(input.trim().toUpperCase()) === true) {
                // setBox(searchItems[i])
                fox.push(searchItems[i].title)
                setDisplay(true)
                // setBox(fox)
                console.log(fox);
            }
        
        }
        setBox(fox)
        setListLength(fox.length)
    }

    const [openMenu, setOpenMenu] = useState(false)

    const [theme, setTheme] = useState('light')

    function toggleTheme() {
        setTheme((curr) => (curr === 'light' ? 'dark': 'light' ) )
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            
            <div className={` ${style.pageWrapper} ${theme === 'dark' ? ` ${style.dark} ` : ` ${style.light} `} `}>
            
                <div className={`${style.pageHeader}`}>
                
                    <div className={`${style.headerWrapper} ${theme === 'dark' ?  ` ${style.dark} ` : ` ${style.light} `} `}>
                    
                        <div className={`${style.logo_Search}`}>
                        
                            {/* <div className={`${style.Menu}`}>
                            
                                <i onClick={ () => {setOpenMenu(!openMenu)} } className="fa-solid fa-bars text-dark" role='button'></i>
                            
                            </div> */}
                        
                            <div className={`${style.headerLogo}`}>
                            
                                <Link to='/en/dashboard' className='text-decoration-none d-flex justify-content-between align-items-center' ><img src={logoWithoutName} alt="" width={50} /></Link>
                            
                            </div>
                        
                            <div className={`d-flex ${style.search} ${style.input}`}>
                            
                                <input onKeyUp={searchResult} type="text" placeholder='search cleana...' className={`form-control py-2 border-end-none`} />
                            
                                <button className={`btn btn-warning text-white ${style.searchIcon}`}><i className="fa-solid fa-magnifying-glass"></i></button>
                                
                                
                                { listLength > 0 ? <div className={ display ?  `${style.searchResult}` : 'd-none' }>
                                    
                                    {box.map((x, index) => 
                                        
                                        
                                        
                                            <Link to='' key={index} className={`text-capitalize ${style.linkSearch}`}>{x}</Link>
                                        
                                        
                                        
                                        )}</div> : ''
                                
                                }
                            
                                
                            
                            </div>
                        
                        </div>
                    
                        <div className={`${style.addItems}`}>
                        
                            <Link to='create/product/general' className={`btn btn-outline-success ${style.addProductBtn}`}>add product</Link>
                        
                            <Link to='add/order' className={`btn btn-success ${style.addOrderBtn}`}>add order</Link>
                        
                        </div>
            
                        <div className={`d-flex align-items-center gap-3 fs-5 mx-3 ${style.quickIcons}`}>
                        
                            <div className={`fs-4 ${style.language}`}>
                            
                                <i className="fa-solid fa-language"></i>
                            
                            </div>
                        
                            <div className={`${style.notifications}`}>
                            
                                <i className="fa-solid fa-bell"></i>
                            
                            </div>
                        
                            <div className={`${style.darkTheme}`}>
                            
                                <div class="box">
                                    <label for="switch" class={`${style.toggle}`}>
                                        <input type="checkbox" class={`${style.input}`} id={`${style.switch}`} />
                                        <div class={`${style.icon} ${style.iconMoon}`} onClick={toggleTheme} >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            width="32"
                                            height="32"
                                        >
                                            <path
                                            fill-rule="evenodd"
                                            d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                                            clip-rule="evenodd"
                                            ></path>
                                        </svg>
                                        </div>

                                        <div class={`${style.icon} ${style.iconSun}`} onClick={toggleTheme} >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            width="32"
                                            height="32"
                                        >
                                            <path
                                            d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
                                            ></path>
                                        </svg>
                                        </div>
                                    </label>
                                </div>

                            
                            
                            </div>
                        
                        </div>
            
                        <div className={`d-flex flex-end  ${style.profile}`}>
                        
                            {/* <i className="fa-solid fa-circle-user"></i> */}
                        
                            <span className={` ${style.profileName}`}>a</span>
                        
                        </div>
                    
                    </div>
                
                </div>
        
                <div className={` ${style.pageBodyWrapper}`}>
                
                    <div className={`${!openMenu ? ` ${style.SidebarWrapper} ` : `${style.SidebarWrapperWidth}`}  ${theme === 'dark' ?  ` ${style.SidebarWrapperDarkMode} ` : ` ${style.SidebarWrapper} `}  `}>
                    
                        <div className={`${style.sidebarLogo}`}>
                        
                            <Link className='d-flex align-items-center text-decoration-none' to='/en/dashboard'><img src={logo} alt="" width={100}/><i onClick={ () => {setOpenMenu(!openMenu)} } className={`fa-solid fa-bars text-white ${style.Menu} `}></i></Link>
                        
                            <i onClick={ () => {setOpenMenu(!openMenu)} } className={`fa-solid fa-bars text-white ${style.Menu} `}></i>
                        
                        </div>
                    
                        <nav className={`${style.sidebarMain}`}>
                        
                            <ul className={`${style.sidebarLinks}`}>
                            
                                <li><NavLink to='dashboard' className={({isActive}) => { return ( ` ${style.link} ` + (isActive ? ` ${style.linkHover} ` : ` ${style.linkTransparent}`)) }}><i className="fa-solid fa-house"></i> dashboard</NavLink></li>
                            
                                <li>
                                
                                    {/* <NavLink to='' onClick={ ()=> {setOpen(!open)} } className={({isActive}) => { return ( ` ${style.link} ` + (isActive ? ` ${style.linkHover} ` : ` ${style.linkTransparent}`)) }} ><i className="fa-solid fa-user-group"></i> users <i className={` ${style.menu} ${open ? 'fa-solid fa-angle-down': 'fa-solid fa-angle-right'}`}></i></NavLink> */}
                                
                                    <h3 onClick={ ()=> {setOpen(!open)} } className={`${style.link} `} ><i className="fa-solid fa-user-group"></i> users <i className={` ${style.menu} ${open ? 'fa-solid fa-angle-down': 'fa-solid fa-angle-right'}`}></i></h3>
                                
                                    <ul className={`${style.sidebarSubmenu} ${open ? `${style.active}`: `${style.inactive}` } `}>
                                    
                                        <li><NavLink to='user/create' className={({isActive}) => { return ( ` ${style.link} ` + (isActive ? ` ${style.linkHover}  ` : ` ${style.linkTransparent}`)) }}>add user</NavLink></li>
                                    
                                        <li><NavLink to='all/users' className={({isActive}) => { return ( ` ${style.link} ` + (isActive ? ` ${style.linkHover} ` : ` ${style.linkTransparent}`)) }}>all users</NavLink></li>
                                    
                                        <li><NavLink to='user/role' className={({isActive}) => { return ( ` ${style.link} ` + (isActive ? ` ${style.linkHover} ` : ` ${style.linkTransparent}`)) }}>role</NavLink></li>
                                    
                                    </ul>
                                
                                </li>
                            
                                <li>
                                
                                    <h3 onClick={ ()=> {setOpen3(!open3)} } className={`${style.link}`} ><i className="fa-solid fa-shop"></i> products <i className={` ${style.menu} ${open3 ? 'fa-solid fa-angle-down': 'fa-solid fa-angle-right'}`}></i></h3>
                                
                                    <ul className={`${style.sidebarSubmenu} ${open3 ? `${style.active}`: `${style.inactive}` } `}>
                                    
                                        <li><NavLink to='create/product/general' className={({isActive}) => { return ( ` ${style.link} ` + (isActive ? ` ${style.linkHover} ` : ` ${style.linkTransparent}`)) }}>add product</NavLink></li>
                                    
                                        <li><NavLink to='all/products' className={({isActive}) => { return ( ` ${style.link} ` + (isActive ? ` ${style.linkHover} ` : ` ${style.linkTransparent}`)) }}>all products</NavLink></li>
                                    
                                        <li><NavLink to='categories' className={({isActive}) => { return ( ` ${style.link} ` + (isActive ? ` ${style.linkHover} ` : ` ${style.linkTransparent}`)) }}>categories</NavLink></li>
                                    
                                    </ul>
                                
                                </li>
                                
                                <li>
                                
                                    <h3 onClick={ () => {setOpen4(!open4)} } className={`${style.link}`} ><i className="fa-solid fa-store"></i> stores <i className={` ${style.menu} ${open4 ? 'fa-solid fa-angle-down': 'fa-solid fa-angle-right'}`}></i></h3>
                                
                                    <ul className={`${style.sidebarSubmenu} ${open4 ? `${style.active}`: `${style.inactive}` } `}>
                                    
                                        <li><NavLink to='store/create' className={({isActive}) => { return ( ` ${style.link} ` + (isActive ? ` ${style.linkHover} ` : ` ${style.linkTransparent}`)) }}>add store</NavLink></li>
                                    
                                        <li><NavLink to='all/store' className={({isActive}) => { return ( ` ${style.link} ` + (isActive ? ` ${style.linkHover} ` : ` ${style.linkTransparent}`)) }}>all stores</NavLink></li>
                                    
                                    </ul>
                                
                                </li>
                                
                                {/* <li><Link className={`${style.link}`}><i className="fa-solid fa-basket-shopping"></i> my shops</Link></li> */}
                                
                                <li>
                                
                                    <h3 onClick={ () => {setOpen5(!open5)} } className={`${style.link}`} ><i className="fa-solid fa-list-ul"></i> orders <i className={` ${style.menu} ${open5 ? 'fa-solid fa-angle-down': 'fa-solid fa-angle-right'}`}></i></h3>
                                
                                    <ul className={`${style.sidebarSubmenu} ${open5 ? `${style.active}`: `${style.inactive}` } `}>
                                    
                                        <li><NavLink to='add/order' className={({isActive}) => { return ( ` ${style.link} ` + (isActive ? ` ${style.linkHover} ` : ` ${style.linkTransparent}`)) }}>add order</NavLink></li>
                                    
                                        <li><NavLink to='all/order' className={({isActive}) => { return ( ` ${style.link} ` + (isActive ? ` ${style.linkHover} ` : ` ${style.linkTransparent}`)) }}>all orders</NavLink></li>
                                    
                                    </ul>
                                
                                </li>
                                
                                <li><NavLink to='media' className={({isActive}) => { return ( ` ${style.link} ` + (isActive ? ` ${style.linkHover} ` : ` ${style.linkTransparent}`)) }}><i className="fa-regular fa-image"></i> media</NavLink></li>
                            
                                <li><NavLink to='pages' className={({isActive}) => { return ( ` ${style.link} ` + (isActive ? ` ${style.linkHover} ` : ` ${style.linkTransparent}`)) }}><i className="fa-regular fa-newspaper"></i>pages</NavLink></li>
                            
                                <li><NavLink to='shipping' className={({isActive}) => { return ( ` ${style.link} ` + (isActive ? ` ${style.linkHover} ` : ` ${style.linkTransparent}`)) }}><i className="fa-solid fa-truck-fast"></i>shipping</NavLink></li>
                            
                                <li><NavLink to='coupons' className={({isActive}) => { return ( ` ${style.link} ` + (isActive ? ` ${style.linkHover} ` : ` ${style.linkTransparent}`)) }}><i className="fa-solid fa-hand-holding-dollar"></i>coupons</NavLink></li>
                            
                                <li><NavLink to='points' className={({isActive}) => { return ( ` ${style.link} ` + (isActive ? ` ${style.linkHover} ` : ` ${style.linkTransparent}`)) }}><i className="fa-solid fa-coins"></i>points</NavLink></li>
                            
                                <li><NavLink to='wallet' className={({isActive}) => { return ( ` ${style.link} ` + (isActive ? ` ${style.linkHover} ` : ` ${style.linkTransparent}`)) }}><i className="fa-solid fa-wallet"></i>wallet</NavLink></li>
                            
                                <li>
                                
                                    <h3 onClick={ () => {setOpen6(!open6)} } className={`${style.link}`} ><i className="fa-solid fa-window-maximize"></i>store front <i className={` ${style.menu} ${open6 ? 'fa-solid fa-angle-down': 'fa-solid fa-angle-right'}`}></i></h3>
                                
                                    <ul className={`${style.sidebarSubmenu} ${open6 ? `${style.active}`: `${style.inactive}` } `}>
                                    
                                        <li><NavLink to='theme/option' className={({isActive}) => { return ( ` ${style.link} ` + (isActive ? ` ${style.linkHover} ` : ` ${style.linkTransparent}`)) }}>theme options</NavLink></li>
                                    
                                    </ul>
                                
                                </li>
                                
                                <li><NavLink to='setting' className={({isActive}) => { return ( ` ${style.link} ` + (isActive ? ` ${style.linkHover} ` : ` ${style.linkTransparent}`)) }}><i className="fa-solid fa-gear"></i>settings</NavLink></li>
                            
                            </ul>
                        
                        </nav>
                    
                    </div>
                
                </div>
        
                <div className={`${style.body} ${theme === 'dark' ? ` ${style.SidebarWrapperDarkMode} `: ` ${style.body} ` } `}>
                
                    <div className={`${style.pageBody} ${theme === 'dark' ? ` ${style.dark} ` : ` ${style.light} ` } `}>
                    
                        <Outlet></Outlet>
                    
                    </div>
                
                </div>
        
                <div className={`${style.pageFooter} ${theme === 'dark' ? ` ${style.dark} `: ` ${style.light} ` }`}>
                
                    <h4>Copyright 2023 © Cleana </h4>
                
                </div>
        
            </div>
        
        </ThemeContext.Provider>
    )
}
