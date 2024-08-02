<script setup lang="ts">

</script>

<template>
  <div class="max-ww">
    <div class="container">
      <div class="ban">
        <div>
          <h1>Надежный партнер<br>для сельского хозяйства и промышленного<br>производства</h1>
          <p class="sub">одно из ведущих предприятий<br>в сфере производства и ремонта комплектующих<br>для сельскохозяйственной, строительной и коммунальной техники</p>
        </div>
        <div class="right">
          <nuxt-img src="/image/bannerlogo.png" class="logo" />
          <p>лучшие в курске</p>
        </div>
      </div>
      <div class="bottom__line">
        <div class="block">
          <ui-elements-button class="inline-block" />
        </div>
        <div class="regalii__block">
          <div class="regalii">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="52" viewBox="0 0 19 52" fill="none">
              <line x1="1" y1="4.37112e-08" x2="0.999998" y2="44" stroke="white" stroke-width="2"/>
              <path d="M18.4943 44.7071C18.8849 44.3166 18.8849 43.6834 18.4943 43.2929L12.1304 36.9289C11.7399 36.5384 11.1067 36.5384 10.7162 36.9289C10.3256 37.3195 10.3256 37.9526 10.7162 38.3431L16.373 44L10.7162 49.6569C10.3256 50.0474 10.3256 50.6805 10.7162 51.0711C11.1067 51.4616 11.7399 51.4616 12.1304 51.0711L18.4943 44.7071ZM0 45H17.7872V43H0V45Z" fill="white"/>
            </svg>
            <p>14 лет опыта</p>
          </div>
          <div class="regalii">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="52" viewBox="0 0 19 52" fill="none">
              <line x1="1" y1="4.37112e-08" x2="0.999998" y2="44" stroke="white" stroke-width="2"/>
              <path d="M18.4943 44.7071C18.8849 44.3166 18.8849 43.6834 18.4943 43.2929L12.1304 36.9289C11.7399 36.5384 11.1067 36.5384 10.7162 36.9289C10.3256 37.3195 10.3256 37.9526 10.7162 38.3431L16.373 44L10.7162 49.6569C10.3256 50.0474 10.3256 50.6805 10.7162 51.0711C11.1067 51.4616 11.7399 51.4616 12.1304 51.0711L18.4943 44.7071ZM0 45H17.7872V43H0V45Z" fill="white"/>
            </svg>
            <p>217+ видов работ</p>
          </div>
          <div class="regalii">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="52" viewBox="0 0 19 52" fill="none">
              <line x1="1" y1="4.37112e-08" x2="0.999998" y2="44" stroke="white" stroke-width="2"/>
              <path d="M18.4943 44.7071C18.8849 44.3166 18.8849 43.6834 18.4943 43.2929L12.1304 36.9289C11.7399 36.5384 11.1067 36.5384 10.7162 36.9289C10.3256 37.3195 10.3256 37.9526 10.7162 38.3431L16.373 44L10.7162 49.6569C10.3256 50.0474 10.3256 50.6805 10.7162 51.0711C11.1067 51.4616 11.7399 51.4616 12.1304 51.0711L18.4943 44.7071ZM0 45H17.7872V43H0V45Z" fill="white"/>
            </svg>
            <p>1000+ клиентов</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
*{
  color: white;
}
.bottom__line{
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  padding-bottom: 68px;
}
.regalii__block{
  display: flex;
  gap: 24px;
}
.regalii{
  display: flex;
  & p{
    transform: translateX(-10px);
    font-size: 28px;
    font-weight: 400;
    text-transform: uppercase;
  }
}
.ban{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.right{
  display: flex;
  flex-direction: column;
  gap: 62px;
  & p{
    font-size: 28px;
    font-weight: 300;
    text-transform: uppercase;
  }
}
.max-ww{
  padding-top: 288px;
  background: url("/image/bg-ban.png") no-repeat;
  background-size: 100% 120%;
  height: auto;
}
h1{
  font-size: 52px;
  line-height: 74px;
  letter-spacing: 3.64px;
  text-transform: uppercase;
  font-weight: 600;
  max-width: 970px;
}
.sub{
  font-size: 17px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-transform: uppercase;
  padding-top: 22px;
}
@media screen and (max-width: 1440px) {
  .max-ww{
    background-size: 150% 150%;
  }
  .logo{
    width: 320px;
    height: 240px !important;
  }
  .right{
    gap: 24px;
  }
}
@media screen and (max-width: 1328px) {
  .ban{
    flex-wrap: wrap;
  }
}
@media screen and (max-width: 1200px) {
  .max-ww{
    background-size:  200% 200%;
  }
  .bottom__line{
    flex-direction: column-reverse;
    gap: 20px;
  }
}
@media screen and (max-width: 940px) {
  .regalii__block{
    flex-wrap: wrap;
  }
  h1{
    font-size: 42px;
  }
}
@media screen and (max-width: 800px) {
  .ban{
    justify-content: center;
    align-items: center;
    gap: 16px;
  }
  .regalii__block{
    justify-content: center;
    align-items: center;
  }
  .block{
    display: flex;
    justify-content: center;
  }
  h1{
    font-size: 32px;
    line-height: 48px;
  }
  .max-ww{
    padding-top: 128px;
  }
}
@media screen and (max-width: 540px) {
  h1{
    font-size: 28px;
    letter-spacing: 1px;
  }
}
@media screen and (max-width: 600px) {
  .max-ww{
    background-size: cover;
    background-position: center;
  }
  .regalii__block{
    justify-content: flex-start;
  }
  .block{
    justify-content: flex-start;
  }
}
</style>