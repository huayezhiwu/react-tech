import Taro from "@tarojs/taro";

export default {
    baseOptions(params, method = "GET") {
        const { url, data } = params;
        const option = {
            url,
            data,
            method,
            header: {}
        };
        if (method !== "POST") {
            let contentType = params.contentType || "application/json";
            option.header["content-type"] = contentType;
        }

        return Taro.request(option)
            .then(async res => {
                if (!res.data.success) {
                    return Promise.reject(res.data);
                }
                return res.data;
            })
            .catch(err => {
                const msg = (err && err.errorMsg) || "请求异常";
                Taro.showToast({
                    title: msg,
                    icon: "none"
                });
                return Promise.reject({ message: msg });
            });
    },
    get(url, data = {}) {
        let option = { url, data };
        return this.baseOptions(option);
    },
    post(url, data = {}) {
        return this.baseOptions(
            {
                url,
                data
            },
            "POST"
        );
    }
};
