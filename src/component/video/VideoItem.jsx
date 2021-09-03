import Item from './Item'
import './VideoItem.scss'

const VideoItem = (props) => {
    return (
        <section className="videoItem">
            <Item
                itemOdd={false}
                img = "./access/img/v1.jpg"
                what="What is the videonly"
                title="비디온리는 무엇인가요?"
                desc="세상에는 수많은 회사들이 존재합니다. 비디온리에서는 그 중에서도 오직 단 하나의 영상 템플릿을 만듭니다. 우리는 "
            />

            <Item
                itemOdd={true}
                img = "./access/img/v2.jpg"
                what="How do I make a video"
                title="영상제작은 어떻게하나요?"
                desc="오직 단 하나의 영상 템플릿을 만들기 때문에 절차가 어려울 것이라고 생각합니다. 하지만 우리는 특정 회사에서 원하"
            />

        </section>
    )
}

export default VideoItem;