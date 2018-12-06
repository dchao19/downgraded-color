<template>
  <div class="infoPage">
    <CurrentAc class="infoPage_icon"></CurrentAc>
    <h1 class="infoPage_header">Prevalence</h1>
    <p>
      <em>X-linked recessive traits</em> disproportionately impact males more
      than females. As such, Deuteranomaly (red-green colorblindness) affects
      about <strong>1 in 12</strong> males and
      <strong>1 in 200</strong> females. Tritanopia (blue-yellow
      colorblindness), an <em>autosomal dominant</em> condition is rarer than
      deuternomaly. It affects males and females equally, with about
      <strong>1 in 10,000</strong> people worldwide being affected.
      Achromatopsia, which is a <em>autosomal recessive</em> disorder, is
      exceedingly rare. It affects about <strong>1 in 30,000</strong> people
      worldwide.
    </p>
    <b-button to="/camera" variant="primary">
      Continue <ChevronRightIcon />
    </b-button>
  </div>
</template>

<script>
import CurrentAc from "vue-material-design-icons/CurrentAc";
import ChevronRightIcon from "vue-material-design-icons/ChevronRight";
export default {
  name: "Prevalence",
  components: {
    CurrentAc,
    ChevronRightIcon
  }
};
</script>

<style scoped></style>
