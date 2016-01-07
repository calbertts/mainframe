module.exports = {
    __depends__: [require('./customReplace/index')],
    __init__: [ 'customRenderer', 'paletteProvider', 'customRules', 'customUpdater', 'customContextPadProvider' ],
    elementFactory: [ 'type', require('./CustomElementFactory') ],
    customRenderer: [ 'type', require('./CustomRenderer') ],
    paletteProvider: [ 'type', require('./CustomPalette') ],
    customRules: [ 'type', require('./CustomRules') ],
    customUpdater: [ 'type', require('./CustomUpdater') ],
    customContextPadProvider: [ 'type', require('./CustomContextPadProvider') ]
};