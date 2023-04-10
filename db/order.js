import fs from "fs";
import { addressList } from "./addresss.js";
import { userCoupon } from "./coupon.js";
import { cartList } from "./cart.js";
// 获取所有商品的详情数据
let allGoodsDetail = fs.readFileSync("db/static/goods_detail.json");
let allGoodsData = JSON.parse(allGoodsDetail);

/**
 *  refund_status 值
 *  pending  未退款
 *  applied 已申请
 * processing 申请中
 *  success  成功退款
 *  failed  退款失败
 */
/**
 *   ship_status 物流状态
 *   pending 未发货
 *   delivered  已发货
 *   received   已签收
 */

let orderList = [];

// 购物车下单生成订单
function makeOrder(req) {
    // 获取地址id，商品id列表，优惠券id（可选）
    // goodsIdList 属性应该包括 商品ID, skusText,num
    const { token } = req.headers;
    let { address_id, goodsIdList, couponId, final_price } = req.body;
    goodsIdList = JSON.parse(goodsIdList);

    if (token === "bQbZVwvNHCIAivKBP8Ph6XZzWCEaOWnaVXFtOGea") {
        let address = addressList.find(
            (item) => item.id === Number(address_id)
        );
        // 拿到订单中每个商品的详情数据
        // goodsIdList = JSON.parse(goodsIdList);

        let goodsItems = goodsIdList.map((item, index) => {
            let goodsDetail = allGoodsData.find(
                (detail) => detail.id === Number(item.id)
            );

            //  在购物车列表中删除这些形成订单的商品

            let deletedIdx = cartList.findIndex(
                (i) => i.id === item.id && i.skusText === item.skusText
            );
            if (deletedIdx !== -1) {
                cartList.splice(deletedIdx, 1);
                console.log("在购物车中删除成功");
            } else {
                console.log("没在购物车中找到要删除的商品");
            }
            if (goodsDetail) {
                let skuIdx = goodsDetail.goodsSkus.findIndex(
                    (sku) => sku.skuText === item.skusText
                );
                return {
                    id: index + 1,
                    order_id: orderList.length + 1,
                    shop_id: goodsDetail.goodsSkus[skuIdx].id,
                    num: item.num,
                    price: goodsDetail.goodsSkus[skuIdx].pprice,
                    goods_id: goodsDetail.id,
                    user_id: 1,
                    extra: {},
                    goodsItem: {
                        ...goodsDetail,
                        goodsSkus: {},
                        goodsSkusCard: {},
                        goodsAttrs: {},
                        goodsBanner: {},
                        hotList: {},
                        hotComments: {},
                    },
                    goodsSkus: goodsDetail.goodsSkus[skuIdx],
                };
            } else {
                return {};
            }
        });

        // 组织订单详情各个属性
        let orderItem = {
            id: orderList.length + 1,
            no:
                Math.floor(
                    Math.random() * (888888888888888 - 222222222222222)
                ) + 222222222222222,
            user_id: 1,
            address: address ? address : {},
            total_price: final_price,
            paid_time: null,
            payment_method: null,
            payment_no: null,
            refund_status: "pending",
            refund_no: null,
            closed: 0,
            ship_status: "pending",
            ship_data: null,
            extra: {},
            create_time: Date.now(),
            reviewed: 0,
            coupon_user_id: 1,
            orderItems: goodsItems,
            couponUserItem: couponId
                ? userCoupon.find((i) => i.id === Number(couponId))
                : null,
        };
        // 添加到订单列表中
        orderList.unshift(orderItem);

        // 最终返回给用户部分数据
        let resData = {
            address: orderItem.address,
            remark: "",
            total_price: orderItem.total_price,
            user_id: 1,
            coupon_user_id: 1,
            no: orderItem.no, // 订单流水号
            id: orderItem.id, // 订单id
        };
        return {
            msg: "ok",
            data: resData,
        };
    } else {
        return {
            msg: "获取失败,token错误",
            data: false,
        };
    }
}

