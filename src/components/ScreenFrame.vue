<script setup>
import ScreenContent from './ScreenContent.vue';
import Header from './Header.vue'
import Keyboard from './Keyboard.vue';

import { useAppStore } from '../stores/AppStore';
const appStore = useAppStore()

function togglePower() {
  
  appStore.togglePower()
  console.log(appStore.hasPower)
}

</script>

<template>
    <div id="monitor">
        <div class="screen-wrap">
          <div id="screen" v-show="appStore.hasPower">
            <Header />
            <div id="crt" >
                <div class="scanline"></div>
                <div class="terminal">
                    <ScreenContent>
                        <template #default>
                            <slot></slot>
                        </template>
                    </ScreenContent>
                </div>
            </div>
          </div>
        </div>
        
        <div class="trapezoid">
          <div class="btn-group">
            <label class="switch">
              <input type="checkbox" v-model="appStore.hasPower" @click="togglePower">
              <span class="slider"></span>
            </label>
          </div>
        </div>
        <div class="trapezoid-2">
          <Keyboard />
        </div>
        <div class="trapezoid-3"></div>
        <div class="trapezoid-4"></div>
        <div class="trapezoid-5"></div>

    </div>
</template>

<style scoped>
.btn-group{
  position: relative;
  z-index: 1;
}
/* The switch - the box around the slider */
.switch {
  position: absolute;
  display: inline-block;
  top: 24rem;
  left: 0rem;
  width: 4rem;
  height: 34px;
  transform: translate(-50%, -50%) perspective(800px) rotateX(45deg); /* Adjust the perspective and rotation as needed */
  border-radius: .5rem;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 2rem;
  padding: .25rem;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: .25rem;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.trapezoid {
  position: absolute;
  bottom: -5rem;
    border-top: 50px solid transparent;
    border-radius: .25rem;
    border-bottom: 8rem solid #2c2a28; /* Adjust the height and color as needed */
    border-left: 5rem solid transparent;
    border-right: 5rem solid transparent;
    height: 30rem;
    width: 80rem; /* Adjust the width as needed */
    z-index: -1;
  }
  .trapezoid-2{
    position: absolute;
    bottom: -5rem;
    border-radius: 4rem;
    border-top: 50px solid transparent;
    border-bottom: 10rem solid #534f4b; /* Adjust the height and color as needed */
    border-left: 10rem solid transparent;
    border-right: 10rem solid transparent;
    width: 65rem; /* Adjust the width as needed */
    z-index: 0;
  }
  .trapezoid-3{
    position: absolute;

    left:-6rem;
    bottom: .5rem;
    border-top: 50px solid transparent;
    border-bottom: 35rem solid #2c2a28; /* Adjust the height and color as needed */
    border-left: 6rem solid transparent;
    border-right: 6rem solid transparent;
    height: 5rem;
    width: 16rem; /* Adjust the width as needed */
    z-index: -1;
    border-radius: 2rem;
  }
  .trapezoid-4{
    position: absolute;

    right:-6rem;
    bottom: .5rem;
    border-top: 50px solid transparent;
    border-bottom: 35rem solid #2c2a28; /* Adjust the height and color as needed */
    border-left: 6rem solid transparent;
    border-right: 6rem solid transparent;
    height: 5rem;
    width: 16rem; /* Adjust the width as needed */
    z-index: -1;
    border-radius: 2rem;
  }
  .trapezoid-5 {
  position: absolute;
  bottom: -10.5rem;
    border-radius: .25rem;
    border-bottom: 6rem solid #252422; /* Adjust the height and color as needed */
      width: 79.5rem; /* Adjust the width as needed */
    z-index: -2;
  }
#crt:before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
        to bottom,
        rgba(18, 16, 16, 0) 50%,
        rgba(0, 0, 0, 0.25) 50%
    );
    background-size: 100% 4px;
    z-index: 2;
    pointer-events: none;
}
#crt::after {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(18, 16, 16, 0.1);
  opacity: 0;
  z-index: 2;
  pointer-events: none;
  animation: flicker 0.15s infinite;
}
#crt {
  animation: textShadow 2s infinite;
  
}

