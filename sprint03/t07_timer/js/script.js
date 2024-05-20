class Timer {
  constructor(title, delay, stopCount) {
    this.title = title;
    this.delay = delay;
    this.stopCount = stopCount;
  }

  start() {
    console.log(
      `Timer ${this.title} started (delay=${this.delay}, stopCount=${this.stopCount})`
    );
    this.cyclesLeft = this.stopCount;
    this.intervalId = setInterval(() => {
      this.tick();
    }, this.delay);
  }

  tick() {
    console.log(`Timer ${this.title} Tick! | cycles left ${--this.cyclesLeft}`);
    if (this.cyclesLeft === 0) {
      this.stop();
    }
  }

  stop() {
    clearInterval(this.intervalId);
    console.log(`Timer ${this.title} stopped`);
  }
}

function runTimer(id, delay, counter) {
  const timer = new Timer(id, delay, counter);
  timer.start();
}

