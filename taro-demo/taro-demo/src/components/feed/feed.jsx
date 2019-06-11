import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import more from '../../asset/images/more.png';

import './feed.less';

export default class Feed extends Component {
    navigateTo(url) {
        Taro.navigateTo({ url: url });
    }
    render() {
        const { item } = this.props;
        return (
            <View className="feed-item">
                <View className="feed-source">
                    <View className="avatar flex1">
                        <Image src={item.feed_source_img} />
                    </View>
                    <View className="flex8">
                        <Text className="feed-source-txt">
                            {item.feed_source_name}
                            {item.feed_source_txt}
                        </Text>
                    </View>
                    <View className="flex1">
                        <Image
                            className="item-more"
                            mode="aspectFit"
                            src={more}
                            onClick={() =>
                                this.props.onDisfavor(item.question_id)
                            }
                        />
                    </View>
                </View>
                <View className="feed-content">
                    <View
                        className="question"
                        onClick={() =>
                            this.navigateTo(
                                `/pages/answer/answer?qustion=${
                                    item.question
                                }&cnt=${item.answer_ctnt}`
                            )
                        }
                    >
                        <View className="question-link">
                            <Text>{item.question}</Text>
                        </View>
                    </View>
                    <View className="answer-body">
                        <View>
                            <Text
                                className="answer-txt"
                                onClick={() =>
                                    this.navigateTo(
                                        `/pages/answer/answer?qustion=${
                                            item.question
                                        }&cnt=${item.answer_ctnt}`
                                    )
                                }
                            >
                                {item.answer_ctnt}
                            </Text>
                        </View>
                        <View className="answer-actions">
                            <View className="like dot">
                                <View>{item.good_num} 赞同 </View>
                            </View>
                            <View className="comments dot">
                                <View>{item.comment_num} 评论 </View>
                            </View>
                            <View className="follow-it">
                                <View>关注问题</View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
