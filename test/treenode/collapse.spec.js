const expect = require('chai').expect;
const InspireTree = require('../../' + (process.env.DIST ? 'dist' : 'build') + '/inspire-tree');

describe('TreeNode.prototype.collapse', function() {
    let tree;

    before(function() {
        // Create tree
        tree = new InspireTree({
            data: [{
                text: 'A',
                id: 1,
                children: [{
                    text: 'AA'
                }]
            }, {
                text: 'B',
                id: 2,
                itree: {
                    state: {
                        collapsed: false
                    }
                }
            }]
        });
    });

    it('exists', function() {
        expect(tree.node(1).collapse).to.be.a('function');
    });

    it('collapses children', function() {
        const node = tree.node(1);

        node.expand();
        expect(node.collapsed()).to.be.false;

        node.collapse();
        expect(node.collapsed()).to.be.true;
    });

    it('allows collapse when children empty', function() {
        const node = tree.node(2);

        node.collapse();
        expect(node.collapsed()).to.be.true;
    });
});
