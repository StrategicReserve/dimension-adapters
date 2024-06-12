import { CHAIN } from "../../helpers/chains";
import { univ2Adapter } from "../../helpers/getUniSubgraphVolume";

export default univ2Adapter({
  [CHAIN.POLYGON]: `https://gateway-arbitrum.network.thegraph.com/api/${process.env.GRAPH_PROTOCOL}/subgraphs/id/GcokW8RfC9YJeZF4CPoLUwJwZRcQ8kbDR7WziCMus7LF`
}, {
});
