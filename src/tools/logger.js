const winston = require('winston');

const jsonLogs = process.env.LOG_FORMAT === 'json';

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: process.env.LOG_LEVEL,
      handleExceptions: true,
      json: jsonLogs,
      colorize: !jsonLogs,
      timestamp: !jsonLogs,
      humanReadableUnhandledException: true,
      stringify: obj => JSON.stringify(obj),
    }),
  ],
  exitOnError: false,
});

logger.stream = {
  write: message => logger.info(message),
};

if (jsonLogs) {
  logger.rewriters.push((level, message, metadata) =>
    Object.assign(metadata, {
      '@timestamp': new Date().toJSON(),
      level,
    })
  );
}

module.exports = logger;