// 支付
function payForOrder(req) {
    const { token } = req.headers;
    let id = req.params.id;
    let type = req.params.type;
    if (token === "bQbZVwvNHCIAivKBP8Ph6XZzWCEaOWnaVXFtOGea") {
        let orderIdx = orderList.findIndex((item) => item.id === Number(id));
        if (orderIdx !== -1) {
            orderList[orderIdx].payment_method = type;
            orderList[orderIdx].payment_no =
                Math.floor(
                    Math.random() * (888888888888888 - 222222222222222)
                ) + 222222222222222;
            orderList[orderIdx].paid_time = Date.now();
            return {
                msg: "ok",
                data: orderList[orderIdx],
            };
        } else {
            return {
                msg: "获取失败,token错误",
                data: false,
            };
        }
    } else {
        return {
            msg: "获取失败,token错误",
            data: false,
        };
    }
}

// 获取订单详情
function getOrderDetail(req) {
    const { token } = req.headers;
    const order_id = req.params.id;
    if (token === "bQbZVwvNHCIAivKBP8Ph6XZzWCEaOWnaVXFtOGea") {
        const detail = orderList.find((item) => item.id === Number(order_id));
        if (!detail) {
            return {
                msg: "获取失败，找不到该订单",
                data: false,
            };
        } else {
            return {
                msg: "ok",
                data: detail,
            };
        }
    } else {
        return {
            msg: "获取失败,token错误",
            data: false,
        };
    }
}

function getOrderList(req) {
    const type = req.params.type;
    const { token } = req.headers;
    let list = [];
    if (token === "bQbZVwvNHCIAivKBP8Ph6XZzWCEaOWnaVXFtOGea") {
        switch (type) {
            case "paying":
                list = orderList.filter((item) => item.paid_time === null);
                break;
            case "receiving":
                list = orderList.filter(
                    (item) =>
                        item.ship_status === "delivered" &&
                        item.paid_time !== null
                );
                break;
            case "reviewing":
                console.log("待评价");
                list = orderList.filter(
                    (item) =>
                        item.ship_status === "received" && item.reviewed === 0
                );
                break;
            case "all":
                list = [...orderList];
                break;
            case "pending":
                list = orderList.filter(
                    (item) => item.ship_status === "pending"
                );
                break;
            default:
                list = [];
        }
        return {
            msg: "ok",
            data: list,
        };
    } else {
        return {
            msg: "修改失败,token错误",
            data: false,
        };
    }
}

// 取消订单
function deleteOrder(req) {
    const { token } = req.headers;
    const id = req.params.id;
    if (token === "bQbZVwvNHCIAivKBP8Ph6XZzWCEaOWnaVXFtOGea") {
        let orderIdx = orderList.findIndex((item) => item.id === Number(id));
        console.log("orderIdx是" + orderIdx);
        if (orderIdx !== -1) {
            orderList.splice(orderIdx, 1);
            return {
                msg: "ok",
                data: true,
            };
        } else {
            return {
                msg: "没有找到该订单",
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
// 申请退款
function refundGoods(req) {
    const { token } = req.headers;
    const id = req.params.id;
    const { reason } = req.body;
    if (token === "bQbZVwvNHCIAivKBP8Ph6XZzWCEaOWnaVXFtOGea") {
        let orderIdx = orderList.findIndex((item) => item.id === Number(id));
        if (orderIdx !== -1) {
            orderList[orderIdx].refund_status = "applied";
            orderList[orderIdx].extra.refund_reason = reason;
            return {
                msg: "ok",
                data: orderList[orderIdx],
            };
        } else {
            return {
                msg: "没有找到要退款的订单",
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
export {
    makeOrder,
    payForOrder,
    getOrderDetail,
    getOrderList,
    deleteOrder,
    refundGoods,
};
