import React, { useEffect, useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu, menuClasses, MenuItemStyles } from 'react-pro-sidebar';
import style from './Sidebar.module.css'

import Image from 'next/image';
import { AdminSidebarItems, AdminSidebarType } from './AdminSidebarItems';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSidebarState } from '@/state/adminSidebarState/adminSidebarState';
import Button from '@/components/Button/Button';
import Loading from '@/components/loading/Loading';
import { AiFillHome } from 'react-icons/ai';




const theme = "dark";
// type Theme = 'light' | 'dark';

const themes = {
    light: {
        sidebar: {
            backgroundColor: '#ffffff',
            color: '#607489',
        },
        menu: {
            menuContent: '#fbfcfd',
            icon: '#0098e5',
            hover: {
                backgroundColor: '#c5e4ff',
                color: '#44596e',
            },
            disabled: {
                color: '#9fb6cf',
            },
        },
    },
    dark: {
        sidebar: {
            backgroundColor: '#0b2948',
            color: '#8ba1b7',
        },
        menu: {
            menuContent: '#082440',
            icon: '#59d0ff',
            active: {
                backgroundColor: "#6366f1CC",
            },
            hover: {
                backgroundColor: '#00458b',
                color: 'white',
            },
            disabled: {
                color: '#3e5e7e',
            },
        },
    },
};
const hexToRgba = (hex: string, alpha: number) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
const menuItemStyles: MenuItemStyles = {
    root: {
        fontSize: '13px',
        fontWeight: 400,
    },
    icon: {
        color: themes[theme].menu.icon,
        [`&.${menuClasses.disabled}`]: {
            color: themes[theme].menu.disabled.color,
        },
    },

    SubMenuExpandIcon: {
        color: '#b6b7b9',
    },
    subMenuContent: ({ level }:any) => ({
        backgroundColor:
            level === 0
                ? hexToRgba(themes[theme].menu.menuContent, false && !false ? 0.4 : 1)
                : 'transparent',
    }),
    button: {
        [`&.${menuClasses.disabled}`]: {
            color: themes[theme].menu.disabled.color,
        },
        '&:hover': {
            backgroundColor: hexToRgba(themes[theme].menu.hover.backgroundColor, false ? 0.8 : 1),
            color: themes[theme].menu.hover.color,
            borderRadius: "10px"
        },
        [`&.${menuClasses.active}`]: {
            backgroundColor: themes[theme].menu.active.backgroundColor,
            borderRadius: "10px",
        },

    },
    label: ({ open }:any) => ({
        fontWeight: open ? 600 : undefined,
    }),
};

export default function AdminSidebar() {
    const { isToggled, setToggleState } = useSidebarState();
    const [windowLoaded, setWindowLoaded] = useState(false);
    const pathname = usePathname();
    useEffect(() => {
        if (typeof window != undefined) {
            setTimeout(() => {
                setWindowLoaded(true);
            }, 300);
        }
    }, [])
    return (
        <div className='relative bg-slate-900 adminWindow md:w-[30rem] md:border-2 border-blue-600 overflow-y-hiddens overflow-x-hidden flex flex-col justify-between sm:justify-normal '>
            {windowLoaded == false ? <Loading isAdmin /> :
                <Sidebar
                    width='100%'
                    breakPoint="md"
                    style={{ border: 'none', height: "100%" }}
                    toggled={isToggled}
                    // {...smoothScrollPrevent}
                    className='flex w-full flex-col overflow-y-auto justify-between'

                    // className="border-none w-80"

                    backgroundColor={themes.dark.sidebar.backgroundColor}
                >
                    <div className='flex z-50 bg-[#0b2948] pb-2 mt-0 sticky top-0 flex-col items-center mb-4'>
                        <Image src={"/logo/logo.png"} className='mt-2 mb-3'  height={20} width={80} alt='DSPMU Logo' />
                        <h2 className='text-white m-0 text-center'>Nature Items Admin</h2>
                    </div>
                    <div className='pr-2'>
                        <Menu closeOnClick menuItemStyles={menuItemStyles}  >
                            <MenuItem onClick={() => {
                                setToggleState(false);
                            }} active={pathname == "/admin"} component={<Link href={"/admin"} />} icon={<AiFillHome className='h-5 w-5' />} > Home </MenuItem>
                            <MapMenu menuItems={AdminSidebarItems} />
                        </Menu>
                    </div>


                    <div className='sticky m-2 top-full flex justify-center'>
                        <button onClick={() => { setToggleState(false) }} className='button btnred md:hidden '>Close</button>
                    </div>

                </Sidebar>
            }
        </div>
    );
};

function MapMenu({ menuItems }: { menuItems: AdminSidebarType[] }) {
    const pathname = usePathname();
    const { setToggleState } = useSidebarState();
    return menuItems.map((value, index: number) => {
        if (value.type == "menu") {
            return <MenuItem onClick={() => {
                setToggleState(false);
            }} key={value.title + index} active={pathname.startsWith(value.href)} component={<Link href={value.href} />} icon={value.LeftIcon ? <value.LeftIcon className='h-5 w-5' /> : null} > {value.title} </MenuItem>
        }
        else
            return <SubMenu className='my-2 ' defaultOpen={pathname.startsWith(value.initialHref)} key={value.title + index} label={value.title} icon={value.LeftIcon ? <value.LeftIcon className='h-5 w-5' /> : null}  >
                <MapMenu menuItems={value.subMenu} />
            </SubMenu>

    })

}