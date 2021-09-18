function checktoken() {
    return async function(ctx, next) {
        try {
            const token = ctx.request.header.token;
            let decode = ctx.app.jwt.verify(token, ctx.app.config.jwt.secret);
            if (decode) {
                await next();
            } else {
                ctx.body = {
                    code: 40000,
                    msg: "旅行者用户验证失败"
                }
            }
        } catch (error) {
            ctx.body = {
                    code: 40000,
                    msg: "旅行者的token未通过验证"
                }
                // await next();
        }
    }
}
module.exports = checktoken;