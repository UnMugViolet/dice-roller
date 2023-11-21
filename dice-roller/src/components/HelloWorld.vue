<template>
  <div class="absolute bottom-0 w-full flex justify-center p-10">
    <button @click="rollDice"
    class="border-2 px-5 py-2 bg-yellow-400 rounded-3xl throw-dice-button uppercase font-bold text-charcoal transform active:translate-y-1">Roll the dice</button>
  </div>

  <section class="w-screen h-screen bg-coal bg-image-square">
    <div id="dice-container" class="w-full h-full">

    </div>
  </section>

</template>


<script>
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { DiceD6 } from 'three/examples/jsm/geometries/DiceGeometry.js';

export default {
  methods: {
    rollDice() {
      // Create a scene
      const scene = new THREE.Scene();

      // Create a camera
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      // Create a renderer
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      document.getElementById('dice-container').appendChild(renderer.domElement);

      // Load textures
      const loader = new THREE.TextureLoader();
      const materials = [
        new THREE.MeshBasicMaterial({ map: loader.load('dice-face-1.png') }),
        new THREE.MeshBasicMaterial({ map: loader.load('dice-face-2.png') }),
        new THREE.MeshBasicMaterial({ map: loader.load('dice-face-3.png') }),
        new THREE.MeshBasicMaterial({ map: loader.load('dice-face-4.png') }),
        new THREE.MeshBasicMaterial({ map: loader.load('dice-face-5.png') }),
        new THREE.MeshBasicMaterial({ map: loader.load('dice-face-6.png') }),
      ];

      // Create a cube (dice)
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const cube = new THREE.Mesh(geometry, materials);
      scene.add(cube);

      // Generate a random number between 1 and 6
      const randomNumber = Math.floor(Math.random() * 6) + 1;

      // Rotate the cube to show the random number
      cube.rotation.x += randomNumber * 0.1;
      cube.rotation.y += randomNumber * 0.1;

      // Animation loop
      const animate = function () {
        requestAnimationFrame(animate);

        // Rotate the cube
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        // Render the scene
        renderer.render(scene, camera);
      };

      animate();
    }
  },
}

</script>

<style scoped>

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

</style>  