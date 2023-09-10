import { Lectura } from '../models/lectura';

export class TreeNode {
    constructor(public value: Lectura, public left: TreeNode | null = null, public right: TreeNode | null = null) {}
}