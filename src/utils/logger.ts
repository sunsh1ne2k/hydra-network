import { createLogger, transports, format } from 'winston';
import config from 'config';

const customFormat = format.combine(
    format.splat(),
    // format.colorize(),

    format.timestamp(),
    format.printf(({ timestamp, level, message, ...metadata }) => {
        let msg = `[${timestamp}] ${level.toUpperCase()}: ${message} `;
        if (metadata) {
            msg += JSON.stringify(metadata);
        }
        return msg;
    })
);

const logger = createLogger({
    exitOnError: false,
    format: customFormat,
    defaultMeta: { service: 'nashtranet-service' },
    transports: [
        /**
         * - Write all logs with importance level of `error` or less to `app.error.log`
         * - Write all logs with importance level of `info` or less to `app.combined.log`
         */
        new transports.File({ filename: 'app.error.log', level: 'error' }),
        new transports.File({ filename: 'app.combined.log' }),
    ],
});

/**
 * If we're not in production then log to the `console` with the format:
 * `${info.level}: @{info.message} JSON.stringtify{...rest}
 */
if (process.env.NODE_ENV !== 'production') {
    logger.add(
        new transports.Console({
            // format: format.simple(),
            format: customFormat,
        })
    );
}

export default logger;
