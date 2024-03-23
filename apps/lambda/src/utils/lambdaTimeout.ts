import { Context } from 'aws-lambda';
import LambdaError from './lambdaError';

const lambdaTimeout = (context: Context) => {
  return new Promise((_res, rej) => {
    setTimeout(() => {
      rej(
        new LambdaError({
          message: 'Lambda function timed out',
          httpResponseCode: 408,
          code: 'LambdaTimeout',
        }),
      );
    }, context.getRemainingTimeInMillis() - 1000);
  });
};
export default lambdaTimeout;
