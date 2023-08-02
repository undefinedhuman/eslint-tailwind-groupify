const { RuleTester } = require("eslint");
const sort = require("../sort");

const ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
    },
    parser: require.resolve('vue-eslint-parser'),
});

ruleTester.run(
    "sort",
    sort,
    {
        valid: [{
            code: '<template><div class="a b" attr="test"></div></template>'
        }],
        invalid: []
        // invalid: [{
        //     code: '<template><div class="text-red-500 text-blue-500" attr="test"></div></template>',
        //     output: '<template><div class="text-red-500 text-blue-500" attr="test"></div></template>',
        //     errors: 1,
        // }],
    }
);

console.log("All tests passed!");