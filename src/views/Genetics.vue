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
      be express this condition. Both Deuteranomaly and Tritanopia are caused by
      mutations in the OPN1LW, OPN1MW, and OPN1SW genes.
      <strong>Achromatopsia</strong> has an
      <em>autosomal recessive</em> pattern, so both males and females would have
      to inherit two copies of the affected gene to express this form of
      complete colorblindness. Achromatopsia results from mutations in the
      CNGA3, CNGB3, GNAT2, PDE6C, or PDE6H genes.
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
