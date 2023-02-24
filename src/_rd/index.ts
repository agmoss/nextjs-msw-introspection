import { failure, initialized, map, match, pending, RemoteData, useQueryRd } from "use-query-rd";

/**
 * TODO: Add to lib
 * @param f 
 * @param rd1 
 * @param rd2 
 * @returns 
 */
export const map2 = <D, D2, D3>(
    f: (d: D) => (d2: D2) => D3,
    rd1: RemoteData< D>,
    rd2: RemoteData< D2>
): RemoteData<D3> =>  andMap(rd2, map(f, rd1));


/**
 * TODO: Add to lib
 * @param rd1 
 * @param rd2 
 * @returns 
 */
export const andMap = <RD1, RD2>(
    rd1: RemoteData<RD1>,
    rd2: RemoteData<(d: RD1) => RD2>
): RemoteData<RD2> =>  match<RemoteData< RD2>, (d: RD1) => RD2>(rd2, {
        Initialized: () => initialized(),
        Pending: () => pending(),
        Success: (f) => map(f, rd1),
        Failure: (e) => failure(e),
    });

