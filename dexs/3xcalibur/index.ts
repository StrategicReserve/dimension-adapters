import { SimpleAdapter } from "../../adapters/types";
import { getStartTimestamp } from "../../helpers/getStartTimestamp";
import { DEFAULT_DAILY_VOLUME_FIELD, DEFAULT_TOTAL_VOLUME_FIELD, getChainVolume } from "../../helpers/getUniSubgraphVolume";
import { CHAIN } from "../../helpers/chains";

const endpoints = {
  [CHAIN.ARBITRUM]: `https://gateway-arbitrum.network.thegraph.com/api/${process.env.GRAPH_PROTOCOL}/subgraphs/id/J9xPBr2XdBxWvLi2HSiz8hW76HUU91WQ9ztkicCRccDS`,
};

const graphs = getChainVolume({
  graphUrls: endpoints,
  totalVolume: {
    factory: "swapFactories",
    field: DEFAULT_TOTAL_VOLUME_FIELD,
  },
  dailyVolume: {
    factory: "uniswapDayData",
    field: DEFAULT_DAILY_VOLUME_FIELD,
  },
});

const adapter: SimpleAdapter = {
  version: 2,
  adapter: {
    [CHAIN.ARBITRUM]: {
      fetch: graphs(CHAIN.ARBITRUM),
      start: getStartTimestamp({
        endpoints: endpoints,
        chain: CHAIN.ARBITRUM,
        volumeField: DEFAULT_DAILY_VOLUME_FIELD,
        dailyDataField: "uniswapDayDatas",
      }),
    },
  },
};

export default adapter;
