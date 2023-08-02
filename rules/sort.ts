import { ESLintUtils } from '@typescript-eslint/utils';
import * as ts from 'typescript';

export const rule = createRule({
  create(context) {
    return {
      ForOfStatement(node) {
        // 1. Grab the parser services for the rule
        const services = ESLintUtils.getParserServices(context);

        // 2. Find the TS type for the ES node
        const type = services.getTypeAtLocation(node);

        // 3. Check the TS type using the TypeScript APIs
        if (tsutils.isTypeFlagSet(type, ts.TypeFlags.EnumLike)) {
          context.report({
            messageId: 'loopOverEnum',
            node: node.right,
          });
        }
      },
    };
  },
  meta: {
    docs: {
      description: 'Avoid looping over enums.',
    },
    messages: {
      loopOverEnum: 'Do not loop over enums.',
    },
    type: 'suggestion',
    schema: [],
  },
  name: 'no-loop-over-enum',
  defaultOptions: [],
});