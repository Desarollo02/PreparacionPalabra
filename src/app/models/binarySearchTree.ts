import {TreeNode} from '../models/treeNode';
import { Lectura } from '../models/lectura';

export class BinarySearchTree {
    root: TreeNode | null = null;
  
    insert(value: Lectura) {
      this.root = this.insertRecursive(this.root, value);
    }
  
    private insertRecursive(node: TreeNode | null, nuevo: Lectura): TreeNode {
    let modificado = false;
      if (!node) {
        return new TreeNode(nuevo);
      }

      if (node.value.libro == nuevo.libro && node.value.capitulo == nuevo.capitulo){
        if (nuevo.versiculo < node.value.versiculo && nuevo.versiculo2 > node.value.versiculo2){
            node.value = nuevo
            modificado = true;
        }
        else if (nuevo.versiculo > node.value.versiculo && nuevo.versiculo2 < node.value.versiculo2){
            modificado = true;
        }
        else if ((nuevo.versiculo2 > node.value.versiculo - 5 && nuevo.versiculo < node.value.versiculo) ||
                (nuevo.versiculo < node.value.versiculo2 + 5 && nuevo.versiculo2 > node.value.versiculo2)){
            node.value.versiculo = Math.min(node.value.versiculo, nuevo.versiculo)
            node.value.versiculo2 = Math.max(node.value.versiculo2, nuevo.versiculo2)
            modificado = true;
        }
        if (modificado) return node
    }
  
      if (nuevo.toString() < node.value.toString()) {
        node.left = this.insertRecursive(node.left, nuevo);
      } else {
        node.right = this.insertRecursive(node.right, nuevo);
      }
  
      return node;
    }
  
    // Recorrido en orden para obtener elementos ordenados alfabéticamente
    inorderTraversal(node: TreeNode | null, result: string[] = []): string[] {
      if (!node) {
        return result;
      }
  
      this.inorderTraversal(node.left, result);
      result.push(node.value.toString());
      this.inorderTraversal(node.right, result);
  
      return result;
    }

    size(node: TreeNode | null = this.root): number {
        if (!node) {
          return 0;
        }
    
        const leftSize = this.size(node.left);
        const rightSize = this.size(node.right);
    
        return 1 + leftSize + rightSize;
      }
  }
  