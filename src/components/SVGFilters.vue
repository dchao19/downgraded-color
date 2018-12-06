<template>
  <svg class="empty">
    <filter id="achromatopsia">
      <feColorMatrix
        type="matrix"
        values="0.299 0.587 0.114 0 0
        0.299 0.587 0.114 0 0
        0.299 0.587 0.114 0 0
        0 0 0 1 0"
      ></feColorMatrix>
    </filter>

    <filter id="deuteranomaly">
      <feColorMatrix
        type="matrix"
        values="0.8 0.2 0 0 0
        0.258 0.742 0 0 0
        0 0.142 0.858 0 0
        0 0 0 1 0"
      ></feColorMatrix>
    </filter>

    <filter id="tritanopia">
      <feColorMatrix
        type="matrix"
        values="0.95 0.05 0 0 0
        0 0.433 0.567 0 0
        0 0.475, 0.525 0 0
        0 0 0 1 0"
      ></feColorMatrix>
    </filter>
  </svg>
</template>

<script>
export default {
  name: "SVGFilters"
};
</script>

<style>
.empty {
  width: 0;
  height: 0;
  display: 0;
}
</style>
