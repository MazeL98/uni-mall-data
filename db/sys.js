function login(req) {
    const { username, password } = req.body;
    if (!username || !password) {
        return {
            msg: "用户名或密码不能为空",
            data: null,
        };
    }
    if (username === "user01" && password === "9999") {
        return {
            msg: "ok",
            data: {
                id: 1,
                username: "user01",
                avatar: "https://qiniuyun.mazel98.com/uni-mall/user01-avatar.png",
                nickname: "测试用户",
                phone: "13268816818",
                email: "1818518@mazel.com",
                user_level_id: 0,
                last_login_time: null,
                status: 1,
                user_level: 0,
                token: "bQbZVwvNHCIAivKBP8Ph6XZzWCEaOWnaVXFtOGea",
            },
        };
    }
    return {
        msg: "用户名或密码错误",
        data: null,
    };
}

export { login };
