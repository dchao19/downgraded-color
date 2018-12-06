<template>
  <div class="infoPage">
    <eye class="infoPage_icon"></eye>
    <h1 class="infoPage_header">Symptoms</h1>
    <p>
      There are <strong>8 types</strong> of color blindness, with varying
      frequency and intensity. They are divided into
      <strong>3 categories.</strong> But, for the purposes of this
      demonstration, we'll focus on three key types of colorblindness.
    </p>

    <br />

    <h4>Deuteranamoly</h4>
    <p>
      Deuteranamoly is one condition that causes red-green colorblindness.
      People with deuteranamoly have abnormalities in the green cone
      photopigments, but it isn't dehabiliting. Affected individuals see purple
      and greens as more red, and violet and blue are less distinct
    </p>

    <h4>Tritanopia</h4>
    <p>
      Tritanopia is one condition that causes blue-yellow colorblindness. People
      with tritanopia have no blue cone cells, so blue colors appear like green,
      and yellow appears like green.
    </p>

    <h4>Achromatopsia</h4>
    <p>
      Achromatopsia is one condition that causes complete colorblindness. People
      with achromatopsia have malformed or entirely malformed cones, and have no
      perception of color. Vision relies solely upon the rods, which means that
      visual acuity can be reduced in individuals affected by achromatopsia.
    </p>

    <b-button to="/genetics" variant="primary"> Continue <chevron-right-icon /> </b-button>
  </div>
</template>

<script>
import Eye from "vue-material-design-icons/Eye";
import ChevronRightIcon from "vue-material-design-icons/ChevronRight";

export default {
  name: "Symptoms",
  components: {
    ChevronRightIcon,
    Eye
  }
};
</script>

<style scoped></style>
