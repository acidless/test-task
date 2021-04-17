<template>
  <div class="loader-wrapper">
    <div class="loader">
      <div class="loader__inner">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loader",
};
</script>

<style lang="scss" scoped>
.loader-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / -1;
  padding: 2em;

  .loader {
    width: 10em;
    height: 10em;
    display: inline-block;
    overflow: hidden;
    background: #fff;

    .loader__inner div {
      position: absolute;
      animation: Spin 1s linear infinite;
      width: 8em;
      height: 8em;
      top: 1em;
      left: 1em;
      border-radius: 50%;
      box-shadow: 0 4px 0 0 var(--main-color);
      transform-origin: 4em 4.1em;
    }

    .loader__inner {
      width: 100%;
      height: 100%;
      position: relative;
      transform: translateZ(0) scale(1);
    }
    .loader__inner div {
      box-sizing: content-box;
    }
  }
}
</style>
