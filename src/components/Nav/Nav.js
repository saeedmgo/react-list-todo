import React from "react"
import "./Nav.css"
import LogoClass from "../Logo/Logo";
import cartImg from "./shopping-bag.svg"
import MegaMenu from "../MegaMenu/MegaMenu";
import Search from "../Search/Search";
import CartBtn from "../CartBtn/CartBtn"


const Nav = () => {
    const menuData = [
        {
            id: "1",
            value: "کت و شلوار ",
            menus:[
                {
                    id:"11",
                    value:"کت و شلوار مردانه"
                },
                {
                    id:"12",
                    value:"کت و شلوار زنانه"
                },
                {
                    id:"13",
                    value:"کت و شلوار بچه گانه"
                },

            ]
        },
        {
            id: "2",
            value: "کت",
            menus:[
                {
                    id:"11",
                    value:"کت مردانه"
                },
                {
                    id:"12",
                    value:"کت زنانه"
                },
                {
                    id:"13",
                    value:"کت بچه گانه"
                },

            ]
        },
        {
            id: "3",
            value: " شلوار ",
            menus:[
                {
                    id:"11",
                    value:" شلوار مردانه"
                },
                {
                    id:"12",
                    value:" شلوار زنانه"
                },
                {
                    id:"13",
                    value:" شلوار بچه گانه"
                },

            ]
        },

    ]

    return (
        <>
            <nav className=" d-none d-md-flex flex-row-reverse justify-content-between align-items-center mt-4 px-1">
                <LogoClass/>
                <Search/>
                <CartBtn/>
            </nav>
            <MegaMenu menuData={menuData}/>
        </>
    )
}

export default Nav