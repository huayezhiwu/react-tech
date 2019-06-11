import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

import "./answer.less";

class Answer extends Component {
    config = {
        navigationBarTitleText: "详情"
    };

    componentWillUnmount() {}

    componentDidMount() {}

    componentDidHide() {}

    render() {
        const { qustion, cnt } = this.$router.params;
        return (
            <View className="answer">
                <Text
                    className="title"
                    onClick={() =>
                        Taro.navigateTo({ url: `/pages/slide1/slide1` })
                    }
                >
                    {qustion}
                </Text>
                <Text className="cnt">{cnt}</Text>
            </View>
        );
    }
}
export default Answer;
