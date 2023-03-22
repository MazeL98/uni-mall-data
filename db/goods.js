import fs from "fs";
// 获取所有商品的详情数据
const allGoodsDetail = fs.readFileSync("db/static/goods_detail.json");
const allGoodsData = JSON.parse(allGoodsDetail);
// 获取所有商品的评论详情数据
const allComments = fs.readFileSync("db/static/goods_comments_detail.json");
const allCommentsData = JSON.parse(allComments);

/**
 *  getGoods(id)   获取指定id商品详情
 *  getComments(id, page)  获取指定id的评论数据
 */

function getGoods(id) {
    const res = allGoodsData.find((item) => item.id == id);
    return {
        msg: "ok",
        data: res,
    };
}

function getComments(id, page) {
    const comments = allCommentsData.find((item) => item.id == id);
    if (comments) {
        return {
            msg: "ok",
            data: {
                list: comments.list,
            },
        };
    } else {
        return {
            msg: "ok",
            data: {},
        };
    }
}

export { getComments, getGoods };
