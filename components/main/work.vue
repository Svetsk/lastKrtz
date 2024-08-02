<script setup lang="ts">

</script>

<template>
  <div class="flex flex-col gap-[80px] items-center justify-center">
    <div class="flex gap-[93px] justify-center items-center flex-wrap pt-[42px]">
      <div class="card">
        <div>
          <nuxt-img src="/image/work/tokar.png" />
          <p>Токарные работы</p>
        </div>
      </div>
      <div class="card">
        <div>
          <nuxt-img src="/image/work/svar.png" />
          <p>Сварочные работы</p>
        </div>
      </div>
      <div class="card">
        <div>
          <nuxt-img src="/image/work/frez.png" />
          <p>Фрезерные работы</p>
        </div>
      </div>
      <div class="card">
        <div>
          <nuxt-img src="/image/work/sverl.png" />
          <p>Сверлильные работы</p>
        </div>
      </div>
      <div class="card">
        <div>
          <nuxt-img src="/image/work/press.png" />
          <p>Прессовые работы</p>
        </div>
      </div>
      <div class="card">
        <div>
          <nuxt-img src="/image/work/sles.png" />
          <p>Слесарные работы</p>
        </div>
      </div>
    </div>
    <div class="flex gap-[93px] flex-wrap pt-[42px]">
    </div>
  </div>
</template>

<style scoped lang="scss">
.card{
  background: #FFF;
  box-shadow: 0px 0px 24px 0px rgba(234, 127, 0, 0.80);
  & > div{
    display: flex;
    flex-direction: column;
    //justify-content: center;
    align-items: center;
    padding: 24px 24px;
    width: 320px;
    height: auto;
    & > p{
      font-size: 18px;
      font-weight: 700;
    }
    & img{
      height: 180px;
      width: auto;
    }
  }
}
//@media screen and (max-width: 1440px) {
//  .card{
//
//    & > div{
//
//      & > p{
//
//      }
//      & img{
//        width: auto !important;
//        height: 170px !important;
//      }
//    }
//  }
//}
</style>