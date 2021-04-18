<template>
  <div class="selected-user container">
    <p>
      Выбран пользователь:
      <b>{{ currentUser.firstName }} {{ currentUser.lastName }}</b>
    </p>
    <p>Описание: {{ currentUser.description }}</p>
    <p>
      Адрес проживания: <b>{{ currentUser.address.streetAddress }}</b>
    </p>
    <p>
      Город: <b>{{ currentUser.address.city }}</b>
    </p>
    <p>
      Провинция/штат: <b>{{ currentUser.address.state }}</b>
    </p>
    <p>
      Индекс: <b>{{ currentUser.address.zip }}</b>
    </p>
  </div>
</template>

<script>
import { onMounted, watch } from "vue";

export default {
  name: "SelectedUser",
  props: {
    currentUser: Object,
  },
  setup(props) {
    function scroll() {
      window.scrollBy({
        left: 0,
        top: document.body.clientHeight,
        behavior: "smooth",
      });
    }

    onMounted(scroll);
    watch(props, scroll);
  },
};
</script>

<style lang="scss" scoped>
.selected-user {
  margin-bottom: 1em;
  animation: 0.5s FadeIn linear;

  p {
    font-size: 2rem;
    b {
      color: var(--main-color-hover);
    }
  }
}
</style>
