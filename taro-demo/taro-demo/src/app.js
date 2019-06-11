import "@tarojs/async-await";
import Taro, { Component } from "@tarojs/taro";
import { Provider } from "@tarojs/redux";

import Index from "./pages/index";

import configStore from "./store";

import "./app.less";

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore();

class App extends Component {
    config = {
        pages: [
            "pages/index/index",
            "pages/more/more",
            "pages/slide1/slide1",
            "pages/slide2/slide2",
            "pages/slide3/slide3",
            "pages/slide4/slide4",
            "pages/slide5/slide5",
            "pages/slide6/slide6",
            "pages/slide7/slide7",
            "pages/answer/answer"
        ],
        window: {
            backgroundTextStyle: "light",
            navigationBarBackgroundColor: "#0068C4",
            navigationBarTitleText: "demo",
            navigationBarTextStyle: "white",
            enablePullDownRefresh: true
        },
        tabBar: {
            custom: true,
            color: "#626567",
            selectedColor: "#2A8CE5",
            backgroundColor: "#FBFBFB",
            borderStyle: "white",
            list: [
                {
                    pagePath: "pages/index/index",
                    text: "列表",
                    iconPath: "./asset/images/index.png",
                    selectedIconPath: "./asset/images/index_focus.png"
                },

                {
                    pagePath: "pages/more/more",
                    text: "我的",
                    iconPath: "./asset/images/burger.png",
                    selectedIconPath: "./asset/images/burger_focus.png"
                }
            ]
        }
    };

    componentDidMount() {}

    componentDidShow() {}

    componentDidHide() {}

    componentDidCatchError() {}

    // 在 App 类中的 render() 函数没有实际作用
    // 请勿修改此函数
    render() {
        return (
            <Provider store={store}>
                <Index />
            </Provider>
        );
    }
}

Taro.render(<App />, document.getElementById("app"));
