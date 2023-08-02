module.exports = {
    meta: {
        type: "suggestion",
        docs: {
            description: "Sort CSS classes",
            category: "Stylistic",
            recommended: true
        },
        fixable: "code"
    },
    create(context) {
        return {
            // Performs action in the function on every variable declarator
            VariableDeclarator(node) {

                // Check if a `const` variable declaration
                if (node.parent.kind === "class") {
                    context.report({
                        node,
                        message: 'class found',
                        data: {
                            notBar: node.init.value
                        },
                        // fix(fixer) {
                        //     return fixer.replaceText(node.init, '"bar"');
                        // }
                    });
                }
            }
        };
    }
};