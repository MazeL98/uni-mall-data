import fs from "fs";
// 获取所有商品的详情数据
let allGoodsDetail = fs.readFileSync("db/static/goods_detail.json");
let allGoodsData = JSON.parse(allGoodsDetail);
// 获取所有商品的评论详情数据
let allComments = fs.readFileSync("db/static/goods_comments_detail.json");
let allCommentsData = JSON.parse(allComments);

/**
 *  getGoods(id)   获取指定id商品详情
 *  getComments(id, page)  获取指定id的评论数据
 * searchGoods()   搜索商品
 */

function getGoods(id) {
    const res = allGoodsData.find((item) => item.id == id);
    if (!res) {
        return {
            msg: "ok",
            data: allGoodsData[0],
        };
    } else {
        return {
            msg: "ok",
            data: res,
        };
    }
}

function getComments(id, type) {
    const comments = allCommentsData.find((item) => item.id == id);
    if (comments) {
        return {
            msg: "ok",
            data: {
                list: comments.list,
                total: comments.total,
                good_rate: comments.good_rate,
            },
        };
    } else {
        return {
            msg: "ok",
            data: {},
        };
    }
}

// 降序排序
function compareDesc(p) {
    return function (m, n) {
        let a = m[p];
        let b = n[p];
        return b - a;
    };
}
// 升序排列
function compareAsc(p) {
    return function (m, n) {
        let a = m[p];
        let b = n[p];
        return a - b;
    };
}
function searchGoods(req) {
    const { title, all, sale_count, min_price, price } = req.body;
    if (title) {
        let resList = allGoodsData.filter((item) => item.title.includes(title));
        // 有搜索关键词但没有搜到相关商品
        if (!resList.length) {
            return {
                msg: "ok",
                data: [],
            };
        } else {
            // 搜到了相关商品
            const formatList = resList.map((item) => {
                return {
                    id: item.id,
                    title: item.title,
                    cover: item.cover,
                    min_price: item.min_price,
                    sale_count: item.sale_count,
                    comments_count: item.review_count,
                    comments_good_rate: Number(Math.random().toFixed(1)),
                };
            });
            let mockList = [...formatList];
            let num = Math.floor(Math.random() * 10 + 1);
            for (let i = 0; i < num; i++) {
                mockList.push({
                    id:
                        Math.floor(Math.random() * (88543247 - 12543624)) +
                        12543624,
                    title:
                        formatList[0].title +
                        Math.floor(Math.random() * 10 + 1),
                    cover: formatList[0].cover,
                    min_price:
                        Number(formatList[0].min_price) +
                        Math.floor(Math.random() * (500 - 50)) +
                        50,
                    comments_count: Math.floor(Math.random() * 50 + 1),
                    sale_count:
                        formatList[0].sale_count -
                        Math.floor(Math.random() * 10) +
                        1,
                    comments_good_rate: Number(Math.random().toFixed(1)),
                });
            }
            // 如果需要综合排序
            if (all) {
                switch (all) {
                    case "desc":
                        mockList.sort(compareDesc("comments_good_rate"));
                        break;
                    case "asc":
                        mockList.sort(compareAsc("comments_good_rate"));
                        break;
                }
            }
            // 如果按销量排序
            if (sale_count) {
                switch (sale_count) {
                    case "desc":
                        mockList.sort(compareDesc("sale_count"));
                        break;
                    case "asc":
                        mockList.sort(compareAsc("sale_count"));
                        break;
                }
            }
            // 如果按价格排序
            if (min_price) {
                switch (min_price) {
                    case "desc":
                        mockList.sort(compareDesc("min_price"));
                        break;
                    case "asc":
                        mockList.sort(compareAsc("min_price"));
                        break;
                }
            }
            // 如果筛选价格
            if (price) {
                const filterArr = price.split(",");
                switch (filterArr[0]) {
                    case "less":
                        mockList = mockList.filter(
                            (item) => item.min_price < Number(filterArr[1])
                        );
                        break;
                    case "between":
                        mockList = mockList.filter(
                            (item) =>
                                item.min_price < Number(filterArr[2]) &&
                                item.min_price > Number(filterArr[1])
                        );
                        break;
                    case "more":
                        mockList = mockList.filter(
                            (item) => item.min_price > Number(filterArr[1])
                        );
                        break;
                }
            }
            return {
                mes: "ok",
                data: mockList,
            };
        }
    }
}

// 获取热门列表

function getHotList(req) {
    let recomList = [
        {
            id: 11486786,
            cover: "https://qiniuyun.mazel98.com/uni-mall/O1CN01SDgCtV1rUQ6zO1Fuu_%21%212210852105634.jpg_790x10000q50.jpg",
            title: "Midea/美的空调大1匹p新一级能效挂机壁挂式变频冷暖智能卧室家用",
            desc: "新一级能效更节能/冷暖控温更智能/高频速冷热更人性化",
            oprice: 3499,
            pprice: 3099,
        },
        {
            id: 13548564,
            cover: "https://qiniuyun.mazel98.com/uni-mall/samsung1.jpg",
            title: "Samsung/三星 Galaxy S23旗舰新品智能手机第二代骁龙8超视觉夜拍 三星官方旗舰店官网",
            desc: "专业影像/超亮全视护眼屏/OneUI5.0彰显风格",
            oprice: 5399,
            pprice: 5199,
        },
        {
            id: 94981324,
            cover: "https://qiniuyun.mazel98.com/uni-mall/siemensbanner1.jpg",
            title: "西门子501L双开门家用电冰箱官方风冷无霜大容量NA20",
            desc: "超薄嵌入风冷无霜/德系精工长效保鲜/501L大容量",
            oprice: 5690,
            pprice: 4790,
        },
        {
            id: 87743898,
            cover: "https://qiniuyun.mazel98.com/uni-mall/JMGObanner1.jpg",
            title: "坚果N1 Ultra三色激光投影仪家用",
            desc: "4K超高清投屏移动投影机2022新款 高亮客厅云台墙投巨幕家庭影院",
            oprice: 11109,
            pprice: 8999,
        },
        {
            id: 25348978,
            cover: "https://qiniuyun.mazel98.com/uni-mall/lenovobanner1.jpg",
            title: "Lenovo/联想 拯救者 R9000P R7-5800H RTX3060笔记本电脑",
            desc: "16英寸无界大屏/双面金属质感升级/霜刃Pro散热系统3.0",
            oprice: 9399,
            pprice: 8247,
        },
        {
            id: 63175243,
            cover: "https://qiniuyun.mazel98.com/uni-mall/BObanner1.jpg",
            title: "B&O Beoplay E8 3.0三代真无线蓝牙高音质入耳式bo音乐耳机",
            desc: "35小时超长续航/专业调校临场听感/戴若无物舒适体验",
            oprice: 1898,
            pprice: 1098,
        },
    ];
    return {
        msg: "ok",
        data: recomList,
    };
}
export { getComments, getGoods, searchGoods, getHotList };
