import { APIGatewayProxyEvent, Context, Handler } from 'aws-lambda';
import AWSXRay from 'aws-xray-sdk';
import routes from './routes';
import lambdaTimeout from './utils/lambdaTimeout';

export const handler: Handler = async (
  event: APIGatewayProxyEvent,
  context: Context,
) => {
  const path =
    // path can either be the last part of the path or the routeKey
    // depending on whether the function is executed from aws or a http call comes thru from the http gateway
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    event.requestContext?.path?.split('/').pop() ??
    // @ts-expect-error route key is not defined in the typings
    event.routeKey ??
    // @ts-expect-error rawPath is not defined in the typings
    event.rawPath;

  AWSXRay.enableAutomaticMode();

  try {
    return await Promise.race([routes(path), lambdaTimeout(context)]).then(
      value => value,
    );
  } catch (e) {
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: `lambda errored with error ${e}` }),
    };
  }
};
