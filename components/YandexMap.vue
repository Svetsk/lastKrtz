<template>
  <div id="map" class="w-[650px] h-[300px] maxx"></div>
</template>

<script setup>
import { onMounted } from 'vue';

const initMap = () => {
  if (!window.ymaps) {
    return;
  }

  window.ymaps.ready(() => {
    const map = new window.ymaps.Map('map', {
      center: [51.705018, 36.177321], // Координаты центра карты
      zoom: 17,
    });

    // Координаты метки
    const placemarkCoordinates = [51.705018, 36.177321];

    // Создаем метку
    const placemark = new window.ymaps.Placemark(placemarkCoordinates, {
      balloonContent: 'ООО "КРТЗ"', // Контент балуна
    }, {
      // Опции метки
      preset: 'islands#icon',
      iconColor: '#0095b6',
    });

    // Добавляем метку на карту
    map.geoObjects.add(placemark);
  });
};

onMounted(() => {
  if (!window.ymaps) {
    const script = document.createElement('script');
    script.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU`;
    script.onload = initMap;
    document.head.appendChild(script);
  } else {
    initMap();
  }
});
</script>

<style scoped>
</style>
