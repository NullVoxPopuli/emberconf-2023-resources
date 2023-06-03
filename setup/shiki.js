import { defineShikiSetup } from '@slidev/types'

export default defineShikiSetup(() => {
  return {
    // theme: {
    //   dark: 'min-dark',
    //   light: 'min-light',
    // },
    langs: [
      // This doesn't work, and I don't know why.
      // When I add a gjs tag to a code block, I get an error saying language not found
      //  https://sli.dev/custom/highlighters.html#configure-shiki
      {
        id: 'gjs',
        scopeName: 'source.glimmer-js',
        path: require.resolve('vscode-glimmer/syntaxes/glimmer-js.json'), 
        aliases: ['glimmer-js', 'gjs']
      },
      {
        id: 'gts',
        scopeName: 'source.glimmer-ts',
        path: require.resolve('vscode-glimmer/syntaxes/glimmer-ts.json'),
        aliases: ['glimmer-ts', 'gts']
      },
    ],
  }
})
