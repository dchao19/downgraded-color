<template>
  <div class="fill cameraContainer">
    <div class="diseaseSwitcherContainer">
      <b-button
        class="cameraSwitcher"
        v-on:click="changeCameraView"
        variant="outline-primary"
      >
        <CameraRear v-if="front"></CameraRear>
        <CameraFront v-else></CameraFront>
      </b-button>
      <b-form-group>
        <b-form-radio-group
          buttons
          class="diseaseSwitcher"
          button-variant="outline-primary"
          v-model="selected"
          :options="options"
          name="radioBtnOutline"
        ></b-form-radio-group>
      </b-form-group>
    </div>
    <video
      ref="cameraView"
      id="cameraView"
      autoplay
      v-bind:class="selectedFilter"
    ></video>
  </div>
</template>

<script>
import CameraFront from "vue-material-design-icons/CameraFront.vue";
import CameraRear from "vue-material-design-icons/CameraRear.vue";

export default {
  name: "camera",
  components: {
    CameraFront,
    CameraRear
  },
  data() {
    return {
      options: [
        { text: "Achromatopsia", value: "achromatopsia" },
        { text: "Deuteranomaly", value: "deuteranomaly" },
        { text: "Tritanopia", value: "tritanopia" }
      ],
      selected: "achromatopsia",
      front: false
    };
  },
  mounted() {
    this.cameraView = this.$refs.cameraView;
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this.cameraView.src = window.URL.createObjectURL(stream);
        this.cameraView.play();
      });
    }
  },
  computed: {
    selectedFilter: function() {
      return {
        achromatopsia: this.selected === "achromatopsia",
        deuteranomaly: this.selected === "deuteranomaly",
        tritanopia: this.selected === "tritanopia"
      };
    }
  },
  methods: {
    changeCameraView: function() {
      this.cameraView = this.$refs.cameraView;
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
          .getUserMedia({
            video: { facingMode: this.front ? "user" : "environment" }
          })
          .then(stream => {
            this.cameraView.src = window.URL.createObjectURL(stream);
            this.cameraView.play();
            this.front = !this.front;
          });
      }
    }
  }
};
</script>

<style scoped>
#cameraView {
  width: 100% !important;
  height: 100% !important;
  position: absolute;
  object-fit: cover;
  z-index: -100;
  top: 0;
  left: 0;
}

.diseaseSwitcherContainer {
  position: absolute;
  bottom: 3em;
  left: 0;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: row;
  width: 100%;
}

.diseaseSwitcher {
  background-color: white;
  border-radius: 5px;
  border: 5px solid white;
}

.cameraContainer {
  position: relative;
}

.cameraSwitcher {
  margin-right: 1em;
  margin-bottom: 1em;
  border-radius: 5px;
  border: 5px solid white;
  background-color: white;
}
</style>
