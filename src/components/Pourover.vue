<template>
  <div class="flasks">
    <div
      v-for="(flask, index) in flasks"
      :key="`flask-${index}`"
      class="flask"
      :class="{ active: clickFlask == index }"
      @click="clickFlaskHandler(index)"
    >
      <div
        v-for="(item, itemIndex) in flask.in"
        :key="`flask-item-${item}`"
        class="flask-item"
        :style="`background-color: ${item.color}; top: ${getPosition(
          itemIndex,
          flask
        )}`"
      ></div>
    </div>
  </div>
</template>
<script lang="ts">
import Functions from "@/classes/Functions";
import { reactive, ref } from "vue";

interface Filler {
  color: string;
}

interface Flask {
  in: Filler[];
}

const minCountFlask = 4;
const maxCountFlask = 4;
const countFlask: number = Functions.math().randomInteger(
  minCountFlask,
  maxCountFlask
);

const FillerPosition = ["170px", "110px", "55px", "0px"];

export default {
  name: "Pourover",
  setup() {
    const flasks: Flask[] = reactive(generateFlask());
    const needColor = flasks.length - 2;
    const colours: Filler[] = reactive(generateColor());
    const clickFlask = ref<number>(-1);

    function generateFlask(): Flask[] {
      let tmpFlasks: Flask[] = [];
      let i: number = 1;

      for (i; i <= countFlask; i++) {
        tmpFlasks.push({
          in: [],
        });
      }

      return tmpFlasks;
    }

    function generateColor(): Filler[] {
      let tmp: Filler[] = [],
        i;

      for (i = 1; i <= needColor; i++) {
        let color = Functions.color().generate(i);

        tmp.push({ color: color });
        tmp.push({ color: color });
        tmp.push({ color: color });
        tmp.push({ color: color });
      }

      return tmp;
    }

    function pour(): void {
      let item: string;

      for (item in flasks) {
        if (Number(item) < needColor) {
          flasks[item].in = getRandomColor();
        }
      }
    }

    function getRandomColor(): Filler[] {
      let tmpColor: Filler[] = [],
        i: number = 1;

      for (i; i <= 4; i++) {
        let colorElement: number = Functions.math().randomInteger(
          0,
          colours.length - 1
        );
        tmpColor.push(colours[colorElement]);
        colours.splice(colorElement, 1);
      }

      return tmpColor;
    }

    function clickFlaskHandler(index: number): void {
      let activeColor: Filler | undefined;

      if (flasks[clickFlask.value]) {
        activeColor = flasks[clickFlask.value]["in"][0];
      }

      if (activeColor) {
        if (
          (!flasks[index]["in"][0] ||
            activeColor.color == flasks[index]["in"][0].color) &&
          flasks[index]["in"].length < 4
        ) {
          flasks[clickFlask.value]["in"].splice(0, 1);
          flasks[index]["in"].unshift(activeColor);
          clickFlask.value = -2;
        } else {
          window.navigator.vibrate(200);
          clickFlask.value = -2;
        }
      }

      clickFlask.value =
        clickFlask.value === index || clickFlask.value === -2 ? -1 : index;
    }

    function getPosition(
      index: number,
      item: Flask
    ): typeof FillerPosition[number] {
      index = item.in.length - index - 1;
      return FillerPosition[index];
    }

    pour();

    return {
      flasks,
      colours,
      clickFlask,
      clickFlaskHandler,
      getPosition,
    };
  },
};
</script>
<style scoped>
.flasks {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.flask {
  padding: 5px;
  width: 60px;
  margin: 10px;
  height: 235px;
  border: 2px solid #000;
  border-top: none;
  border-radius: 0 0 10px 10px;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  justify-content: flex-end;
}

.flask-item {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  position: absolute;
  box-sizing: border-box;
  top: 0;
  margin: 10px 0 0 0;
}

.flask.active .flask-item:nth-child(1) {
  position: absolute;
  top: -55px !important;
}
</style>
