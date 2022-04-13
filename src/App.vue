<!--
 * @Author: qin
 * @Date: 2022-04-06 23:51:46
 * @LastEditTime: 2022-04-13 13:08:45
 * @FilePath: \water-fall\src\App.vue
 *  -> The best way to explain it is to do it
-->
<template>
  <div class="wrapper">
    <water-fall
      :sourceList="imgUrl"
      :column="5"
      :gap="5"
      :wrapperWidth="1200"
    ></water-fall>
  </div>
</template>

<script>
import { defineComponent, reactive } from 'vue';

import getImgUrl from './assets/imgData';

export default defineComponent({
  name: 'App',
  setup(props) {
    let imgUrl = getImgUrl();
    // const listenBottomOut = () => {
    //   imgUrl = getImgUrl();
    // };
    return {
      imgUrl,
    };
  },
});
</script>

<style lang="scss" scoped></style>
