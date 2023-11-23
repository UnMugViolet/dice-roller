<template>
  <div class="absolute bottom-0 w-full flex justify-center p-10">
    <button @click="rollDice"
    class="border-2 px-5 py-2 bg-yellow-400 rounded-3xl throw-dice-button uppercase font-bold text-charcoal transform active:translate-y-1"
    :disabled="rolling">Roll it ! </button>
  </div>

  <section class="w-screen h-screen-responsive bg-coal bg-image-square overflow-hidden">
    <div class="w-full h-full flex justify-center items-center">
        <div v-if="randomNumber" class="face text-white">{{ randomNumber }}</div>
        <h1 v-else class="text-white text-3xl text-center">Start to play throw the dice :) </h1>
    </div>

  </section>
</template>

<script>
import confetti from 'canvas-confetti'

export default {
  data() {
    return {
      randomNumber: 0,
      rolling: false
    }
  },
  methods: {
    rollDice() {
      this.rolling = true;
      let delay = 1000;
      for(let i = 0; i < 20; i++) {
        setTimeout(() => {
          this.randomNumber = Math.floor(Math.random() * 6) + 1;
          if(i === 19) {
            this.randomNumber = Math.floor(Math.random() * 6) + 1;
            setTimeout(() => {
              confetti({
                particleCount: 1000,
                spread: 100,
                origin: { y: 0.6 }
              });
              this.rolling = false;
            }, 1200);
          }
        }, delay);
        delay *= 0.75; // decrease delay more gradually
      }
    }
  }
}
</script>

<style scoped>

.face {
  font-size: 15rem;
  font-weight: 700;
  text-shadow: 0px 0px 10px #231f20;
}

.throw-dice-button {
  border-color: #231f20;
  filter: drop-shadow(2px 4px 0px #231f20);
  transition: all 0.3s ease;
}

.throw-dice-button:hover{
  border: 3px solid #231f20;
  margin-bottom: 4px;
  filter: drop-shadow(0px 0px 0px #231f20);
}

.h-screen-responsive {
  height: 100dvh;
}
</style>  