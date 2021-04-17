<template>
  <form class="create-user-form" @submit="onSubmit">
    <input
      v-model="values.id"
      pattern="\d+"
      required
      name="id"
      placeholder="ID"
      type="number"
    />
    <input
      v-model="values.firstName"
      pattern="[a-zA-Z]+"
      required
      name="firstName"
      placeholder="First Name"
      type="text"
    />
    <input
      v-model="values.lastName"
      pattern="[a-zA-Z]+"
      required
      name="lastName"
      placeholder="Last Name"
      type="text"
    />
    <input
      v-model="values.email"
      pattern=".+@.+\..+"
      required
      name="email"
      placeholder="Email"
      type="email"
    />
    <input
      v-model="values.phone"
      pattern="\(\d{3}\)\d{3}-\d{4}"
      required
      name="phone"
      placeholder="Phone"
      type="text"
    />
    <Button :disabled="!isCompleted" type="submit">Create</Button>
  </form>
</template>

<script>
import Button from "@/components/Button/Button";
import { reactive, ref, watch } from "vue";

export default {
  name: "CreateUser",
  components: { Button },
  setup(props, { emit }) {
    let values = reactive({
      id: null,
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    });

    const isCompleted = ref(false);

    watch(values, () => {
      isCompleted.value = Object.keys(values).every((key) => {
        return Boolean(values[key].trim());
      });
    });

    function onSubmit(e) {
      e.preventDefault();
      emit("createUser", { ...values, id: +values.id });

      Object.keys(values).forEach((key) => (values[key] = ""));
    }

    return {
      onSubmit,
      isCompleted,
      values,
    };
  },
};
</script>

<style lang="scss" scoped>
.create-user-form {
  display: grid;
  grid-template-columns: minmax(5em, 1fr) repeat(5, minmax(10em, 3fr));
  grid-gap: 1em;
  animation: 0.3s FadeIn linear;
}

@media screen and (max-width: 1100px) {
  .create-user-form {
    grid-template-columns: repeat(4, minmax(5em, 1fr));

    input[name="id"] {
      grid-column: 1;
    }

    input[name="email"] {
      grid-column: 2 / 5;
      grid-row: 1;
    }

    input[name="firstName"],
    input[name="lastName"] {
      grid-row: 2;
    }

    input[name="firstName"] {
      grid-column: 1 / 3;
    }

    input[name="lastName"] {
      grid-column: 3 / 5;
    }

    input[name="phone"] {
      grid-column: 1 / 3;
      grid-row: 3;
    }

    button {
      grid-column: 3 / 5;
      grid-row: 3;
    }
  }
}

@media screen and (max-width: 500px) {
  .create-user-form {
    grid-template-columns: minmax(150px, 1fr);

    input,
    button {
      grid-column: auto !important;
      grid-row: auto !important;
    }
  }
}
</style>
