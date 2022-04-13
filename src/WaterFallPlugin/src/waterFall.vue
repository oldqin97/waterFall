<template>
  <div
    class="v-waterfall-content"
    ref="contentRef"
    :style="{ width: `${wrapperWidth}px` }"
  >
    <div
      class="v-waterfall-item"
      v-for="item in waterfallList"
      :key="item.src"
      :style="{
        width: `${itemWidth}px`,
        height: `${item.height}px`,
        top: `${item.top}px`,
        left: `${item.left}px`,
      }"
    >
      <img :src="item.src" />
    </div>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue';

import { getMinIndex } from './utils/tools';
export default defineComponent({
  name: 'waterFall',
  props: {
    sourceList: {
      type: Array,
    },
    column: {
      type: Number,
      default: 5,
    },
    gap: {
      type: Number,
      default: 5,
    },
    wrapperWidth: {
      type: Number,
      default: 1200,
    },
  },
  setup(props) {
    const contentRef = ref();
    const waterfallList = ref([]);
    const heightArr = [];
    const itemWidth = ref(0);

    onMounted(() => {
      let domWidth = contentRef.value.offsetWidth;
      itemWidth.value =
        (domWidth - (props.column - 1) * props.gap) / props.column;

      for (let i = 0; i < props.sourceList.length; i++) {
        let IMG = new Image();
        let imgData = {};
        let minIndex_;
        let minHeightLeft;

        IMG.src = props.sourceList[i];
        IMG.onload = e => {
          imgData.src = props.sourceList[i];

          // 图片等比例缩放 叉乘 eg 1800 * 232 = 1600 * x
          // 1800 * 232 / 1600  = 261
          imgData.height = (IMG.height * itemWidth.value) / IMG.width;

          minIndex_ = getMinIndex(heightArr);

          minHeightLeft =
            minIndex_ === 0
              ? 0
              : minIndex_ * (itemWidth.value + props.gap);

          if (i < props.column) {
            let itemLeft =
              (i + 1) % props.column === 1
                ? 0
                : i * (itemWidth.value + props.gap);
            imgData.top = 0;
            imgData.left = itemLeft;
            heightArr.push(imgData.height);
          } else {
            let minIndex = getMinIndex(heightArr);
            imgData.top = heightArr[minIndex] + props.gap;
            imgData.left = minHeightLeft;
            heightArr[minIndex] += imgData.height + props.gap;
          }

          waterfallList.value.push(imgData);
        };
      }
    });

    return {
      contentRef,
      waterfallList,
      itemWidth,
    };
  },
});
</script>

<style lang="scss" scoped>
.v-waterfall-content {
  position: relative;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  .v-waterfall-item {
    position: absolute;
    background-color: #ededed;
    box-shadow: 1px 2px 3px #ccc;
    overflow: hidden;
    transition: box-shadow 0.2s;
    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
}
</style>
