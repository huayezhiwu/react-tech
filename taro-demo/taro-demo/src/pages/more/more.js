import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text } from '@tarojs/components';
import { connect } from '@tarojs/redux';

import { add, minus, asyncAdd } from '../../store/counter/action';

import './more.less';

@connect(({ counter }) => ({
    num: counter.num
}))
class More extends Component {
    config = {
        navigationBarTitleText: '我的'
    };

    componentWillUnmount() {}

    componentDidShow() {}

    componentDidHide() {}

    render() {
        console.log(this.props, 'counter??????????/');
        return (
            <View className="index">
                <View>
                    <Text>我的</Text>
                </View>

                <Button
                    className="add_btn"
                    onClick={() => this.props.dispatch(add())}
                >
                    +
                </Button>
                <Button
                    className="dec_btn"
                    onClick={() => this.props.dispatch(minus())}
                >
                    -
                </Button>
                <Button
                    className="dec_btn"
                    onClick={() => this.props.dispatch(asyncAdd())}
                >
                    async
                </Button>
                <View>
                    <Text>{this.props.num}</Text>
                </View>
            </View>
        );
    }
}

export default More;
