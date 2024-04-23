class TreeNode {
    constructor(data) {
      this.data = data;
      this.children = [];
    }
    addChild(child) {
      if (child instanceof TreeNode) {
        this.children.push(child);
      } else {
      this.children.push(new TreeNode(child))
      }
    }
  };

  const tree = new TreeNode(1);

  tree.addChild(15)

  tree.addChild(30)
  
  console.log(tree);