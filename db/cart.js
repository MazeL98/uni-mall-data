import fs from "fs";
// 获取所有商品的详情数据
const allGoodsDetail = fs.readFileSync("db/static/goods_detail.json");
const allGoodsData = JSON.parse(allGoodsDetail);

// 购物车列表数据
let cartList = [
    {
        checked: false,
        id: 87743898,
        title: "坚果N1 Ultra三色激光投影仪家用",
        cover: "https://qiniuyun.mazel98.com/uni-mall/JMGObanner1.jpg",
        pprice: 8999,
        num: 1,
        minnum: 1,
        maxnum: 15,
        skusText: "N1 Ultra+T形云台落地支架",
    },
    {
        checked: true,
        id: 63175243,
        title: "B&O Beoplay E8 3.0三代真无线蓝牙高音质入耳式bo音乐耳机",
        cover: "https://qiniuyun.mazel98.com/uni-mall/BObanner1.jpg",
        pprice: 1098,
        num: 1,
        minnum: 1,
        maxnum: 233,
        skusText: "褐红色",
    },
];

// 获取当前购物车列表
function getCartList(req) {
    const { token } = req.headers;
    if (token === "bQbZVwvNHCIAivKBP8Ph6XZzWCEaOWnaVXFtOGea") {
        return {
            msg: "ok",
            data: cartList,
        };
    } else {
        return {
            msg: "获取失败,token错误",
            data: [],
        };
    }
}

// 获取购物车中某商品的sku
function getSku(req) {
    const { token } = req.headers;
    const id = req.params.id;
    if (token === "bQbZVwvNHCIAivKBP8Ph6XZzWCEaOWnaVXFtOGea") {
        const skuItem = allGoodsData.find((item) => item.id === Number(id));
        if (skuItem) {
            return {
                msg: "ok",
                data: {
                    id: skuItem.id,
                    title: skuItem.title,
                    cover: skuItem.cover,
                    min_price: skuItem.min_price,
                    goodsSkus: skuItem.goodsSkus,
                    goodsSkusCard: skuItem.goodsSkusCard,
                },
            };
        } else {
            return {
                msg: "获取失败，没有找到该商品",
                data: {},
            };
        }
    } else {
        return {
            msg: "失败，token错误",
            data: {},
        };
    }
}

//修改商品的数量
function updateNum(req) {
    const { token } = req.headers;
    const { num } = req.body;
    const id = req.params.id;
    if (token === "bQbZVwvNHCIAivKBP8Ph6XZzWCEaOWnaVXFtOGea") {
        let curIdx = cartList.findIndex((item) => item.id === Number(id));
        if (curIdx !== -1) {
            cartList[curIdx].num = Number(num);
            return {
                msg: "ok",
                data: true,
            };
        } else {
            return {
                msg: "修改失败，没有找到该商品",
                data: false,
            };
        }
    } else {
        return {
            msg: "修改失败,token错误",
            data: false,
        };
    }
}

// 加入购物车列表
function addToCart(req) {
    const { id, num, sku_id } = req.body;
    console.log(id);
    const { token } = req.headers;
    if (token === "bQbZVwvNHCIAivKBP8Ph6XZzWCEaOWnaVXFtOGea") {
        // 是否能在商品列表中找到该商品
        let skuItem = allGoodsData.find((item) => item.id === Number(id));
        // 是否能在商品中找到该sku_id
        let sku = skuItem.goodsSkus.find((sku) => sku.id === Number(sku_id));
        if (skuItem) {
            if (sku) {
                // 是否能在当前购物车中找到同一id且sku相同的商品
                let curIdx = cartList.findIndex((item) => {
                    item.id == Number(id) && item.skusText == sku.skuText;
                });
                console.log(curIdx);
                if (curIdx !== -1) {
                    cartList[curIdx].num = Number(num);
                    return {
                        msg: "ok",
                        data: cartList[curIdx],
                    };
                } else {
                    const newItem = {
                        checked: true,
                        id: id,
                        title: skuItem.title,
                        cover: skuItem.cover,
                        pprice: sku.pprice,
                        num: num,
                        minnum: 1,
                        maxnum: sku.stock,
                        skusText: sku.skuText,
                    };
                    cartList.unshift(newItem);
                    return {
                        msg: "ok",
                        data: newItem,
                    };
                }
            } else {
                return {
                    msg: "添加失败，没有找到该商品型号",
                    data: false,
                };
            }
        } else {
            return {
                msg: "添加失败，没有找到该商品",
                data: false,
            };
        }
    } else {
        return {
            msg: "修改失败,token错误",
            data: false,
        };
    }
}

// 删除某个商品
function deleteItem(req) {
    let { selectedList } = req.body;
    selectedList = JSON.parse(selectedList);
    const { token } = req.headers;
    if (token === "bQbZVwvNHCIAivKBP8Ph6XZzWCEaOWnaVXFtOGea") {
        selectedList.forEach((item) => {
            let deletedIdx = cartList.findIndex(
                (i) => i.id === item.id && i.skusText === item.skusText
            );
            if (deletedIdx) {
                cartList.splice(deletedIdx, 1);
            }
        });
        return {
            msg: "ok",
            data: true,
        };
    } else {
        return {
            msg: "修改失败,token错误",
            data: false,
        };
    }
}
export { getCartList, getSku, updateNum, addToCart, deleteItem, cartList };
