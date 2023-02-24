import { graphql } from "msw";
import { randLines } from '@ngneat/falso';
import { createIntrospectionHandler } from "msw-introspection";
import introspection from "../graphql/introspection.json";

const introspectionHandler = createIntrospectionHandler({String: () => randLines() })(introspection);

export const handlers = [graphql.operation(introspectionHandler)];
