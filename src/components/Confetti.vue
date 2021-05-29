<template>
  <div id="confetti"></div>
</template>
<script lang="ts">
import { tsParticles } from "tsparticles";
import {onMounted} from 'vue';
import bus from "@/lib/bus";

export default {
  name: "Confetti",
  setup() {
    onMounted(() => {
      tsParticles.load("confetti", {
        fpsLimit: 60,
        fullScreen: {
          enable: true
        },
        particles: {
          number: {
            value: 0,
            zIndex: 100
          },
          color: {
            value: ["#00FFFC", "#FC00FF", "#fffc00"]
          },
          shape: {
            options: {
              confetti: {
                type: ["circle", "square"]
              }
            }
          },
          opacity: {
            value: 1,
            animation: {
              enable: true,
              minimumValue: 0,
              speed: 2,
              startValue: "max",
              destroy: "min"
            }
          },
          size: {
            value: 7,
            random: {
              enable: true,
              minimumValue: 3
            }
          },
          links: {
            enable: false
          },
          life: {
            duration: {
              sync: true,
              value: 5
            },
            count: 1
          },
          move: {
            enable: true,
            gravity: {
              enable: true,
              acceleration: 20
            },
            speed: 20,
            decay: 0.1,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "destroy",
              top: "none"
            }
          }
        },
        interactivity: {
          detectsOn: "window",
          events: {
            resize: true
          }
        },
        detectRetina: true,
        emitters: {
          autoPlay: false,
          name: "party",
          direction: "none",
          spawnColor: {
            value: "#ff0000",
            animation: {
              h: {
                enable: true,
                offset: {
                  min: -1.4,
                  max: 1.4
                },
                speed: 0.1,
                sync: false
              },
              l: {
                enable: true,
                offset: {
                  min: 20,
                  max: 80
                },
                speed: 0,
                sync: false
              }
            }
          },
          life: {
            count: 0,
            duration: 0.1,
            delay: 0.4
          },
          rate: {
            delay: 0.1,
            quantity: 100
          },
          size: {
            width: 0,
            height: 0
          }
        }
      });

      const container = tsParticles.domItem(0);

      bus.$on("confetti-play", () => {
        container.playEmitter("party");
      });
      bus.$on("confetti-end", () => {
        container.pauseEmitter("party");
      });

    })
  }
}
</script>
<style>
#confetti {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  top: 0;
  left: 0;
}
</style>