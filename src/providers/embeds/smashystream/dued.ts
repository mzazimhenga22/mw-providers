import { makeEmbed } from '@/providers/base';

import { smashyStreamFScraper } from './video1';

export const smashyStreamDScraper = makeEmbed({
  id: 'smashystream-d',
  name: 'SmashyStream (D)',
  rank: 72,
  async scrape(ctx) {
    const result = await smashyStreamFScraper.scrape(ctx);
    return {
      stream: result.stream,
    };
  },
});