@keyframes textShadow {
  0% {
    text-shadow: 0.4389924193300864px 0 1px rgba(0,30,255,0.5), -0.4389924193300864px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  5% {
    text-shadow: 2.7928974010788217px 0 1px rgba(0,30,255,0.5), -2.7928974010788217px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  10% {
    text-shadow: 0.02956275843481219px 0 1px rgba(0,30,255,0.5), -0.02956275843481219px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  15% {
    text-shadow: 0.40218538552878136px 0 1px rgba(0,30,255,0.5), -0.40218538552878136px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  20% {
    text-shadow: 3.4794037899852017px 0 1px rgba(0,30,255,0.5), -3.4794037899852017px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  25% {
    text-shadow: 1.6125630401149584px 0 1px rgba(0,30,255,0.5), -1.6125630401149584px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  30% {
    text-shadow: 0.7015590085143956px 0 1px rgba(0,30,255,0.5), -0.7015590085143956px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  35% {
    text-shadow: 3.896914047650351px 0 1px rgba(0,30,255,0.5), -3.896914047650351px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  40% {
    text-shadow: 3.870905614848819px 0 1px rgba(0,30,255,0.5), -3.870905614848819px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  45% {
    text-shadow: 2.231056963361899px 0 1px rgba(0,30,255,0.5), -2.231056963361899px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  50% {
    text-shadow: 0.08084290417898504px 0 1px rgba(0,30,255,0.5), -0.08084290417898504px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  55% {
    text-shadow: 2.3758461067427543px 0 1px rgba(0,30,255,0.5), -2.3758461067427543px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  60% {
    text-shadow: 2.202193051050636px 0 1px rgba(0,30,255,0.5), -2.202193051050636px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  65% {
    text-shadow: 2.8638780614874975px 0 1px rgba(0,30,255,0.5), -2.8638780614874975px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  70% {
    text-shadow: 0.48874025155497314px 0 1px rgba(0,30,255,0.5), -0.48874025155497314px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  75% {
    text-shadow: 1.8948491305757957px 0 1px rgba(0,30,255,0.5), -1.8948491305757957px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  80% {
    text-shadow: 0.0833037308038857px 0 1px rgba(0,30,255,0.5), -0.0833037308038857px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  85% {
    text-shadow: 0.09769827255241735px 0 1px rgba(0,30,255,0.5), -0.09769827255241735px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  90% {
    text-shadow: 3.443339761481782px 0 1px rgba(0,30,255,0.5), -3.443339761481782px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  95% {
    text-shadow: 2.1841838852799786px 0 1px rgba(0,30,255,0.5), -2.1841838852799786px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
  100% {
    text-shadow: 2.6208764473832513px 0 1px rgba(0,30,255,0.5), -2.6208764473832513px 0 1px rgba(255,0,80,0.3), 0 0 3px;
  }
}
@keyframes flicker {
  0% {
  opacity: 0.27861;
  }
  5% {
  opacity: 0.34769;
  }
  10% {
  opacity: 0.23604;
  }
  15% {
  opacity: 0.90626;
  }
  20% {
  opacity: 0.18128;
  }
  25% {
  opacity: 0.83891;
  }
  30% {
  opacity: 0.65583;
  }
  35% {
  opacity: 0.67807;
  }
  40% {
  opacity: 0.26559;
  }
  45% {
  opacity: 0.84693;
  }
  50% {
  opacity: 0.96019;
  }
  55% {
  opacity: 0.08594;
  }
  60% {
  opacity: 0.20313;
  }
  65% {
  opacity: 0.71988;
  }
  70% {
  opacity: 0.53455;
  }
  75% {
  opacity: 0.37288;
  }
  80% {
  opacity: 0.71428;
  }
  85% {
  opacity: 0.70419;
  }
  90% {
  opacity: 0.7003;
  }
  95% {
  opacity: 0.36108;
  }
  100% {
  opacity: 0.24387;
  }
}


.scanline {
    width: 100%;
    height: 100px;
    z-index: 8;
    padding: 3rem;
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(255, 255, 255, 0.2) 10%,
        rgba(0, 0, 0, 0.1) 100%
    );
    opacity: 0.1;
    position: absolute;
    bottom: 100%;
    animation: scanline 10s linear infinite;
    
}
@keyframes scanline {
    0% {
        bottom: 100%;
    }
    80% {
        bottom: 100%;
    }
    100% {
        bottom: 0%;
    }
}
#screen {
    position: relative;
    width: 100%;
    height: 30rem;
    padding: .25rem;
    border-radius: 20px; /* Adjust the border-radius to control the bevel effect */
    background-color: #254425; /* Background color of the screen */
    overflow: hidden; /* Hide content outside the border */
    box-shadow: 0 0 30px 10px #56ae5672; /* Set the box-shadow for the glowing effect */
    animation: glow 4s infinite alternate;
    animation: turnOn 2s forwards;
    z-index: 1;
    
}
.screen-wrap{
  border: 10px solid #333; /* Border color for the beveled edge */
  width: 100%;
  height: 32rem;
  position: relative;
    width: 100%;
    margin-bottom: 5rem;
    border-radius: .5rem; 
  z-index: 0;

}
#monitor{
    margin: 1rem auto;
	padding: 3vmin;
	width: 60rem;
  max-height: 90vh;
  height: 40rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #2c2a28;
	border-radius: 0.5rem;
    font-family: terminal;
    position: relative;
    z-index: 1;
}

@keyframes turnOn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 1;
  }
}
</style>