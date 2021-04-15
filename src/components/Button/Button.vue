<template>
  <button>
    <span><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "Button",
};
</script>

<style lang="scss">
button {
  background: var(--heading-bg);
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5em 0.25em;
  color: #fff;
  border-radius: 0.25em;
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2em;
  font-weight: bold;

  span {
    position: relative;
    z-index: 1;
  }

  &:after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--heading-bg-hover);
    clip-path: circle(0 at center);
    transition: 0.3s clip-path ease-in-out;
  }

  &:hover {
    &:after {
      clip-path: circle(100% at center);
    }
  }
}
</style>
