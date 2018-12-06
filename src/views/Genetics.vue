<template>
  <div class="infoPage">
    <dna class="infoPage_icon"></dna>
    <h1 class="infoPage_header">Genetic Origin</h1>
    <p>
      All 8 kinds of colorblindness are <strong>inherited traits</strong>, but
      the <strong>pattern of inheritance</strong> varies between the different
      types. <strong>Deuteranomaly</strong> is an
      <em>X-linked recessive</em> trait, which means males only need one
      malformed copy of the gene in order to be affected. Females would need two
      malformed copies of the gene to express this form of red-green
      colorblindness. <strong>Tritanopia</strong> has an
      <em>autosomal dominant</em> pattern, meaning for both males and females,
      individuals would only have to inherit one affected copy for the gene to
      be express this condition. <strong>Achromatopsia</strong> has an
      <em>autosomal recessive</em> pattern, so both males and females would have
      to inherit two copies of the affected gene to express this form of
      complete colorblindness.
    </p>
    <b-button to="/prevalence" variant="primary">
      Continue <ChevronRightIcon />
    </b-button>
  </div>
</template>

<script>
import Dna from "vue-material-design-icons/Dna";
import ChevronRightIcon from "vue-material-design-icons/ChevronRight";

export default {
  name: "Genetics",
  components: {
    Dna,
    ChevronRightIcon
  }
};
</script>

<style scoped></style>
