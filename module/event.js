let Event = require("events");

class Logger extends Event {
  log(a, b) {
    this.emit("calc", a + b);
  }
}

let logger = new Logger();

logger.on("calc", (data) => {
  console.log(data);
});

logger.log(12, 1);
logger.log(12, 11);
logger.log(12, 2);
logger.log(12, 3);
