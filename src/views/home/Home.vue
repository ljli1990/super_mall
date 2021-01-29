<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners" />
    <recommend-view :recommends="recommends" />
    <feature-view></feature-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import { getMultiHomeData } from "network/home";
import HomeSwiper from "./childComps/HomeSwiper.vue";
import RecommendView from "./childComps/RecommendView.vue";
import FeatureView from './childComps/FeatureView.vue';
export default {
  name: "Home",
  data() {
    return {
      recommends: [],
      banners: []
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView
  },
  created() {
    getMultiHomeData().then(res => {
      this.recommends = res.data.data.recommend.list;
      this.banners = res.data.data.banner.list;
    });
  }
};
</script>

<style scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
