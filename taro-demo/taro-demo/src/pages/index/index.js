import Taro, { Component } from "@tarojs/taro";
import {
    View,
    ScrollView,
    Swiper,
    SwiperItem,
    Text,
    Image
} from "@tarojs/components";

import { connect } from "@tarojs/redux";
import Feed from "../../components/feed/feed.jsx";

import {
    getList,
    disfavorQuestionById,
    toggeTab
} from "../../store/home/action";

import img1 from "../../asset/images/24213.jpg";
import img2 from "../../asset/images/24280.jpg";
import img3 from "../../asset/images/1444983318907-_DSC1826.jpg";

import "./index.less";

@connect(({ home }) => ({
    tabIndex: home.tabIndex,
    list: home.list
}))
class Index extends Component {
    config = {
        navigationBarTitleText: "列表"
    };

    state = {
        loading: false,
        imgs: [img1, img2, img3],
        navTab: ["推荐", "圆桌", "热门", "收藏"]
    };

    // componentWillReceiveProps(nextProps) {
    //     console.log(this.props, nextProps);
    // }

    componentWillUnmount() {}

    componentDidMount() {
        this.getDemoList();
    }

    // onReachBottom() {
    //   this.getDemoList();
    // }

    getDemoList() {
        // Taro.request({
        //     url:
        //         "https://easy-mock.com/mock/5b21d97f6b88957fa8a502f2/example/feed"
        // }).then(res => {
        //     console.log("getlist", res);
        // });
        this.props.dispatch(getList());
    }

    componentDidHide() {}

    // onCloseNoticebar() {
    //     this.setState({ isShowNoticebar: false });
    // }

    onLongPress = id => {
        Taro.showActionSheet({
            itemList: ["不感兴趣"]
        })
            .then(() => {
                console.log(this.props, "dispathc");
                this.props.dispatch(disfavorQuestionById(id));
                // Taro.atMessage({ message: '我们会减少此问题的出现频率' });
            })
            .catch(e => {
                console.log("取消点击", e);
            });
    };

    render() {
        const { loading, navTab, imgs } = this.state;
        const { list, tabIndex, dispatch } = this.props;

        return (
            <View className="index">
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
                            {/* { process.env.TARO_ENV !== 'h5'} */}
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
                            <ScrollView
                                className="container"
                                scrollY
                                scrollWithAnimation
                                scrollTop="0"
                                lowerThreshold="10"
                                upperThreshold="10"
                                onScrolltoupper={this.getList}
                                onScrolltolower={this.getList}
                            >
                                {loading ? (
                                    <View className="txcenter">加载中</View>
                                ) : (
                                    list.map((item, index) => {
                                        return (
                                            <Feed
                                                key={item.question_id}
                                                item={item}
                                                onDisfavor={this.onLongPress}
                                            />
                                        );
                                    })
                                )}
                            </ScrollView>
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
            </View>
        );
    }
}

export default Index;
