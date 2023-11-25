import React from "react";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import Box from "@mui/material/Box";
import Link from "next/link";
import TextsmsIcon from '@mui/icons-material/Textsms';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
const MenuList = () => {

    const data = [{ label: "brands", icon: true }, { label: "shop", icon: true }, { label: "premium", icon: false }, { label: "gift cards", icon: false }, { label: "Become an affiliate", icon: false }]
    return (
        <div className="bg-shark overflow-auto  text-white w-full px-4 absolute top-[120px] left-0" style={{ zIndex: 1000 }}>
            <ul>
                {
                    data.map((item, key) => (
                        <li className="w-full h-16 flex justify-between items-center">
                            <p className="font-semibold text-2xl lowercase"> {item.label}</p>
                            {item.icon && <TrendingFlatIcon />}
                        </li>

                    ))
                }
                <div className="flex items-center  h-16 mb-1 ">
                    <Box p={1}>
                        <TwitterIcon sx={{ color: "#fff" }} />
                    </Box>
                    <Box p={1}><AudiotrackIcon sx={{ color: "#fff" }} /></Box>
                    <Box p={1}>
                        <InstagramIcon sx={{ color: "#fff" }} />
                    </Box>

                </div>
                <div className="flex items-center">
                    <Box p={1}>
                        <PersonOutlineOutlinedIcon fontSize="small" />
                    </Box>
                    <Link className="text-white text-sm" href="#">login</Link>
                </div>
            </ul>
            <div className="absolute right-7 bottom-5">
                <div className="bg-Amaranth rounded-full h-5 w-5 text-sm inline-flex items-center justify-center absolute left-7 bottom-8">1</div>
                <TextsmsIcon sx={{ color: "#fff" }} fontSize="large" />
            </div>
        </div>
    )
}
export default MenuList;