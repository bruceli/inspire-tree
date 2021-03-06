const expect = require('chai').expect;
const InspireTree = require('../../' + (process.env.DIST ? 'dist' : 'build') + '/inspire-tree');

describe('TreeNodes.prototype.invokeDeep', function() {
    let tree;

    before(function() {
        // Create tree
        tree = new InspireTree({
            selection: {
                autoDeselect: false,
                multiple: true
            },
            data: [{
                text: 'A',
                id: 1,
                children: [{
                    text: 'AA',
                    id: 2,
                    children: [{
                        text: 'AAA',
                        id: 3
                    }]
                }]
            }, {
                text: 'B'
            }]
        });
    });

    it('exists', function() {
        expect(tree.nodes().invokeDeep).to.be.a('function');
        expect(tree.invokeDeep).to.be.a('function');
    });

    it('invokes method deeply', function() {
        tree.invokeDeep('select');

        expect(tree.selected()).to.have.length(4);
    });

    it('invokes method deeply with an array of arguments', function() {
        tree.invokeDeep('state', ['selected', false]);

        expect(tree.selected()).to.have.length(0);
    });

    it('invokes method deeply with a single non-array argument', function() {
        tree.invokeDeep('set', 'fake');

        expect('fake' in tree.node(1)).to.be.true;
        expect('fake' in tree.node(3)).to.be.true;
    });

    it('invokes method deeply with spread arguments', function() {
        tree.deselectDeep();
        tree.invokeDeep('state', 'selected', true);

        expect(tree.selected()).to.have.length(4);
    });

    it('invokes multiple methods on each node', function() {
        tree.invokeDeep(['deselect', 'expand']);

        expect(tree.selected()).to.have.length(0);
        expect(tree.expanded()).to.have.length(2);
    });
});
