module.exports = {
    __depends__: [require('./customReplace/index')],
    __init__: [ 'customRenderer', 'paletteProvider', 'customRules', 'customUpdater', 'CustomContextPadProvider' ],
    elementFactory: [ 'type', require('./CustomElementFactory') ],
    customRenderer: [ 'type', require('./CustomRenderer') ],
    paletteProvider: [ 'type', require('./CustomPalette') ],
    customRules: [ 'type', require('./CustomRules') ],
    customUpdater: [ 'type', require('./CustomUpdater') ],
    CustomContextPadProvider: [ 'type', require('./CustomContextPadProvider') ]
};