import { Injectable } from '@nestjs/common';
import { YakabooApiService } from '../search-providers/yakaboo-api/yakaboo-api.service';
import { NashformatApiService } from '../search-providers/nashformat/nashformat-api.service';
import { AprioriApiService } from '../search-providers/apriori/apriori-api.service';
import { VivatApiService } from '../search-providers/vivat/vivat-api.service';
import { StaryLevApiService } from '../search-providers/stary-lev/stary-lev-api.service';
import { MegogoApiService } from '../search-providers/megogo/megogo-api.service';
import { LaboratoryService } from '../search-providers/laboratory/laboratory.service';
import { formatQuery } from '../common/utils/formatQuery';

@Injectable()
export class BooksService {
  constructor(
    private readonly yakabooApiService: YakabooApiService,
    private readonly nashformatApiService: NashformatApiService,
    private readonly aprioriApiService: AprioriApiService,
    private readonly vivatApiService: VivatApiService,
    private readonly staryLevApiService: StaryLevApiService,
    private readonly megogoApiService: MegogoApiService,
    private readonly laboratoryService: LaboratoryService,
  ) {}

  async searchBook(query: string) {
    const formattedQuery = formatQuery(query);
    const startTime = Date.now();

    // Search all APIs with error handling
    const apiCalls = [
      { name: 'Yakaboo', service: this.yakabooApiService },
      { name: 'Nashformat', service: this.nashformatApiService },
      { name: 'Apriori', service: this.aprioriApiService },
      { name: 'Vivat', service: this.vivatApiService },
      { name: 'Stary Lev', service: this.staryLevApiService },
      { name: 'Megogo', service: this.megogoApiService },
      { name: 'Laboratory', service: this.laboratoryService },
    ];

    const results = await Promise.allSettled(
      apiCalls.map(({ service }) => service.search(formattedQuery)),
    );

    const endTime = Date.now();
    console.log(`Time taken: ${endTime - startTime}ms`);

    // Collect results, handling failed APIs gracefully
    return results
      .map((result, index) => {
        if (result.status === 'fulfilled') {
          return result.value;
        } else {
          console.error(`${apiCalls[index].name} API failed:`, result.reason);
          return [];
        }
      })
      .flat();
  }
}
