<script >
import { ref, onMounted, onUnmounted } from 'vue';

export default {
  data() {
    return {
      show: false
    }
  },
  setup() {
    const headerClass = ref('header-default');

    const handleScroll = () => {
      const targetSection = document.getElementById('target-section');
      if (targetSection) {
        const rect = targetSection.getBoundingClientRect();
        if (rect.top <= 0) {
          headerClass.value = 'header-changed';
        } else {
          headerClass.value = 'header-default';
        }
      }
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      headerClass
    };
  }
};

</script>

<template>
  <header :class="headerClass">
    <div class="container">
      <div class="flex justify-between items-center py-[25px] htadf">
        <a href="/" class="logo flex gap-[18px] items-center">
          <nuxt-img src="/image/logo.png" />
          <div class="line"></div>
          <p>Курский<br>Ремонтно-Технический<br>Завод</p>
        </a>
        <div class="flex flex-col gap-[16px] items-end justify-end sdf">
          <div class="flex gap-[60px] asd">
            <div class="blocks">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20" viewBox="0 0 26 20" fill="none">
                <path d="M2.85997 20C2.16479 20 1.56988 19.7554 1.07525 19.2662C0.580612 18.7771 0.332874 18.1883 0.332031 17.5V2.5C0.332031 1.8125 0.57977 1.22417 1.07525 0.735C1.57072 0.245833 2.16563 0.000833333 2.85997 0H23.0835C23.7787 0 24.374 0.245 24.8695 0.735C25.365 1.225 25.6123 1.81333 25.6114 2.5V17.5C25.6114 18.1875 25.3641 18.7762 24.8695 19.2662C24.3749 19.7562 23.7795 20.0008 23.0835 20H2.85997ZM12.9717 11.25L2.85997 5V17.5H23.0835V5L12.9717 11.25ZM12.9717 8.75L23.0835 2.5H2.85997L12.9717 8.75ZM2.85997 5V2.5V17.5V5Z" fill="white"/>
              </svg>
              <a href="mailto:gk-rtz@mail.ru">gk-rtz@mail.ru</a>
            </div>
            <div class="blocks">
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="27" viewBox="0 0 28 27" fill="none">
                <path d="M1.35498 13.1795C1.35498 8.34489 1.35498 5.92694 2.83635 4.42566C4.31646 2.9231 6.70031 2.9231 11.4667 2.9231H16.5226C21.2891 2.9231 23.6729 2.9231 25.153 4.42566C26.6344 5.92694 26.6344 8.34489 26.6344 13.1795V15.7436C26.6344 20.5782 26.6344 22.9962 25.153 24.4975C23.6729 26 21.2891 26 16.5226 26H11.4667C6.70031 26 4.31646 26 2.83635 24.4975C1.35498 22.9962 1.35498 20.5782 1.35498 15.7436V13.1795Z" stroke="white" stroke-width="1.5"/>
                <path opacity="0.5" d="M7.6742 2.92308V1M20.3139 2.92308V1M1.98633 9.33333H26.0018" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                <path d="M21.0778 19.5897C21.0778 19.7994 20.9956 19.9991 20.8515 20.1452C20.7077 20.2911 20.5141 20.3718 20.3138 20.3718C20.1135 20.3718 19.92 20.2911 19.7761 20.1452C19.6321 19.9991 19.5499 19.7994 19.5499 19.5897C19.5499 19.38 19.6321 19.1803 19.7761 19.0342C19.92 18.8883 20.1135 18.8076 20.3138 18.8076C20.5141 18.8076 20.7077 18.8883 20.8515 19.0342C20.9956 19.1803 21.0778 19.38 21.0778 19.5897ZM21.0778 14.4615C21.0778 14.6712 20.9956 14.8709 20.8515 15.017C20.7077 15.1629 20.5141 15.2435 20.3138 15.2435C20.1135 15.2435 19.92 15.1629 19.7761 15.017C19.6321 14.8709 19.5499 14.6712 19.5499 14.4615C19.5499 14.2518 19.6321 14.0521 19.7761 13.906C19.92 13.7601 20.1135 13.6794 20.3138 13.6794C20.5141 13.6794 20.7077 13.7601 20.8515 13.906C20.9956 14.0521 21.0778 14.2518 21.0778 14.4615ZM14.758 19.5897C14.758 19.7994 14.6758 19.9991 14.5317 20.1452C14.3879 20.2911 14.1943 20.3718 13.994 20.3718C13.7937 20.3718 13.6001 20.2911 13.4563 20.1452C13.3122 19.9991 13.23 19.7994 13.23 19.5897C13.23 19.38 13.3122 19.1803 13.4563 19.0342C13.6001 18.8883 13.7937 18.8076 13.994 18.8076C14.1943 18.8076 14.3879 18.8883 14.5317 19.0342C14.6758 19.1803 14.758 19.38 14.758 19.5897ZM14.758 14.4615C14.758 14.6712 14.6758 14.8709 14.5317 15.017C14.3879 15.1629 14.1943 15.2435 13.994 15.2435C13.7937 15.2435 13.6001 15.1629 13.4563 15.017C13.3122 14.8709 13.23 14.6712 13.23 14.4615C13.23 14.2518 13.3122 14.0521 13.4563 13.906C13.6001 13.7601 13.7937 13.6794 13.994 13.6794C14.1943 13.6794 14.3879 13.7601 14.5317 13.906C14.6758 14.0521 14.758 14.2518 14.758 14.4615ZM8.4381 19.5897C8.4381 19.7994 8.35591 19.9991 8.21183 20.1452C8.068 20.2911 7.87444 20.3718 7.67413 20.3718C7.47382 20.3718 7.28026 20.2911 7.13642 20.1452C6.99235 19.9991 6.91016 19.7994 6.91016 19.5897C6.91016 19.38 6.99235 19.1803 7.13642 19.0342C7.28026 18.8883 7.47382 18.8076 7.67413 18.8076C7.87444 18.8076 8.068 18.8883 8.21183 19.0342C8.35591 19.1803 8.4381 19.38 8.4381 19.5897ZM8.4381 14.4615C8.4381 14.6712 8.35591 14.8709 8.21183 15.017C8.068 15.1629 7.87443 15.2435 7.67413 15.2435C7.47382 15.2435 7.28026 15.1629 7.13642 15.017C6.99235 14.8709 6.91016 14.6712 6.91016 14.4615C6.91016 14.2518 6.99235 14.0521 7.13642 13.906C7.28026 13.7601 7.47382 13.6794 7.67413 13.6794C7.87443 13.6794 8.068 13.7601 8.21183 13.906C8.35591 14.0521 8.4381 14.2518 8.4381 14.4615Z" fill="black" stroke="white"/>
              </svg>
              <p>Пн-Пт: 8:00-16:00<br>Сб-Вс: выходной</p>
            </div>
            <a href="#forma" class="buton">
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="19" viewBox="0 0 21 19" fill="none">
                <path d="M13.3669 12.3591L13.8229 11.9061C14.4529 11.2801 15.4339 11.1511 16.2399 11.5891L18.1499 12.6281C19.3769 13.2951 19.6479 14.9301 18.6889 15.8831L17.2689 17.2951C16.9069 17.6551 16.4589 17.9171 15.9429 17.9651M1.26995 4.74507C1.23495 4.12507 1.52495 3.56707 1.95895 3.13507L3.52895 1.57507C4.40295 0.705068 5.87695 0.840067 6.63995 1.85907L7.90095 3.54307C8.51795 4.36707 8.45095 5.49507 7.74395 6.19707L7.45795 6.48307" stroke="white" stroke-width="1.5"/>
                <path opacity="0.5" d="M15.943 17.9651C14.313 18.1171 10.329 17.9491 6.08302 13.7271C2.07802 9.74509 1.36002 6.33209 1.27002 4.74609" stroke="white" stroke-width="1.5"/>
                <path opacity="0.5" d="M13.3669 12.3592C13.3669 12.3592 12.2849 13.4352 9.32991 10.4972C6.37491 7.55918 7.45791 6.48218 7.45791 6.48218" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              Заказать звонок
            </a>
          </div>
          <div class="qq">
            <nav>
              <ul>
                <li>
                  <nuxt-link to="/">Главная</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/galary">Наша продукция</nuxt-link>
                </li>
                <li>
                  <nuxt-link to="/contact">Контакты</nuxt-link>
                </li>
              </ul>
            </nav>
            <a href="tel:+7 (903) 872-33-33">+7 (903) 872-33-33</a>
          </div>
        </div>
      </div>
