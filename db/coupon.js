let couponList = [
    {
        id: 1,
        name: "爆品专属券",
        type: 0,
        value: 15,
        total: 15,
        used: 0,
        min_price: "99.00",
        start_time: 1680192000,
        end_time: 1682784000,
        status: 1,
        order: 50,
        desc: "限品类：仅可用于购买部分品牌部分商品",
        coupon_user: [],
    },
    {
        id: 2,
        name: "家电秒杀",
        type: 0,
        value: 199,
        total: 100,
        used: 0,
        min_price: "1000.00",
        start_time: 1680192000,
        end_time: 1682784000,
        status: 1,
        order: 50,
        desc: "仅可用于家电品牌部分商品",
        coupon_user: [
            {
                id: 1,
                coupon_id: 2,
                user_id: 1,
                used: 1,
            },
        ],
    },
];

let userCoupon = [
    {
        id: 1,
        coupon_id: 2,
        user_id: 1,
        used: 0,
        coupon: {
            id: 2,
            name: "家电秒杀",
            type: 0,
            value: 199,
            total: 100,
            used: 0,
            min_price: "1000.00",
            start_time: 1680192000,
            end_time: 1682784000,
            status: 1,
            order: 50,
            desc: "仅可用于家电品牌部分商品",
        },
    },
];

// 获取优惠券列表
function getCouponList(req) {
    const { token } = req.headers;
    if (token === "bQbZVwvNHCIAivKBP8Ph6XZzWCEaOWnaVXFtOGea") {
        return {
            msg: "ok",
            data: couponList,
        };
    } else {
        return {
            msg: "获取失败,token错误",
            data: [],
        };
    }
}
// 已领优惠券列表
function getUserCoupon(req) {
    const { token } = req.headers;
    const isValid = req.params.isvalid;
    if (token === "bQbZVwvNHCIAivKBP8Ph6XZzWCEaOWnaVXFtOGea") {
        if (isValid === "valid") {
            let validList = userCoupon.filter((item) => item.used === 0);
            return {
                msg: "ok",
                data: validList,
            };
        } else if (isValid === "invalid") {
            let invalidList = userCoupon.filter((item) => item.used === 1);
            return {
                msg: "ok",
                data: invalidList,
            };
        } else {
            return {
                msg: "获取失败，参数错误",
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

// 可用优惠券数量
function getUserCouponCount(req) {
    const { token } = req.headers;
    const { totalPrice } = req.body;
    if (token === "bQbZVwvNHCIAivKBP8Ph6XZzWCEaOWnaVXFtOGea") {
        let validCoupon = userCoupon.filter(
            (item) =>
                item.used === 0 &&
                Number(totalPrice) >= Number(item.coupon.min_price)
        );
        return {
            msg: "ok",
            data: {
                count: validCoupon.length,
                list: validCoupon,
            },
        };
    } else {
        return {
            msg: "获取失败,token错误",
            data: false,
        };
    }
}

// 领取优惠券
function addCoupon(req) {
    const { token } = req.headers;
    const id = req.params.id;
    if (token === "bQbZVwvNHCIAivKBP8Ph6XZzWCEaOWnaVXFtOGea") {
        if (id) {
            let coupon = couponList.find((item) => item.id === Number(id));
            if (coupon) {
                // 如果已经在用户优惠券列表中，返回msg
                let hasadd = userCoupon.findIndex(
                    (item) => item.coupon_id === Number(id)
                );
                if (hasadd === -1) {
                    userCoupon.unshift({
                        id: userCoupon.length + 1,
                        coupon_id: coupon.id,
                        user_id: 1,
                        used: 0,
                        coupon: {
                            id: Number(coupon.id),
                            name: coupon.name,
                            type: 0,
                            value: coupon.value,
                            total: coupon.total,
                            used: Number(coupon.used),
                            min_price: coupon.min_price,
                            start_time: coupon.start_time,
                            end_time: coupon.end_time,
                            status: Number(coupon.status),
                            order: 50,
                            desc: coupon.desc,
                        },
                    });
                    return {
                        msg: "ok",
                        data: true,
                    };
                } else {
                    return {
                        msg: "请勿重复领取",
                        data: false,
                    };
                }
            } else {
                return {
                    msg: "领取失败，未找到该优惠券",
                    data: false,
                };
            }
        } else {
            return {
                msg: "获取失败,参数错误",
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

// 使用优惠券
function useCoupon(req) {
    const { token } = req.headers;
    const id = req.params.id;
    if (token === "bQbZVwvNHCIAivKBP8Ph6XZzWCEaOWnaVXFtOGea") {
        if (id) {
            let usedCoupon = userCoupon.findIndex(
                (item) => item.id === Number(id) && item.used == 0
            );
            if (usedCoupon !== -1) {
                userCoupon[usedCoupon].used = 1;
                userCoupon[usedCoupon].coupon.used = 1;
                return {
                    msg: "ok",
                    data: true,
                };
            } else {
                return {
                    msg: "失败，没有找到该优惠券",
                    data: false,
                };
            }
        } else {
            return {
                msg: "获取失败,参数错误",
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
export {
    getCouponList,
    addCoupon,
    getUserCoupon,
    getUserCouponCount,
    useCoupon,
    userCoupon,
};
