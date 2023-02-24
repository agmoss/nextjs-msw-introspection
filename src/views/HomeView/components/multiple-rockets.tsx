import { match, useQueryRd } from "use-query-rd";
import React from "react";
import { gql } from "@apollo/client";

import { Launch, Launchpad } from "../../../graphql/types";
import { map2 } from "../../../_rd";

const ROCKETS_QUERY = gql`
  query rockets($limit: Int!) {
    launchesPast(limit: $limit) {
      launch_site {
        site_name_long
      }
      rocket {
        rocket_name
      }
    }
  }
`;

const LAUNCHPADS_QUERY = gql`
  query launchpads {
        launchpads {
            details
        }
   }
`
export const Multiple = () => {

    const RD1 =  useQueryRd<{ launchesPast: Launch[] }>(ROCKETS_QUERY, {
        variables: { limit: 100 },
      })._rd

    const RD2 = useQueryRd<{ launchpads: Launchpad[] }>(LAUNCHPADS_QUERY)._rd

    const comb = (rd1: {launchesPast: Launch[];}) => (rd2: { launchpads: Launchpad[] } ) => {
        return {
            one: rd1,
            two: rd2
        }
    }

    const FF = map2(comb, RD1,RD2)

    return match(
        FF,
        {
          _: () => <p>Loading...</p>,
          Failure: (error) => <p>Error while fetching data ({error.message})</p>,
          Success: (data) => {
            return (
              <>
                <p>map2</p>
                {JSON.stringify(data)}
              </>
            );
          },
        }
      );
    
}


