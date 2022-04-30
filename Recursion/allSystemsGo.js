/* You are working for NASA because you are super cool! It's up to you to write the code that will determine if "all systems are go for launch". Your function will receive a deeply nested object. The keys of the object represent the names of the systems on the spacecraft; the values are true if the system is "go" for launch and false otherwise. Your function should return true only if every system is "go" for launch!

systems = {
  power: {
    batteries: true,
    solarCells: true,
    generator: true,
    fuelCells: true
  },
  telecoms: {
    antennas: {
      highGain: true,
      mediumGain: true,
      lowGain: true
    },
    transmitter: true,
    receiver: true
  },
  attitudeControl: {
    stabilization: {
      spin: true,
      threeAxis: true
    }
  },
  propulsion: {
    engines: {
      engine1: true,
      engine2: true,
      engine3: false
    },
    thrusters: true,
    propellant: true
  },
  environment: {
    cooling: true,
    heating: true,
    lifeSupport: true
  }
};

allSystemsGo(systems); // => false
 */

// every value has to be true in order for it to become GO
// if any value is false, no go
function allSystemsGo (systemsObj, shouldGo = true) {
    for (const value of Object.values(systemsObj)) {
      // if value is object, keep digging
      if (typeof value === "object") {
        shouldGo = allSystemsGo(value, shouldGo);
      } else {
        if (value === false) return !shouldGo;
      }
    }
    return shouldGo;
}

const systems = {
    power: {
      batteries: true,
      solarCells: true,
      generator: true,
      fuelCells: true
    },
    telecoms: {
      antennas: {
        highGain: true,
        mediumGain: true,
        lowGain: true
      },
      transmitter: true,
      receiver: true
    },
    attitudeControl: {
      stabilization: {
        spin: true,
        threeAxis: true
      }
    },
    propulsion: {
      engines: {
        engine1: true,
        engine2: true,
        engine3: false
      },
      thrusters: true,
      propellant: true
    },
    environment: {
      cooling: true,
      heating: true,
      lifeSupport: true
    }
  };
  
const shouldGo = allSystemsGo(systems);
console.log("Should go?", shouldGo); // false