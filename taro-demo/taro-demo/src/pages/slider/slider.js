import { Component } from "@tarojs/taro";
import {
    View,
    Text,
    ScrollView,
    Swiper,
    SwiperItem,
    Image
} from "@tarojs/components";
import "./slider.less";
import img1 from "../../asset/images/24213.jpg";
import img2 from "../../asset/images/24280.jpg";
import img3 from "../../asset/images/1444983318907-_DSC1826.jpg";
import { toggeTab } from "../../store/home/action";
import { connect } from "@tarojs/redux";

@connect(({ home }) => ({
    tabIndex: home.tabIndex
}))
class SliderPage extends Component {
    config = {
        navigationBarTitleText: "轮播"
    };

    state = {
        imgs: [img1, img2, img3],
        // currentInex: 0,
        navTab: ["推荐", "圆桌", "热门", "收藏"]
    };

    componentWillUnmount() {}

    componentDidShow() {}

    componentDidHide() {}

    render() {
        const { navTab, imgs } = this.state;
        const { tabIndex, dispatch } = this.props;
        return (
            <View className="slider">
                <View className="tab-box">
                    {navTab.map((nav, i) => (
                        <View
                            key={nav}
                            className={`tab-item ${
                                tabIndex === i ? "active" : ""
                            }`}
                            onClick={() => {
                                if (i !== tabIndex) {
                                    dispatch(toggeTab(i));
                                }
                            }}
                        >
                            {nav}
                        </View>
                    ))}
                </View>

                <ScrollView>
                    <View
                        className="txcenter"
                        hidden={tabIndex == 0 ? false : true}
                    >
                        <Swiper
                            className="slider-box"
                            indicatorDots="true"
                            autoplay="true"
                            interval="5000"
                            duration="500"
                        >
                            {imgs.map((img, i) => {
                                return (
                                    <SwiperItem key={i}>
                                        <Image
                                            src={img}
                                            className="slider-img"
                                            width="355"
                                            height="375"
                                        />
                                    </SwiperItem>
                                );
                            })}
                        </Swiper>
                    </View>
                    <View
                        className="txcenter"
                        hidden={tabIndex == 1 ? false : true}
                    >
                        <Text>圆桌</Text>
                    </View>
                    <View
                        className="txcenter"
                        hidden={tabIndex == 2 ? false : true}
                    >
                        <Text>热门</Text>
                    </View>
                    <View
                        className="txcenter"
                        hidden={tabIndex == 3 ? false : true}
                    >
                        <Text>收藏</Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default SliderPage;
