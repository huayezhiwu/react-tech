import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";

class Answer extends Component {
    config = {
        navigationBarTitleText: "详情"
    };

    componentWillUnmount() {}

    componentDidMount() {}

    componentDidHide() {}

    render() {
        return (
            <View className="answer">
                1
                <Text
                    className="title"
                    onClick={() =>
                        Taro.navigateTo({ url: `/pages/slide2/slide2` })
                    }
                >
                    {1}
                </Text>
            </View>
        );
    }
}
export default Answer;
