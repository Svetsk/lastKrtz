<script>
export default {
  data() {
    return {
      show: false
    }
  }
}
</script>

<template>
  <div class="containera">
    <ui-elements-title title="Галерея" class="pb-[80px]" />
    <div class="flex flex-wrap justify-between gap-y-[42px] blocks">
      <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
      <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
      <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
      <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
      <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
      <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
      <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
      <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
      <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
      <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
      <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
      <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
      <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
      <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
      <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
      <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
      <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
      <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
      <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
      <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
    </div>
    <Transition>
      <div v-if="show" class="pt-[42px] trans">
        <div class="flex flex-wrap justify-between gap-y-[42px] blocks">
          <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
          <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
          <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
          <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
          <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
          <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
          <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
          <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
          <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
          <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
          <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
          <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
          <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
          <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
          <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
          <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
          <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
          <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
          <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
          <nuxt-img src="/image/galary/photoOne.png" class="w-[360px] h-[360px]" />
        </div>
      </div>
    </Transition>
    <button v-if="!show" @click="show = !show" class="flex gap-[10px] items-center justify-center text-[24px] font-[700] mx-auto pt-[50px]">
      Смотреть дальше
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 15" fill="none">
        <path d="M23.4717 0.5736C23.1334 0.206325 22.6745 1.79147e-06 22.1961 1.74964e-06C21.7176 1.70782e-06 21.2588 0.206325 20.9204 0.5736L11.9891 10.2711L3.05778 0.573598C2.71748 0.216732 2.26171 0.0192661 1.78863 0.0237293C1.31554 0.0281934 0.863 0.234229 0.528467 0.597463C0.193935 0.960696 0.00417828 1.45206 6.78967e-05 1.96573C-0.00404248 2.4794 0.177821 2.97428 0.50649 3.34377L10.7135 14.4264C11.0518 14.7937 11.5107 15 11.9891 15C12.4675 15 12.9264 14.7937 13.2648 14.4264L23.4717 3.34377C23.81 2.97638 24 2.47817 24 1.95868C24 1.4392 23.81 0.940986 23.4717 0.5736Z" fill="black"/>
      </svg>
    </button>
    <button v-if="show" @click="show = !show" class="flex gap-[10px] items-center justify-center text-[24px] font-[700] mx-auto pt-[50px]">
      Свернуть
      <svg class="rotate-[180deg]" xmlns="http://www.w3.org/2000/svg" width="24" height="15" viewBox="0 0 24 15" fill="none">
        <path d="M23.4717 0.5736C23.1334 0.206325 22.6745 1.79147e-06 22.1961 1.74964e-06C21.7176 1.70782e-06 21.2588 0.206325 20.9204 0.5736L11.9891 10.2711L3.05778 0.573598C2.71748 0.216732 2.26171 0.0192661 1.78863 0.0237293C1.31554 0.0281934 0.863 0.234229 0.528467 0.597463C0.193935 0.960696 0.00417828 1.45206 6.78967e-05 1.96573C-0.00404248 2.4794 0.177821 2.97428 0.50649 3.34377L10.7135 14.4264C11.0518 14.7937 11.5107 15 11.9891 15C12.4675 15 12.9264 14.7937 13.2648 14.4264L23.4717 3.34377C23.81 2.97638 24 2.47817 24 1.95868C24 1.4392 23.81 0.940986 23.4717 0.5736Z" fill="black"/>
      </svg>
    </button>
  </div>
</template>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
@media screen and (max-width: 1440px) {
  .blocks{
    & img{
      width: 320px !important;
      height: 320px !important;
    }
  }
}
@media screen and (max-width: 1140px) {
  .blocks{
    & img{
      width: 240px !important;
      height: 240px !important;
    }
  }
}
@media screen and (max-width: 900px) {
  .blocks{
    & img{
      width: 200px !important;
      height: 200px !important;
    }
  }
}
@media screen and (max-width: 860px) {
  .blocks{
    row-gap: 8px;
    & img{
      width: 180px !important;
      height: 180px !important;
    }
  }
  .trans{
    padding-top: 8px;
  }
}
@media screen and (max-width: 595px) {
  .blocks{
    justify-content: center;
    gap: 8px;
  }
}
@media screen and (max-width: 425px) {
  .blocks{
    justify-content: space-between;
    gap: 12px;
    & img{
      width: 160px !important;
      height: 160px !important;
    }
  }
}
</style>