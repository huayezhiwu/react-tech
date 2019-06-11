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
                <Text
                    className="title"
                    onClick={() =>
                        Taro.navigateTo({ url: `/pages/slide7/slide7` })
                    }
                >
                    {7}
                </Text>
            </View>
        );
    }
}
export default Answer;
