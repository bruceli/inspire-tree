const expect = require('chai').expect;
const InspireTree = require('../../' + (process.env.DIST ? 'dist' : 'build') + '/inspire-tree');

describe('Tree.createNode', function() {
    let tree;

    before(function() {
        // Create tree
        tree = new InspireTree({
            data: [{
                text: 'A',
                id: 1
            }]
        });
    });

    it('exists', function() {
        expect(tree.createNode).to.be.a('function');
    });

    it('creates a new node without adding it', function() {
        expect(tree.nodes()).to.have.length(1);

        const node = tree.createNode([{
            text: 'B'
        }]);

        expect(tree.nodes()).to.have.length(1);
        expect(InspireTree.isTreeNode(node)).to.be.true;
    });
});
