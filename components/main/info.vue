<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation],
    };
  },
};
</script>

<template>
  <div class="containera">
    <div>
      <ui-elements-title title="О заводе" />
      <p class="info__text">Основная специализация ООО «КРТЗ» – ремонт спецтехники и ее узлов, используемой в агропромышленной и производственной сфере. Наше предприятие обладает необходимыми ресурсами и оборудованием для полного восстановления и обновления сельскохозяйственных машин и промышленного оборудования различного назначения. Мы предлагаем своим клиентам широкий спектр услуг, начиная от поиска и определения неисправностей до проведения ремонтно-восстановительных работ.</p>
    </div>
    <div class="relative">
      <swiper
          :navigation="true"
          :modules="modules"
          class="mySwiper">
        <swiper-slide><nuxt-img src="/image/slider/slideOne.png" class="imgg" /></swiper-slide>
        <swiper-slide><nuxt-img src="/image/slider/slideTwo.png" class="imgg" /></swiper-slide>
        <swiper-slide><nuxt-img src="/image/slider/slideThree.png" class="imgg" /></swiper-slide>
        <swiper-slide><nuxt-img src="/image/slider/slideFore.png" class="imgg" /></swiper-slide>
        <swiper-slide><nuxt-img src="/image/slider/slideFive.png" class="imgg" /></swiper-slide>
        <swiper-slide><nuxt-img src="/image/slider/slideSix.png" class="imgg" /></swiper-slide>
        <swiper-slide><nuxt-img src="/image/slider/slideSeven.png" class="imgg" /></swiper-slide>
      </swiper>
      <div class="flex w-full justify-end">
        <ui-elements-button class="absolute bottom-0 z-[100] qwe" />
      </div>
    </div>
    <div class="work">
      <main-work />
    </div>
  </div>
</template>

<style scoped lang="scss">
.info__text{
  font-size: 16px;
  font-weight: 300;
  line-height: 25px; /* 156.25% */
  padding-top: 32px;
  padding-bottom: 28px;
}
.imgg{}
//.mySwiper{
//  width: 100%;
//  //height: 200px;
//  & img{
//    width: 100%;
//  }
//  & .swiper-button-next{
//    color: #FFB601 !important;
//  }
//}
@media screen and (max-width: 700px) {
  .qwe{
    position: relative;
    width: 100%;
  }
  .mySwiper{
    height: 150px;
  }
}
</style>