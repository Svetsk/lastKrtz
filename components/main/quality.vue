<script setup lang="ts">

</script>

<template>
  <div class="pt-[200px]">
    <div class="container qq">
      <ui-elements-title title="Качество и производство" />
      <p class="text-[24px] pt-[20px] pb-[64px] subtitle">Мы придерживаемся высоких стандартов качества во всех аспектах нашей деятельности. Наше производство оснащено современным оборудованием, а наши сотрудники постоянно повышают свою квалификацию, чтобы удовлетворить потребности наших клиентов и соответствовать требованиям быстро развивающихся отраслей промышленности и сельского хозяйства.</p>
      <div class="flex justify-between flex-wrap items-center gap-y-[52px] pb-[54px] vv">
        <div class="flex items-center justify-center item">
          <div class="flex items-start gap-[28px] wqw">
            <nuxt-img src="/image/ok.svg" class="w-[20px] h-[20px]" />
            <p class="-translate-y-[8px] text-white text-[24px] font-[700]">
              Специализированный ремонт и модернизация спецтехники для агропромышленности и производства
            </p>
          </div>
        </div>
        <div class="flex items-center justify-center item">
          <div class="flex items-start gap-[28px] wqw">
            <nuxt-img src="/image/ok.svg" class="w-[20px] h-[20px]" />
            <p class="-translate-y-[8px] text-white text-[24px] font-[700]">
              Доверенные партнеры: крупные аграрные компании и фермерские хозяйства
            </p>
          </div>
        </div>
        <div class="flex items-center justify-center item">
          <div class="flex items-start gap-[28px] wqw">
            <nuxt-img src="/image/ok.svg" class="w-[20px] h-[20px]" />
            <p class="-translate-y-[8px] text-white text-[24px] font-[700]">
              Высокие стандарты качества и инвестиции в производство
            </p>
          </div>
        </div>
        <div class="flex items-center justify-center item">
          <div class="flex items-start gap-[28px] wqw">
            <nuxt-img src="/image/ok.svg" class="w-[20px] h-[20px]" />
            <p class="-translate-y-[8px] text-white text-[24px] font-[700]">
              Профессиональный подход к каждому проекту
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.qq{
  background: url("/image/qual.png") no-repeat 130%;
  background-position: bottom;
}
.item{
  border-radius: 20px;
  background: linear-gradient(180deg, #EA7F00 0%, #E69B01 100%);
  width: 750px;
  height: 200px;
  & p{
    max-width: 560px;
  }
}
@media screen and (max-width: 1440px) {
  .item{
    width: 640px;
    .img{
      width: 20px !important;
      height: 20px !important;
    }
  }
}
@media screen and (max-width: 1300px) {
  .item{
    width: 600px;
  }
  .wqw{
    gap: 4px;
  }
}
@media screen and (max-width: 1200px) {
  .item{
    width: 540px;
  }
  .wqw{
    gap: 4px;
    & p{
      font-size: 16px !important;
    }
  }
}
@media screen and (max-width: 1140px) {
  .item{
    & img{
      width: 20px !important;
      height: 20px !important;
    }
  }
}
@media screen and (max-width: 1100px) {
  .vv{
    justify-content: center;
    align-items: center;
  }
  .wqw{
    padding-left: 12px;
    padding-right: 12px;
  }
}
@media screen and (max-width: 720px){
  .subtitle{
    font-size: 16px;
  }
}
</style>