export default function (plop) {
    // controller generator
    plop.setGenerator('component', {
        description: 'generates the required files for each component',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'Enter a name for the component please. The component name MUST start with a capital letter.'
        }],
        actions: [
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tsx',
                templateFile: 'plop-templates/Component.tsx.hbs'
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
                templateFile: 'plop-templates/Component.stories.tsx.hbs'
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.styles.tsx',
                templateFile: 'plop-templates/Component.styles.tsx.hbs'
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.tests.tsx',
                templateFile: 'plop-templates/Component.tests.tsx.hbs'
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/{{pascalCase name}}.types.ts',
                templateFile: 'plop-templates/Component.types.ts.hbs'
            },
            {
                type: 'add',
                path: 'src/components/{{pascalCase name}}/index.ts',
                templateFile: 'plop-templates/index.ts.hbs'
            }
        ]
    });
};