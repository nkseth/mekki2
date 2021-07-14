import React, { useState } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Group from '../../asserts/Group.png'
import Videomodel from '../../components/videomodel'
const useStyles = makeStyles(() =>
    createStyles({
        root: {

            justifyContent: 'space-between',

            maxWidth: '100vw',
            zIndex: -2,



        },




    }),
);

const Path3: React.FC = () => {
    const classes = useStyles();
    const [videomodel, setvideomodel] = useState(false)
    const close = () => {
        setvideomodel(false)
    }
    const openi = () => {
        setvideomodel(true)
    }
    return (
        <div className={classes.root}>

            <Videomodel url="https://www.youtube.com/watch?v=tcmNo-cdCPU" open={videomodel} close={close} />
            <svg width="100%" height="100%" viewBox="200 1000 1950 1350" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g filter="url(#filter0_d)">
                    <path d="M219.591 2049.33C219.591 2049.33 729.228 1866.93 1002.86 1989.97C1276.5 2113.01 1769.35 2516.11 2136.8 1815.15C2504.25 1114.19 2401.89 908.885 2401.89 908.885L2110.08 785.968L1308.74 841.604L811.469 847.326L502.379 840.538L25.4091 896.639L110.863 1364.55L152.317 2084.47L219.591 2049.33Z" fill="#20368F" />
                </g>
                <g filter="url(#filter1_d)">
                    <path d="M202 1962.79C202 1962.79 735.941 1696.53 1202.7 2031.95C1669.46 2367.38 1986.74 2045.79 1986.74 2045.79C1986.74 2045.79 2148.43 1938.59 2142.33 1651.58C2136.23 1364.56 2142.33 980.724 2142.33 980.724H202V1962.79Z" fill="#F5F5F5" />
                </g>
                <g filter="url(#filter2_d)">
                    <path d="M2437.23 1028.48L2174.34 1940.34C2083.43 2255.66 1712.42 2413.69 1345.66 2293.32L1344.67 2293C977.912 2172.63 754.292 1819.44 845.199 1504.13L1108.1 592.258C1199.01 276.941 1570.02 118.908 1936.77 239.276L1937.77 239.602C2304.52 359.971 2528.14 713.162 2437.23 1028.48Z" fill="#20368F" />
                </g>
                <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="870" y="186" width="1634" height="2136">
                    <path d="M2483.23 1016.24L2220.34 1928.11C2129.43 2243.42 1758.42 2401.46 1391.66 2281.09L1390.67 2280.76C1023.91 2160.39 800.292 1807.2 891.199 1491.89L1154.1 580.022C1245.01 264.705 1616.02 106.671 1982.77 227.039L1983.77 227.366C2350.52 347.735 2574.14 700.926 2483.23 1016.24Z" fill="#000B4F" />
                </mask>
                <g mask="url(#mask0)">
                    <rect x="302" y="1003" width="1912" height="1346" fill="url(#pattern0)" />
                </g>
                <mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="870" y="186" width="1634" height="2136">
                    <path opacity="0.8" d="M1982.64 227.522L1982.77 227.039L1982.64 227.522L1983.64 227.848C2350.2 348.156 2573.57 701.102 2482.76 1016.08L2219.86 1927.94C2129.05 2242.93 1758.36 2400.91 1391.79 2280.6L1390.8 2280.28C1024.23 2159.97 800.863 1807.02 891.672 1492.05L1154.57 580.185C1245.38 265.199 1616.07 107.215 1982.64 227.522Z" fill="#000B4F" stroke="#000B4F" />
                </mask>
                <g mask="url(#mask1)">
                    <path opacity="0.49" d="M833 1042.72C833 1020.63 850.909 1002.72 873 1002.72H2757C2779.09 1002.72 2797 1020.63 2797 1042.72V2374.72C2797 2396.81 2779.09 2414.72 2757 2414.72H873C850.909 2414.72 833 2396.81 833 2374.72V1042.72Z" fill="#000B4F" />
                    <path onClick={openi} d="M1643.54 1665.35C1646.88 1667.27 1646.89 1672.08 1643.56 1674.01L1541.77 1733.06C1538.44 1735 1534.27 1732.6 1534.26 1728.75L1534.01 1611.07C1534 1607.22 1538.17 1604.81 1541.5 1606.72L1643.54 1665.35Z" fill="white" />
                </g>
                <defs>
                    <filter id="filter0_d" x="0.409058" y="763.969" width="2439.59" height="1481.12" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="3" />
                        <feGaussianBlur stdDeviation="12.5" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.31 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                    </filter>
                    <filter id="filter1_d" x="186" y="970.724" width="1972.5" height="1235.98" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="6" />
                        <feGaussianBlur stdDeviation="8" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.341 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                    </filter>
                    <filter id="filter2_d" x="799.942" y="176.926" width="1682.55" height="2184.75" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                        <feOffset dy="3" />
                        <feGaussianBlur stdDeviation="12.5" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.388 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
                    </filter>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlinkHref="#image0" transform="translate(0 -0.000136206) scale(0.000520833 0.000739846)" />
                    </pattern>
                    <image id="image0" width="1920" height="1352" xlinkHref={Group} />
                </defs>
            </svg>


        </div >
    )
}


export default Path3