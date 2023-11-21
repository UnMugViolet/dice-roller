<template>
  <div class="absolute bottom-0 w-full flex justify-center p-10">
    <button class="border-2 px-5 py-2 bg-yellow-400 rounded-3xl ease-in-out throw-dice-button uppercase font-bold text-charcoal">Roll the dice</button>
  </div>

  <section class="w-screen h-screen bg-coal bg-image-square">

  </section>

</template>

<style scoped>

.throw-dice-button {
  border-color: #231f20;
  transition: all cubic-bezier(0.175, 0.885, 0.32, 1.275);
  filter: drop-shadow(2px 4px 0px #231f20);
  transition: all 0.3s ease;
}

.throw-dice-button:hover{
  border: 3px solid #231f20;
  margin-bottom: 4px;
  filter: drop-shadow(0px 0px 0px #231f20);
}
</style>