<!--      <nuxt-img src="/image/point.png" />-->
      <div class="flex justify-between items-center bur">
        <div class="logo flex gap-[18px] items-center">
          <nuxt-img src="/image/logo.png" />
          <div class="line"></div>
          <p>Курский<br>Ремонтно-Технический<br>Завод</p>
        </div>
        <button @click="show = !show">
          <nuxt-img src="/image/ui/burger.svg" class="w-[48px] text-white" />
        </button>
        <Transition>
          <div class="absolute right-0 w-[20%] mob" v-if="show">
            <button @click="show = !show" class="cl text-2xl">
              <nuxt-img src="/image/ui/close.svg" class="w-[28px]" />
            </button>

            <ul>
              <li>
                <nuxt-link to="/">Главная</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/galary">Наша продукция</nuxt-link>
              </li>
              <li>
                <nuxt-link to="/contact">Контакты</nuxt-link>
              </li>
            </ul>
          </div>
        </Transition>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
ul{
  padding: 0;
}
li{
  list-style: none;
}
*{
  color: white;
}
.qq{
  display: flex;
  justify-content: space-between;
  width: 910px;
  padding-bottom: 10px;
  border-bottom: 1px solid #FFB601;
}
nav{
  & ul{
    display: flex;
    gap: 24px;
    & li{
      & a{
        font-size: 16px;
        font-weight: 400;
      }
    }
  }
}
.buton{
  background: #FFB601;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 9px 10px;
  display: flex;
  align-items: center;
  gap: 12px;
}
header{
  position: fixed;
  width: 100%;
  z-index: 1000;
  transition: background-color 0.3s, opacity 0.3s;
}
.header-changed {
  background-color: black;
  opacity: 1;
}
.header-default {
  backdrop-filter: blur(3px);
}
.logo{
  & img{
    width: 65px;
    height: 65px;
  }
}
.line{
  width: 1px;
  height: 55px;
  background: white;
}
p{
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
}
.blocks{
  display: flex;
  gap: 10px;
  align-items: center;
  & p{
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
  }
}
.mob{
  background: black;
  height: 100vh;
  top: 0;
  & ul{
    padding: 100px 0 0 20px;
  }
}
.cl{
  position: absolute;
  right: 40px;
  margin-top: 40px;
}
@media screen and (max-width: 1430px) {
  .htadf{
    gap: 20px;
  }
}
@media screen and (max-width: 1200px) {
  .qq{
    width: 610px;
  }
}
@media screen and (max-width: 950px) {
  .qq{
    width: 550px;
  }
  .asd{
    gap: 30px;
  }
}
.bur{
  display: none;
  padding: 12px 0;
}
@media screen and (max-width: 950px) {
  .htadf{
    display: none;
  }
  .bur{
    display: flex;
  }
}
@media screen and (max-width: 650px) {
  .mob{
    width: 50%;
  }
}
@media screen and (max-width: 420px) {
  header{
    width: 420px;
  }
  .bur{
    justify-content: flex-start;
    gap: 48px;
  }
}
@media screen and (max-width: 391px) {
  header{
    max-width: 100%;
    width: 391px;
  }
  .mob{
    width: 60%;
  }
}
@media screen and (max-width: 390px) {
  header{
    width: 390px;
  }
}
.router-link-active{
  border-bottom: 2px solid #E69B01;
}
</style>