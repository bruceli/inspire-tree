const expect = require('chai').expect;
const InspireTree = require('../../' + (process.env.DIST ? 'dist' : 'build') + '/inspire-tree');

describe('Tree.canAutoDeselect', function() {
    let tree;

    before(function() {
        // Create tree
        tree = new InspireTree({
            selection: {
                autoDeselect: false
            },
            data: [{
                text: 'A',
                id: 1
            }, {
                text: 'B',
                id: 2
            }]
        });
    });

    it('exists', function() {
        expect(tree.canAutoDeselect).to.be.a('function');
    });

    it('returns configured value', function() {
        expect(tree.canAutoDeselect()).to.be.false;

        tree.config.selection.autoDeselect = true;
        expect(tree.canAutoDeselect()).to.be.true;
    });
});
