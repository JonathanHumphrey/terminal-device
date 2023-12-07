<script setup>
import ScreenContent from './ScreenContent.vue';
import Header from './Header.vue'

</script>

<template>
    <div id="monitor">
        <div id="screen">
            <Header />
            <div id="crt">
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
        <div class="trapezoid"></div>
        <div class="trapezoid-2">
          <div class="keyboard-base">
        <div class="key">~</div>
        <div class="key">1</div>
        <div class="key">2</div>
        <div class="key">3</div>
        <div class="key">4</div>
        <div class="key">5</div>
        <div class="key">6</div>
        <div class="key">7</div>
        <div class="key">8</div>
        <div class="key">9</div>
        <div class="key">0</div>
        <div class="key">-</div>
        <div class="key">+</div>
        <div class="key delete">Delete</div>
        <div class="key tab">Tab</div>
        <div class="key">Q</div>
        <div class="key">W</div>
        <div class="key">E</div>
        <div class="key">R</div>
        <div class="key">T</div>
        <div class="key">Y</div>
        <div class="key">U</div>
        <div class="key">I</div>
        <div class="key">O</div>
        <div class="key">P</div>
        <div class="key">[</div>
        <div class="key">]</div>
        <div class="key backslash">\</div>
        <div class="key capslock">CapsLock</div>
        <div class="key">A</div>
        <div class="key">S</div>
        <div class="key">D</div>
        <div class="key">F</div>
        <div class="key">G</div>
        <div class="key">H</div>
        <div class="key">J</div>
        <div class="key">K</div>
        <div class="key">L</div>
        <div class="key">;</div>
        <div class="key">'</div>
        <div class="key return">Return</div>
        <div class="key leftshift">Shift</div>
        <div class="key">Z</div>
        <div class="key">X</div>
        <div class="key">C</div>
        <div class="key">V</div>
        <div class="key">B</div>
        <div class="key">N</div>
        <div class="key">M</div>
        <div class="key">,</div>
        <div class="key">.</div>
        <div class="key">/</div>
        <div class="key rightshift">Shift</div>
        <div class="key leftctrl">Ctrl</div>
        <div class="key">Alt</div>
        <div class="key command">Command</div>
        <div class="key space">Space</div>
        <div class="key command">command</div>
        <div class="key">Alt</div>
        <div class="key">Ctrl</div>
        <div class="key">Fn</div>
    </div>
        </div>
        <div class="trapezoid-3"></div>
        <div class="trapezoid-4"></div>
        <div class="trapezoid-5"></div>


    </div>
</template>

<style scoped>
.keyboard-base {
  width: 50rem;
    padding: 10px;
    position: absolute;
    bottom: -19rem;
    left: 50%;
    transform: translate(-50%, -50%) perspective(800px) rotateX(45deg); /* Adjust the perspective and rotation as needed */
    background-color: rgb(197, 197, 197);
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(30, 25px);
    grid-template-rows: repeat(5, 40px);
    grid-gap: 1px;
}



.key {
    background-color: rgb(142, 139, 139);
    border: 2px solid black;
    border-radius: 5px;
    grid-column: span 2;
    font-size: 15px;
    text-align: center;
    padding-top: 17px;
}

.key:hover {
  border: 1px solid #eeeeee;
  cursor: pointer;
}

.delete {
    grid-column: span 4;
}

.tab {
    grid-column: span 3;
}

.backslash {
    grid-column: span 3;
}

.capslock {
    grid-column: span 4;
}

.return {
    grid-column: span 4;
}

.leftshift {
    grid-column: span 5;
}

.rightshift {
    grid-column: span 5;
}

.leftctrl {
    grid-column: span 3;
}

.command {
    grid-column: span 3;
    font-size: 14px;
}

.space {
    grid-column: span 13;
}
.trapezoid {
  position: absolute;
  bottom: -5rem;
    border-top: 50px solid transparent;
    border-radius: .25rem;
    border-bottom: 10rem solid #2c2a28; /* Adjust the height and color as needed */
    border-left: 5rem solid transparent;
    border-right: 5rem solid transparent;
    height: 30rem;
    width: 80rem; /* Adjust the width as needed */
  }
  .trapezoid-2{
    position: absolute;
    bottom: -5rem;
    border-radius: 4rem;
    border-top: 50px solid transparent;
    border-bottom: 11rem solid #534f4b; /* Adjust the height and color as needed */
    border-left: 5rem solid transparent;
    border-right: 5rem solid transparent;
    height: 20rem;
    width: 65rem; /* Adjust the width as needed */
  }
  .trapezoid-3{
    position: absolute;

    left:-6rem;
    bottom: .5rem;
    border-top: 50px solid transparent;
    border-bottom: 40rem solid #2c2a28; /* Adjust the height and color as needed */
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
    border-bottom: 40rem solid #2c2a28; /* Adjust the height and color as needed */
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
    height: 67.5vmin;
    padding: 2rem;
    margin-bottom: 5rem;
    border: 10px solid #333; /* Border color for the beveled edge */
    border-radius: 20px; /* Adjust the border-radius to control the bevel effect */
    background-color: #254425; /* Background color of the screen */
    overflow: hidden; /* Hide content outside the border */
}
#monitor{
    margin: 1rem auto;
	padding: 3vmin;
	width: 60rem;
  max-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	background: #2c2a28;
	border-radius: 0.5rem;
    font-family: terminal;
    position: relative;
}
</style>