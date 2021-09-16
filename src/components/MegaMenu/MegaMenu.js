import React from "react"
import "./MegaMenu.css"


const MegaMenu = ({menuData}) => {
    return (
        <div className="mega-menu mt-3 px-1 px-lg-0 d-none d-lg-block ">
            <ul className="d-none d-lg-flex flex-row-reverse justify-content-start position-relative">
                {
                    menuData.map(item =>

                        <li className={'py-2 px-3 mr-3'} key={item.id} id={item.id}>
                            {item.value}
                            <ol>
                                {
                                   item.menus?.map(subItem =>
                                    <li key={subItem.id}>
                                        {subItem.value}
                                    </li>
                                   )
                                }
                            </ol>
                        </li>
                    )}
                <br/>
                {
                    menuData.map(
                        item => {
                            return (
                                <li className={'py-2 px-3 mr-3'} key={item.id} id={item.id}>
                                    {item.value}
                                </li>
                            )
                        }
                    )
                }
            </ul>
        </div>
    )
}

export default MegaMenu