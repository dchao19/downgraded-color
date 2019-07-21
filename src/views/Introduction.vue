<template>
  <div class="infoPage">
    <human-handsup-icon class="infoPage_icon" />
    <h1 class="infoPage_header">A Day in the Life Of...</h1>
    <p>
      Our eyes are a crucial way we perceive our world. Yet even though our eyes
      are all but crucial to everyday life, they seem to fail us more often than
      not. Take standard, corrective, vision, for instance. Visual acuity and
      accuracy is so important we are willing to cover our pupils and lenses
      with lenses and glasses to see clearly. At the same time, even people with
      the worst astigmatism or the +8 near-sighted-ness share a similar phenonomon
      that unites this human experience: color. We may see it in different ways,
      but at a certain level, our perception of color is unceasing and always prevalent.
      Imagine, one day, suddenly, all the joy of knowing the sky is blue or an apple is red
      vanishes...
    </p>
    <b-button to="/symptoms" variant="primary"> Continue <ChevronRightIcon /> </b-button>
  </div>
</template>

<script>
import HumanHandsupIcon from "vue-material-design-icons/HumanHandsup";
import ChevronRightIcon from "vue-material-design-icons/ChevronRight";

export default {
  name: "introduction",
  components: {
    HumanHandsupIcon,
    ChevronRightIcon
  }
};
</script>

<style></style>
