import { createLogger, format, transports } from "winston";
import * as path from "path";

const logDir = path.resolve(__dirname, "../../../logs");

const logger = createLogger({
  level: "info",
  format: format.combine(
      format.timestamp(),
      format.errors({ stack: true }),
      format.printf((info) => {
        const { timestamp, level, message, stack } = info;
        return `[${timestamp}] ${level}: ${stack || message}`;
      })
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: path.join(logDir, "error.log"), level: "error" }),
    new transports.File({ filename: path.join(logDir, "combined.log") })
  ]
});

export default logger;