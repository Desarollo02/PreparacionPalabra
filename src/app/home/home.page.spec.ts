import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { BinarySearchTree } from '../models/binarySearchTree';
import { Lectura } from '../models/lectura';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;
  let bst: BinarySearchTree;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    bst = new BinarySearchTree()
  });

  it('Junta 1-15 con 5-10', () => {
    const l = new Lectura('Jn', 1, 1, 15)
    bst.insert(l)
    if (bst.root !== null){
      expect(bst.root.value).toEqual(l)
    }
  })

  it('Junta 1-5 con 5-10', () => {
    const l = new Lectura('Jn', 1, 1, 5)
    bst.insert(l)
    const final = new Lectura('Jn', 1, 1, 10)
    if (bst.root !== null){
      expect(bst.root.value).toEqual(final)
    }
  })

  it('Junta 1-8 con 5-10', () => {
    const l = new Lectura('Jn', 1, 1, 8)
    bst.insert(l)
    const final = new Lectura('Jn', 1, 1, 10)
    if (bst.root !== null){
      expect(bst.root.value).toEqual(final)
    }
  })

  it('Junta 1-3 con 5-10', () => {
    const l = new Lectura('Jn', 1, 1, 3)
    bst.insert(l)
    const final = new Lectura('Jn', 1, 1, 10)
    if (bst.root !== null){
      expect(bst.root.value).toEqual(final)
    }
  })

  it('Junta 10-12 con 5-10', () => {
    const l = new Lectura('Jn', 1, 10, 12)
    bst.insert(l)
    const final = new Lectura('Jn', 1, 5, 12)
    if (bst.root !== null){
      expect(bst.root.value).toEqual(final)
    }
  })

  it('Junta 11-13 con 5-10', () => {
    const l = new Lectura('Jn', 1, 11, 13)
    bst.insert(l)
    const final = new Lectura('Jn', 1, 5, 13)
    if (bst.root !== null){
      expect(bst.root.value).toEqual(final)
    }
  })

  it('Junta 7-24 con 5-10', () => {
    const l = new Lectura('Jn', 1, 14, 24)
    bst.insert(l)
    const final = new Lectura('Jn', 1, 5, 24)
    if (bst.root !== null){
      expect(bst.root.value).toEqual(final)
    }
  })

  it('Junta 14-24 con 5-10', () => {
    const l = new Lectura('Jn', 1, 14, 24)
    bst.insert(l)
    const final = new Lectura('Jn', 1, 5, 24)
    if (bst.root !== null){
      expect(bst.root.value).toEqual(final)
    }
  })

  it('No junta 18-30 con 5-10', () => {
    const l = new Lectura('Jn', 1, 18, 30)
    bst.insert(l)
    const final = new Lectura('Jn', 1, 5, 10)
    if (bst.root !== null){
      expect(bst.root.value).toEqual(final)
    }
    expect(bst.size()).toEqual(2)
  })

  it('No añade 7-8 con 5-10', () => {
    const l = new Lectura('Jn', 1, 7, 8)
    bst.insert(l)
    const final = new Lectura('Jn', 1, 5, 10)
    if (bst.root !== null){
      expect(bst.root.value).toEqual(final)
    }
    expect(bst.size()).toEqual(1)
  })

  it('No junta si el libro es distinto', () => {
    const l = new Lectura('Lc', 1, 5, 8)
    bst.insert(l)
    const final = new Lectura('Jn', 1, 5, 10)
    if (bst.root !== null){
      expect(bst.root.value).toEqual(final)
    }
    expect(bst.size()).toEqual(2)
  })

  it('No junta si el capitulo es distinto', () => {
    const l = new Lectura('Jn', 2, 5, 8)
    bst.insert(l)
    const final = new Lectura('Jn', 1, 5, 10)
    if (bst.root !== null){
      expect(bst.root.value).toEqual(final)
    }
    expect(bst.size()).toEqual(2)
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
