import { type ApiCall } from '../interfaces/services.type';
import { API_TIMEOUT } from '../constants/api-timeout';
import { Logger } from '@nestjs/common';

export const callMultipleAPIs = async (
  query: string,
  apiList: ApiCall[],
  timeout: number = API_TIMEOUT,
) => {
  const results = await Promise.all(
    apiList.map(async ({ name, service }) => {
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(() => reject(new Error(`${name} API timed out`)), timeout),
      );
      try {
        const result = await Promise.race([
          service.search(query),
          timeoutPromise,
        ]);
        return result;
      } catch (error) {
        Logger.error(
          `Error calling ${name} API:`,
          error instanceof Error ? error.message : String(error),
        );
        return [];
      }
    }),
  );
  return results;
};
