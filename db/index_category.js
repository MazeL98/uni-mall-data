/**
 *  getIndexData()   获取首页目录及首屏内容
 *  getOtherData(req)  获取首页其它目录下的第x页内容
 */

const index_data = {
    category: [
        { id: 1, name: "推荐", order: 50, template: "index" },
        { id: 2, name: "手机", order: 50, template: "special" },
        { id: 3, name: "智能", order: 50, template: "special" },
        { id: 4, name: "电视", order: 50, template: "special" },
        { id: 5, name: "笔记本", order: 50, template: "special" },
        { id: 6, name: "家电", order: 50, template: "special" },
        { id: 7, name: "生活周边", order: 50, template: "special" },
    ],
    data: [
        {
            id: 1,
            type: "swiper",
            data: [
                {
                    src: "http://qiniuyun.mazel98.com/uni-mall/swiper1.jpg",
                },
                {
                    src: "http://qiniuyun.mazel98.com/uni-mall/swiper2.jpg",
                },
                {
                    src: "http://qiniuyun.mazel98.com/uni-mall/swiper3.jpg",
                },
                {
                    src: "http://qiniuyun.mazel98.com/uni-mall/swiper4.jpg",
                },
            ],
            order: 50,
            app_index_category_id: 1,
        },
        {
            id: 2,
            type: "indexnavs",
            data: [
                {
                    src: "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/1.png",
                    text: "新品发布",
                },
                {
                    src: "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/2.png",
                    text: "智选手机",
                },
                {
                    src: "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/3.png",
                    text: "以旧换新",
                },
                {
                    src: "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/4.png",
                    text: "校园优惠",
                },
                {
                    src: "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5.png",
                    text: "超值特卖",
                },
                {
                    src: "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6.png",
                    text: "一键秒杀",
                },
                {
                    src: "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/7.png",
                    text: "拼团惠购",
                },
                {
                    src: "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/8.png",
                    text: "智能家居",
                },
                {
                    src: "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/9.png",
                    text: "配件中心",
                },
                {
                    src: "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/10.png",
                    text: "无忧试用",
                },
            ],
            order: 50,
            app_index_category_id: 1,
        },
        {
            id: 3,
            type: "threeAdv",
            data: {
                0: {
                    src: "http://qiniuyun.mazel98.com/uni-mall/threeAdv0.jpg",
                },
                1: {
                    src: "http://qiniuyun.mazel98.com/uni-mall/threeAdv1.jpg",
                },
                2: {
                    src: "http://qiniuyun.mazel98.com/uni-mall/threeAdv2.jpg",
                },
                big: {
                    src: "http://qiniuyun.mazel98.com/uni-mall/threeAdv0.jpg",
                },
                smalltop: {
                    src: "http://qiniuyun.mazel98.com/uni-mall/threeAdv1.jpg",
                },
                smallbottom: {
                    src: "http://qiniuyun.mazel98.com/uni-mall/threeAdv2.jpg",
                },
            },
            order: 50,
            app_index_category_id: 1,
        },
        {
            id: 4,
            type: "oneAdv",
            data: {
                title: "每日精选",
                cover: "http://qiniuyun.mazel98.com/uni-mall/oneAdv.jpg",
            },
            order: 50,
            app_index_category_id: 1,
        },
        {
            id: 5,
            type: "list",
            data: [
                {
                    id: 11486786,
                    cover: "http://qiniuyun.mazel98.com/uni-mall/O1CN01SDgCtV1rUQ6zO1Fuu_%21%212210852105634.jpg_790x10000q50.jpg",
                    title: "Midea/美的空调大1匹p新一级能效挂机壁挂式变频冷暖智能卧室家用",
                    desc: "新一级能效更节能/冷暖控温更智能/高频速冷热更人性化",
                    oprice: 3499,
                    pprice: 3099,
                },
                {
                    id: 13548564,
                    cover: "http://qiniuyun.mazel98.com/uni-mall/samsung1.jpg",
                    title: "Samsung/三星 Galaxy S23旗舰新品智能手机第二代骁龙8超视觉夜拍 三星官方旗舰店官网",
                    desc: "专业影像/超亮全视护眼屏/OneUI5.0彰显风格",
                    oprice: 5399,
                    pprice: 5199,
                },
                {
                    id: 94981324,
                    cover: "http://qiniuyun.mazel98.com/uni-mall/siemensbanner1.jpg",
                    title: "西门子501L双开门家用电冰箱官方风冷无霜大容量NA20",
                    desc: "超薄嵌入风冷无霜/德系精工长效保鲜/501L大容量",
                    oprice: 5690,
                    pprice: 4790,
                },
                {
                    id: 87743898,
                    cover: "http://qiniuyun.mazel98.com/uni-mall/JMGObanner1.jpg",
                    title: "坚果N1 Ultra三色激光投影仪家用",
                    desc: "4K超高清投屏移动投影机2022新款 高亮客厅云台墙投巨幕家庭影院",
                    oprice: 11109,
                    pprice: 8999,
                },
                {
                    id: 25348978,
                    cover: "http://qiniuyun.mazel98.com/uni-mall/lenovobanner1.jpg",
                    title: "Lenovo/联想 拯救者 R9000P R7-5800H RTX3060笔记本电脑",
                    desc: "16英寸无界大屏/双面金属质感升级/霜刃Pro散热系统3.0",
                    oprice: 9399,
                    pprice: 8247,
                },
                {
                    id: 63175243,
                    cover: "http://qiniuyun.mazel98.com/uni-mall/BObanner1.jpg",
                    title: "B&O Beoplay E8 3.0三代真无线蓝牙高音质入耳式bo音乐耳机",
                    desc: "35小时超长续航/专业调校临场听感/戴若无物舒适体验",
                    oprice: 1898,
                    pprice: 1098,
                },
            ],
            order: 50,
            app_index_category_id: 1,
        },
    ],
};

