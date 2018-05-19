const produceDrivingRange = function(maxRange) {
  return function(startLocation, endLocation) {
    const start = parseInt(startLocation);
    const end = parseInt(endLocation);
    const blockRange = Math.abs(parseInt(start-end));

    if (blockRange > maxRange) {
      return `${blockRange-maxRange} blocks out of range`;
    } else {
      return `within range by ${maxRange-blockRange}`;
    }
  }
}

function produceTipCalculator(rate) {
  return function(fare) {
    return fare * rate;
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name) {
      this.name = name;
      this.id = ++driverId;
    }
  }
}
