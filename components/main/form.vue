<script setup>
import { ref } from 'vue';

const fio = ref('');
const phone = ref('');
const comment = ref('');
const notificationVisible = ref(false);
const notificationMessage = ref('');

const submitForm = async () => {
  try {
    // Дополнительная проверка номера телефона
    if (!/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(phone.value)) {
      notificationMessage.value = 'Некорректный формат номера телефона';
      notificationVisible.value = true;
      setTimeout(() => {
        notificationVisible.value = false;
      }, 3000);
      return;
    }

    const response = await fetch('/api/sendMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fio: fio.value,
        phone: phone.value,
        comment: comment.value,
      }),
    });

    const data = await response.json();
    if (data.ok) {
      notificationMessage.value = 'Сообщение отправлено успешно';
      // Сброс полей формы
      fio.value = '';
      phone.value = '';
      comment.value = '';
    } else {
      notificationMessage.value = 'Ошибка отправки сообщения';
    }
  } catch (error) {
    console.error('Ошибка:', error);
    notificationMessage.value = 'Ошибка отправки сообщения';
  }
  notificationVisible.value = true;
  setTimeout(() => {
    notificationVisible.value = false;
  }, 5000); // Увеличил время отображения уведомления до 5 секунд
};
</script>


<template>
  <div class="pt-[300px] relative ffo" id="forma">
    <nuxt-img src="/image/settings.png" class="absolute z-[1] left-[800px] bottom-0 w-[250px] one" />
    <nuxt-img src="/image/settings.png" class="absolute z-[11] left-[900px] w-[200px] two" />
    <div class="container z-100">
      <div class="flex justify-between items-start frm">
        <div class="flex flex-col gap-[140px] qweasd">
          <div class="flex gap-[44px] items-center bbv">
            <div class="krtz__img">
              <nuxt-img src="/image/logo2.png" class="w-[138px] h-[138px]" />
            </div>
            <p class="text-[35px] font-[600]">Курский<br>Ремонтно-Технический<br>Завод</p>
          </div>
          <div>
            <nuxt-img src="/image/formzav.png" class="w-[405px] h-[412px] qweqwe" />
          </div>
        </div>
        <div>
          <form class="form z-[10] relative" @submit.prevent="submitForm">
            <label class="text-[62px] text-white font-[700] text-center">Оставить заявку</label>
            <input type="text" id="fio" v-model="fio" required placeholder="ФИО">
            <input type="tel" id="phone" v-model="phone" required placeholder="Номер телефона">
            <textarea id="comment" v-model="comment" required placeholder="Уточнения"></textarea>
            <div class="flex justify-center pt-[32px] pb-[12px]">
              <button type="submit">Записаться</button>
            </div>
          </form>
          <ui-Notification v-if="notificationVisible" :message="notificationMessage" :show="notificationVisible" />
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.form{
  display: flex;
  flex-direction: column;
  gap: 16px;
  border-radius: 20px;
  background: linear-gradient(180deg, #EA7F00 0%, #E69B01 100%);
  padding: 66px 38px 34px;
  & input{
    width: 672px;
    border-radius: 20px;
    background: #F3F7FF;
    padding: 25px 0 25px 24px;
    &::placeholder {
      color: #c7c7c7;
      font-size: 18px;
    }
  }
  & textarea{
    width: 672px;
    height: 190px;
    border-radius: 20px;
    background: #F3F7FF;
    padding: 25px 0 25px 24px;
    &::placeholder {
      color: #c7c7c7;
      font-size: 18px;
    }
  }
}
button{
  color: #FFF;
  font-size: 32px;
  font-weight: 500;
  padding: 18px 50px;
  border-radius: 16px;
  background: #FFB300;
}
@media screen and (max-width: 1440px) {
  .form{
    padding: 66px 28px 34px !important;
    & input{
      width: 572px;
    }
    & textarea{
      width: 572px;
    }
  }
  .krtz__img{
    & img{
      width: 128px !important;
      height: 128px !important;
    }
  }
  .two{
    left: 35% !important;
    width: 200px !important;
    height: 200px !important;
  }
}
@media screen and (max-width: 1200px) {
  .frm{
    flex-wrap: wrap;
    justify-content: center;
    gap: 48px;
  }
  .qweasd{
    gap: 48px;
  }
  .two{
    left: 0 !important;
    top: 520px;
  }
  .one{
    left: 20% !important;
  }
  .ffo{
    padding-top: 150px;
  }
}
@media screen and (max-width: 690px) {
  .form{
    padding: 66px 16px 34px !important;
    justify-content: center;
    align-items: center;
    & input{
      width: 472px;
    }
    & textarea{
      width: 472px;
    }
    label{
      font-size: 48px;
    }
  }
}
@media screen and (max-width: 500px) {
  .form{
    //padding: 28px 4px 18px !important;
    justify-content: center;
    align-items: center;
    & input{
      width: 320px;
      padding: 12px 0 12px 12px;
    }
    & textarea{
      width: 320px;
      height: 100px;
    }
    label{
      font-size: 32px;
    }
    button{
      padding: 8px 24px;
      font-size: 24px;
    }
  }
  .krtz__img{
    width: 128px !important;
    height: 128px !important;
    & img{
      width: 128px !important;
      height: auto !important;
    }
  }
  .ffo{
    padding-top: 48px;
  }
}
@media screen and (max-width: 425px) {
  .bbv{
    align-items: center;
    gap: 24px;
    & p{
      font-size: 14px;
    }
    & .krtz__img{
      width: 92px !important;
      height: 92px !important;
      & img{
        width: 92px !important;
        height: 92px !important;
      }
    }
  }
  .qweqwe{
    width: 240px;
    height: auto;
  }
  .two{
    z-index: 0;
  }
}
</style>