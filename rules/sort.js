function getIndexInSortOrder(order, key) {
  const index = order.find(value => key.startsWith(value))
  if(index === undefined) return -1;
  return index;
}

module.exports = {
  name: 'sort',
  meta: {
    docs: {
      description: 'Sorting CSS classes in HTML elements inside a Vue.js file.',
    },
    fixable: "code",
    type: 'suggestion',
  },
  create (context) {

    if (context.parserServices.defineTemplateBodyVisitor == null) {
      context.report({
        loc: { line: 1, column: 0 },
        message: 'Use the latest vue-eslint-parser. See also https://github.com/vuejs/eslint-plugin-vue#what-is-the-use-the-latest-vue-eslint-parser-error'
      })
      return {}
    }

    return context.parserServices.defineTemplateBodyVisitor({
      'VAttribute[key.name="class"]'(node) {
        const sortOrder = context.options[0].sortOrder ? context.options[0].sortOrder : [];
        const order = context.options[0].order ? context.options[0].order : "asc";

        const originalValue = node.value.value;
        const cleanedValue = originalValue.replace(/\s+/g,' ').trim();
        const classesArray = cleanedValue.split(' ');

        const sortedClasses = classesArray.sort((a, b) => {
          const indexA = getIndexInSortOrder(a);
          const indexB = getIndexInSortOrder(b);
          if (order === 'asc') {
            return getIndexInSortOrder(a).localeCompare(getIndexInSortOrder(b));
          } else if (order === 'desc') {
            return getIndexInSortOrder(b).localeCompare(getIndexInSortOrder(a));
          }
        })

        const sortedValue = sortedClasses.join(' ')

        if(sortedValue === originalValue)
          return;

        context.report({
          node: node.value,
          message: 'CSS classes are not sorted',
          fix: (fixer) => fixer.replaceText(node.value, `\"${sortedValue}\"`)
        })
      }
    })
  }
}