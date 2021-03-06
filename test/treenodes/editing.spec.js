const expect = require('chai').expect;
const InspireTree = require('../../' + (process.env.DIST ? 'dist' : 'build') + '/inspire-tree');

describe('TreeNodes.prototype.editing', function() {
    let tree;

    before(function() {
        // Create tree
        tree = new InspireTree({
            editable: true,
            data: [{
                text: 'A',
                id: 1,
                children: [{
                    text: 'B'
                }]
            }]
        });
    });

    it('exists', function() {
        expect(tree.nodes().editing).to.be.a('function');
        expect(tree.editing).to.be.a('function');
    });

    it('returns nodes in edit mode', function() {
        expect(tree.editing()).to.have.length(0);

        tree.node(1).state('editing', true);
        expect(tree.editing()).to.have.length(1);
    });
});
