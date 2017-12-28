import svd from 'simple-virtual-dom';

var el = svd.el;
var diff = svd.diff;
var patch = svd.patch;

var tree = el(
  'div', { 'id': 'container' }, 
  [
    el('h1', { style: 'color: blue' }, [ 'simple virtal dom' ]),
    el('p', [ 'Hello, virtual-dom' ]),
    el('ul', [ el('li', null, [ 'hahah' ]) ])
  ]);


var root = tree.render();

setTimeout(() => {
  var newTree = el(
    'div', { 'id': 'container' }, 
    [
      el('h1', { style: 'color: red' }, [ 'simple virtal dom' ]),
      el('p', [ 'Hello, virtual-dom' ]),
      el('ul', [ el('li', null, [ 'hahah' ]), el('li') ])
    ]);
    
    
  var patches = diff(tree, newTree);
  
  console.log('patches:', patches);
  
  patch(root, patches);

  console.log('change', root);

}, 5000);

export default root;