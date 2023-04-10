/**
 *  getAddress()  获取用户当前已有的地址
 *  addAddress()  新增地址
 *  editAddress()  修改收货地址
 *  deleteAddress() 删除收货地址
 */
let addressList = [
    {
        id: 2,
        user_id: 1,
        province: "广东省",
        city: "深圳市",
        district: "福田区",
        address: "园岭街道南园路内马路小区",
        zip: 0,
        name: "季先生",
        phone: "13268816818",
        isdefault: 0,
    },
    {
        id: 1,
        user_id: 1,
        province: "广东省",
        city: "广州市",
        district: "番禺区",
        address: "市桥鸿城大街一巷4号育才弄小区",
        zip: 0,
        name: "孙小姐",
        phone: "13193749896",
        isdefault: 1,
    },
];

function getAddress(req) {
    const { token } = req.headers;
    if (token === "bQbZVwvNHCIAivKBP8Ph6XZzWCEaOWnaVXFtOGea") {
        return {
            msg: "ok",
            data: addressList,
        };
    } else {
        return {
            msg: "ok",
            data: [],
        };
    }
}

function addAddress(req) {
    const { token } = req.headers;
    if (token === "bQbZVwvNHCIAivKBP8Ph6XZzWCEaOWnaVXFtOGea") {
        const {
            province,
            city,
            district,
            address,
            zip,
            name,
            phone,
            isdefault,
        } = req.body;
        let newAddress = {
            province: province,
            city: city,
            district: district,
            address: address,
            zip: zip,
            name: name,
            phone: phone,
            isdefault: Number(isdefault),
            id: addressList.length + 1,
        };
        addressList.unshift(newAddress);
        return {
            msg: "创建成功",
            data: newAddress,
        };
    } else {
        return {
            msg: "创建失败",
            data: false,
        };
    }
}

function editAddress(req) {
    const { token } = req.headers;
    const id = req.params.id;
    if (token === "bQbZVwvNHCIAivKBP8Ph6XZzWCEaOWnaVXFtOGea") {
        const {
            province,
            city,
            district,
            address,
            zip,
            name,
            phone,
            isdefault,
        } = req.body;
        let oldIdx = addressList.findIndex((item) => item.id === Number(id));
        if (oldIdx !== -1) {
            addressList[oldIdx] = {
                province,
                city,
                district,
                address,
                zip,
                name,
                phone,
                isdefault: Number(isdefault),
                ...addressList[oldIdx],
            };

            return {
                msg: "修改成功",
                data: true,
            };
        } else {
            return {
                msg: "修改失败，没有找到该地址",
                data: false,
            };
        }
    } else {
        return {
            msg: "修改失败",
            data: false,
        };
    }
}

function deleteAddress(req) {
    const id = req.params.id;
    const { token } = req.headers;
    if (token === "bQbZVwvNHCIAivKBP8Ph6XZzWCEaOWnaVXFtOGea") {
        const idx = addressList.findIndex((item) => item.id === Number(id));
        if (idx) {
            addressList.splice(idx, 1);
            return {
                msg: "ok",
                data: true,
            };
        } else {
            return {
                msg: "失败，没有找到该地址",
                data: false,
            };
        }
    } else {
        return {
            msg: "非法token，请登录后重试",
            data: false,
        };
    }
}

export { getAddress, addAddress, editAddress, deleteAddress, addressList };