const other_data = [
    {
        id: 1,
        type: "swiper",
        data: [
            {
                src: "http://qiniuyun.mazel98.com/uni-mall/swiper1.jpg",
            },
            {
                src: "http://qiniuyun.mazel98.com/uni-mall/swiper2.jpg",
            },
            {
                src: "http://qiniuyun.mazel98.com/uni-mall/swiper3.jpg",
            },
            {
                src: "http://qiniuyun.mazel98.com/uni-mall/swiper4.jpg",
            },
        ],
        order: 50,
        app_index_category_id: 1,
    },
    {
        id: 3,
        type: "threeAdv",
        data: {
            0: {
                src: "http://qiniuyun.mazel98.com/uni-mall/threeAdv0.jpg",
            },
            1: {
                src: "http://qiniuyun.mazel98.com/uni-mall/threeAdv1.jpg",
            },
            2: {
                src: "http://qiniuyun.mazel98.com/uni-mall/threeAdv2.jpg",
            },
            big: {
                src: "http://qiniuyun.mazel98.com/uni-mall/threeAdv0.jpg",
            },
            smalltop: {
                src: "http://qiniuyun.mazel98.com/uni-mall/threeAdv1.jpg",
            },
            smallbottom: {
                src: "http://qiniuyun.mazel98.com/uni-mall/threeAdv2.jpg",
            },
        },
        order: 50,
        app_index_category_id: 1,
    },
    {
        id: 4,
        type: "oneAdv",
        data: {
            title: "每日精选",
            cover: "http://qiniuyun.mazel98.com/uni-mall/oneAdv.jpg",
        },
        order: 50,
        app_index_category_id: 1,
    },
    {
        id: 5,
        type: "list",
        data: [
            {
                id: 11486786,
                cover: "http://qiniuyun.mazel98.com/uni-mall/O1CN01SDgCtV1rUQ6zO1Fuu_%21%212210852105634.jpg_790x10000q50.jpg",
                title: "Midea/美的空调大1匹p新一级能效挂机壁挂式变频冷暖智能卧室家用",
                desc: "新一级能效更节能/冷暖控温更智能/高频速冷热更人性化",
                oprice: 3499,
                pprice: 3099,
            },
            {
                id: 13548564,
                cover: "http://qiniuyun.mazel98.com/uni-mall/samsung1.jpg",
                title: "Samsung/三星 Galaxy S23旗舰新品智能手机第二代骁龙8超视觉夜拍 三星官方旗舰店官网",
                desc: "专业影像/超亮全视护眼屏/OneUI5.0彰显风格",
                oprice: 5399,
                pprice: 5199,
            },
            {
                id: 94981324,
                cover: "http://qiniuyun.mazel98.com/uni-mall/siemensbanner1.jpg",
                title: "西门子501L双开门家用电冰箱官方风冷无霜大容量NA20",
                desc: "超薄嵌入风冷无霜/德系精工长效保鲜/501L大容量",
                oprice: 5690,
                pprice: 4790,
            },
            {
                id: 87743898,
                cover: "http://qiniuyun.mazel98.com/uni-mall/JMGObanner1.jpg",
                title: "坚果N1 Ultra三色激光投影仪家用",
                desc: "4K超高清投屏移动投影机2022新款 高亮客厅云台墙投巨幕家庭影院",
                oprice: 11109,
                pprice: 8999,
            },
            {
                id: 25348978,
                cover: "http://qiniuyun.mazel98.com/uni-mall/lenovobanner1.jpg",
                title: "Lenovo/联想 拯救者 R9000P R7-5800H RTX3060笔记本电脑",
                desc: "16英寸无界大屏/双面金属质感升级/霜刃Pro散热系统3.0",
                oprice: 9399,
                pprice: 8247,
            },
            {
                id: 63175243,
                cover: "http://qiniuyun.mazel98.com/uni-mall/BObanner1.jpg",
                title: "B&O Beoplay E8 3.0三代真无线蓝牙高音质入耳式bo音乐耳机",
                desc: "35小时超长续航/专业调校临场听感/戴若无物舒适体验",
                oprice: 1898,
                pprice: 1098,
            },
        ],
        order: 50,
        app_index_category_id: 1,
    },
    {
        id: 1,
        type: "swiper",
        data: [
            {
                src: "http://qiniuyun.mazel98.com/uni-mall/swiper1.jpg",
            },
            {
                src: "http://qiniuyun.mazel98.com/uni-mall/swiper2.jpg",
            },
        ],
        order: 50,
        app_index_category_id: 2,
    },
    {
        id: 3,
        type: "threeAdv",
        data: {
            0: {
                src: "http://qiniuyun.mazel98.com/uni-mall/threeAdv0.jpg",
            },
            1: {
                src: "http://qiniuyun.mazel98.com/uni-mall/threeAdv1.jpg",
            },
            2: {
                src: "http://qiniuyun.mazel98.com/uni-mall/threeAdv2.jpg",
            },
            big: {
                src: "http://qiniuyun.mazel98.com/uni-mall/threeAdv0.jpg",
            },
            smalltop: {
                src: "http://qiniuyun.mazel98.com/uni-mall/threeAdv1.jpg",
            },
            smallbottom: {
                src: "http://qiniuyun.mazel98.com/uni-mall/threeAdv2.jpg",
            },
        },
        order: 50,
        app_index_category_id: 2,
    },
    {
        id: 5,
        type: "list",
        data: [
            {
                id: 11486786,
                cover: "http://qiniuyun.mazel98.com/uni-mall/O1CN01SDgCtV1rUQ6zO1Fuu_%21%212210852105634.jpg_790x10000q50.jpg",
                title: "Midea/美的空调大1匹p新一级能效挂机壁挂式变频冷暖智能卧室家用",
                desc: "新一级能效更节能/冷暖控温更智能/高频速冷热更人性化",
                oprice: 3499,
                pprice: 3099,
            },
            {
                id: 13548564,
                cover: "http://qiniuyun.mazel98.com/uni-mall/samsung1.jpg",
                title: "Samsung/三星 Galaxy S23旗舰新品智能手机第二代骁龙8超视觉夜拍 三星官方旗舰店官网",
                desc: "专业影像/超亮全视护眼屏/OneUI5.0彰显风格",
                oprice: 5399,
                pprice: 5199,
            },
            {
                id: 94981324,
                cover: "http://qiniuyun.mazel98.com/uni-mall/siemensbanner1.jpg",
                title: "西门子501L双开门家用电冰箱官方风冷无霜大容量NA20",
                desc: "超薄嵌入风冷无霜/德系精工长效保鲜/501L大容量",
                oprice: 5690,
                pprice: 4790,
            },
            {
                id: 87743898,
                cover: "http://qiniuyun.mazel98.com/uni-mall/JMGObanner1.jpg",
                title: "坚果N1 Ultra三色激光投影仪家用",
                desc: "4K超高清投屏移动投影机2022新款 高亮客厅云台墙投巨幕家庭影院",
                oprice: 11109,
                pprice: 8999,
            },
            {
                id: 25348978,
                cover: "http://qiniuyun.mazel98.com/uni-mall/lenovobanner1.jpg",
                title: "Lenovo/联想 拯救者 R9000P R7-5800H RTX3060笔记本电脑",
                desc: "16英寸无界大屏/双面金属质感升级/霜刃Pro散热系统3.0",
                oprice: 9399,
                pprice: 8247,
            },
            {
                id: 63175243,
                cover: "http://qiniuyun.mazel98.com/uni-mall/BObanner1.jpg",
                title: "B&O Beoplay E8 3.0三代真无线蓝牙高音质入耳式bo音乐耳机",
                desc: "35小时超长续航/专业调校临场听感/戴若无物舒适体验",
                oprice: 1898,
                pprice: 1098,
            },
        ],
        order: 50,
        app_index_category_id: 2,
    },
    {
        id: 4,
        type: "oneAdv",
        data: {
            title: "每日精选",
            cover: "http://qiniuyun.mazel98.com/uni-mall/oneAdv.jpg",
        },
        order: 50,
        app_index_category_id: 3,
    },
    {
        id: 2,
        type: "indexnavs",
        data: [
            {
                src: "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/1.png",
                text: "新品发布",
            },
            {
                src: "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/2.png",
                text: "智选手机",
            },
            {
                src: "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/3.png",
                text: "以旧换新",
            },
            {
                src: "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/4.png",
                text: "校园优惠",
            },
            {
                src: "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/5.png",
                text: "超值特卖",
            },
            {
                src: "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/6.png",
                text: "一键秒杀",
            },
            {
                src: "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/7.png",
                text: "拼团惠购",
            },
            {
                src: "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/8.png",
                text: "智能家居",
            },
            {
                src: "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/9.png",
                text: "配件中心",
            },
            {
                src: "https://tangzhe123-com.oss-cn-shenzhen.aliyuncs.com/public/10.png",
                text: "无忧试用",
            },
        ],
        order: 50,
        app_index_category_id: 3,
    },
    {
        id: 5,
        type: "list",
        data: [
            {
                id: 11486786,
                cover: "http://qiniuyun.mazel98.com/uni-mall/O1CN01SDgCtV1rUQ6zO1Fuu_%21%212210852105634.jpg_790x10000q50.jpg",
                title: "Midea/美的空调大1匹p新一级能效挂机壁挂式变频冷暖智能卧室家用",
                desc: "新一级能效更节能/冷暖控温更智能/高频速冷热更人性化",
                oprice: 3499,
                pprice: 3099,
            },
            {
                id: 13548564,
                cover: "http://qiniuyun.mazel98.com/uni-mall/samsung1.jpg",
                title: "Samsung/三星 Galaxy S23旗舰新品智能手机第二代骁龙8超视觉夜拍 三星官方旗舰店官网",
                desc: "专业影像/超亮全视护眼屏/OneUI5.0彰显风格",
                oprice: 5399,
                pprice: 5199,
            },
            {
                id: 94981324,
                cover: "http://qiniuyun.mazel98.com/uni-mall/siemensbanner1.jpg",
                title: "西门子501L双开门家用电冰箱官方风冷无霜大容量NA20",
                desc: "超薄嵌入风冷无霜/德系精工长效保鲜/501L大容量",
                oprice: 5690,
                pprice: 4790,
            },
            {
                id: 87743898,
                cover: "http://qiniuyun.mazel98.com/uni-mall/JMGObanner1.jpg",
                title: "坚果N1 Ultra三色激光投影仪家用",
                desc: "4K超高清投屏移动投影机2022新款 高亮客厅云台墙投巨幕家庭影院",
                oprice: 11109,
                pprice: 8999,
            },
            {
                id: 25348978,
                cover: "http://qiniuyun.mazel98.com/uni-mall/lenovobanner1.jpg",
                title: "Lenovo/联想 拯救者 R9000P R7-5800H RTX3060笔记本电脑",
                desc: "16英寸无界大屏/双面金属质感升级/霜刃Pro散热系统3.0",
                oprice: 9399,
                pprice: 8247,
            },
            {
                id: 63175243,
                cover: "http://qiniuyun.mazel98.com/uni-mall/BObanner1.jpg",
                title: "B&O Beoplay E8 3.0三代真无线蓝牙高音质入耳式bo音乐耳机",
                desc: "35小时超长续航/专业调校临场听感/戴若无物舒适体验",
                oprice: 1898,
                pprice: 1098,
            },
        ],
        order: 50,
        app_index_category_id: 3,
    },
    {
        id: 1,
        type: "swiper",
        data: [
            {
                src: "http://qiniuyun.mazel98.com/uni-mall/swiper1.jpg",
            },
            {
                src: "http://qiniuyun.mazel98.com/uni-mall/swiper2.jpg",
            },
        ],
        order: 50,
        app_index_category_id: 4,
    },
    {
        id: 5,
        type: "list",
        data: [
            {
                id: 11486786,
                cover: "http://qiniuyun.mazel98.com/uni-mall/O1CN01SDgCtV1rUQ6zO1Fuu_%21%212210852105634.jpg_790x10000q50.jpg",
                title: "Midea/美的空调大1匹p新一级能效挂机壁挂式变频冷暖智能卧室家用",
                desc: "新一级能效更节能/冷暖控温更智能/高频速冷热更人性化",
                oprice: 3499,
                pprice: 3099,
            },
            {
                id: 13548564,
                cover: "http://qiniuyun.mazel98.com/uni-mall/samsung1.jpg",
                title: "Samsung/三星 Galaxy S23旗舰新品智能手机第二代骁龙8超视觉夜拍 三星官方旗舰店官网",
                desc: "专业影像/超亮全视护眼屏/OneUI5.0彰显风格",
                oprice: 5399,
                pprice: 5199,
            },
            {
                id: 94981324,
                cover: "http://qiniuyun.mazel98.com/uni-mall/siemensbanner1.jpg",
                title: "西门子501L双开门家用电冰箱官方风冷无霜大容量NA20",
                desc: "超薄嵌入风冷无霜/德系精工长效保鲜/501L大容量",
                oprice: 5690,
                pprice: 4790,
            },
            {
                id: 87743898,
                cover: "http://qiniuyun.mazel98.com/uni-mall/JMGObanner1.jpg",
                title: "坚果N1 Ultra三色激光投影仪家用",
                desc: "4K超高清投屏移动投影机2022新款 高亮客厅云台墙投巨幕家庭影院",
                oprice: 11109,
                pprice: 8999,
            },
            {
                id: 25348978,
                cover: "http://qiniuyun.mazel98.com/uni-mall/lenovobanner1.jpg",
                title: "Lenovo/联想 拯救者 R9000P R7-5800H RTX3060笔记本电脑",
                desc: "16英寸无界大屏/双面金属质感升级/霜刃Pro散热系统3.0",
                oprice: 9399,
                pprice: 8247,
            },
            {
                id: 63175243,
                cover: "http://qiniuyun.mazel98.com/uni-mall/BObanner1.jpg",
                title: "B&O Beoplay E8 3.0三代真无线蓝牙高音质入耳式bo音乐耳机",
                desc: "35小时超长续航/专业调校临场听感/戴若无物舒适体验",
                oprice: 1898,
                pprice: 1098,
            },
        ],
        order: 50,
        app_index_category_id: 4,
    },
    {
        id: 5,
        type: "list",
        data: [
            {
                id: 11486786,
                cover: "http://qiniuyun.mazel98.com/uni-mall/O1CN01SDgCtV1rUQ6zO1Fuu_%21%212210852105634.jpg_790x10000q50.jpg",
                title: "Midea/美的空调大1匹p新一级能效挂机壁挂式变频冷暖智能卧室家用",
                desc: "新一级能效更节能/冷暖控温更智能/高频速冷热更人性化",
                oprice: 3499,
                pprice: 3099,
            },
            {
                id: 13548564,
                cover: "http://qiniuyun.mazel98.com/uni-mall/samsung1.jpg",
                title: "Samsung/三星 Galaxy S23旗舰新品智能手机第二代骁龙8超视觉夜拍 三星官方旗舰店官网",
                desc: "专业影像/超亮全视护眼屏/OneUI5.0彰显风格",
                oprice: 5399,
                pprice: 5199,
            },
            {
                id: 94981324,
                cover: "http://qiniuyun.mazel98.com/uni-mall/siemensbanner1.jpg",
                title: "西门子501L双开门家用电冰箱官方风冷无霜大容量NA20",
                desc: "超薄嵌入风冷无霜/德系精工长效保鲜/501L大容量",
                oprice: 5690,
                pprice: 4790,
            },
            {
                id: 87743898,
                cover: "http://qiniuyun.mazel98.com/uni-mall/JMGObanner1.jpg",
                title: "坚果N1 Ultra三色激光投影仪家用",
                desc: "4K超高清投屏移动投影机2022新款 高亮客厅云台墙投巨幕家庭影院",
                oprice: 11109,
                pprice: 8999,
            },
            {
                id: 25348978,
                cover: "http://qiniuyun.mazel98.com/uni-mall/lenovobanner1.jpg",
                title: "Lenovo/联想 拯救者 R9000P R7-5800H RTX3060笔记本电脑",
                desc: "16英寸无界大屏/双面金属质感升级/霜刃Pro散热系统3.0",
                oprice: 9399,
                pprice: 8247,
            },
            {
                id: 63175243,
                cover: "http://qiniuyun.mazel98.com/uni-mall/BObanner1.jpg",
                title: "B&O Beoplay E8 3.0三代真无线蓝牙高音质入耳式bo音乐耳机",
                desc: "35小时超长续航/专业调校临场听感/戴若无物舒适体验",
                oprice: 1898,
                pprice: 1098,
            },
        ],
        order: 50,
        app_index_category_id: 5,
    },
    {
        id: 5,
        type: "list",
        data: [
            {
                id: 11486786,
                cover: "http://qiniuyun.mazel98.com/uni-mall/O1CN01SDgCtV1rUQ6zO1Fuu_%21%212210852105634.jpg_790x10000q50.jpg",
                title: "Midea/美的空调大1匹p新一级能效挂机壁挂式变频冷暖智能卧室家用",
                desc: "新一级能效更节能/冷暖控温更智能/高频速冷热更人性化",
                oprice: 3499,
                pprice: 3099,
            },
            {
                id: 13548564,
                cover: "http://qiniuyun.mazel98.com/uni-mall/samsung1.jpg",
                title: "Samsung/三星 Galaxy S23旗舰新品智能手机第二代骁龙8超视觉夜拍 三星官方旗舰店官网",
                desc: "专业影像/超亮全视护眼屏/OneUI5.0彰显风格",
                oprice: 5399,
                pprice: 5199,
            },
            {
                id: 94981324,
                cover: "http://qiniuyun.mazel98.com/uni-mall/siemensbanner1.jpg",
                title: "西门子501L双开门家用电冰箱官方风冷无霜大容量NA20",
                desc: "超薄嵌入风冷无霜/德系精工长效保鲜/501L大容量",
                oprice: 5690,
                pprice: 4790,
            },
            {
                id: 87743898,
                cover: "http://qiniuyun.mazel98.com/uni-mall/JMGObanner1.jpg",
                title: "坚果N1 Ultra三色激光投影仪家用",
                desc: "4K超高清投屏移动投影机2022新款 高亮客厅云台墙投巨幕家庭影院",
                oprice: 11109,
                pprice: 8999,
            },
            {
                id: 25348978,
                cover: "http://qiniuyun.mazel98.com/uni-mall/lenovobanner1.jpg",
                title: "Lenovo/联想 拯救者 R9000P R7-5800H RTX3060笔记本电脑",
                desc: "16英寸无界大屏/双面金属质感升级/霜刃Pro散热系统3.0",
                oprice: 9399,
                pprice: 8247,
            },
            {
                id: 63175243,
                cover: "http://qiniuyun.mazel98.com/uni-mall/BObanner1.jpg",
                title: "B&O Beoplay E8 3.0三代真无线蓝牙高音质入耳式bo音乐耳机",
                desc: "35小时超长续航/专业调校临场听感/戴若无物舒适体验",
                oprice: 1898,
                pprice: 1098,
            },
        ],
        order: 50,
        app_index_category_id: 6,
    },
    {
        id: 5,
        type: "list",
        data: [
            {
                id: 11486786,
                cover: "http://qiniuyun.mazel98.com/uni-mall/O1CN01SDgCtV1rUQ6zO1Fuu_%21%212210852105634.jpg_790x10000q50.jpg",
                title: "Midea/美的空调大1匹p新一级能效挂机壁挂式变频冷暖智能卧室家用",
                desc: "新一级能效更节能/冷暖控温更智能/高频速冷热更人性化",
                oprice: 3499,
                pprice: 3099,
            },
            {
                id: 13548564,
                cover: "http://qiniuyun.mazel98.com/uni-mall/samsung1.jpg",
                title: "Samsung/三星 Galaxy S23旗舰新品智能手机第二代骁龙8超视觉夜拍 三星官方旗舰店官网",
                desc: "专业影像/超亮全视护眼屏/OneUI5.0彰显风格",
                oprice: 5399,
                pprice: 5199,
            },
            {
                id: 94981324,
                cover: "http://qiniuyun.mazel98.com/uni-mall/siemensbanner1.jpg",
                title: "西门子501L双开门家用电冰箱官方风冷无霜大容量NA20",
                desc: "超薄嵌入风冷无霜/德系精工长效保鲜/501L大容量",
                oprice: 5690,
                pprice: 4790,
            },
            {
                id: 87743898,
                cover: "http://qiniuyun.mazel98.com/uni-mall/JMGObanner1.jpg",
                title: "坚果N1 Ultra三色激光投影仪家用",
                desc: "4K超高清投屏移动投影机2022新款 高亮客厅云台墙投巨幕家庭影院",
                oprice: 11109,
                pprice: 8999,
            },
            {
                id: 25348978,
                cover: "http://qiniuyun.mazel98.com/uni-mall/lenovobanner1.jpg",
                title: "Lenovo/联想 拯救者 R9000P R7-5800H RTX3060笔记本电脑",
                desc: "16英寸无界大屏/双面金属质感升级/霜刃Pro散热系统3.0",
                oprice: 9399,
                pprice: 8247,
            },
            {
                id: 63175243,
                cover: "http://qiniuyun.mazel98.com/uni-mall/BObanner1.jpg",
                title: "B&O Beoplay E8 3.0三代真无线蓝牙高音质入耳式bo音乐耳机",
                desc: "35小时超长续航/专业调校临场听感/戴若无物舒适体验",
                oprice: 1898,
                pprice: 1098,
            },
        ],
        order: 50,
        app_index_category_id: 7,
    },
];

function getIndexData() {
    return {
        msg: "ok",
        data: index_data,
    };
}

function getOtherData(id, page) {
    let cur_category = other_data.filter(
        (item) => item.app_index_category_id == id
    );

    return {
        msg: "ok",
        data: cur_category,
    };
}

export { getIndexData, getOtherData };
