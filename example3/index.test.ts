// @ts-nocheck
import { numOfFruits } from './index'; // Adjust the path as needed

describe('numOfFruits', () => {
  // Normal test cases
  it('should return 0 for a grid with no fruits', () => {
    const grid = [
      ['0', '0', '0'],
      ['0', '0', '0'],
      ['0', '0', '0'],
    ];
    expect(numOfFruits(grid)).toBe(0);
  });

  it('should return 1 for a grid with one single fruit cluster', () => {
    const grid = [
      ['0', '0', '0'],
      ['0', '1', '0'],
      ['0', '0', '0'],
    ];
    expect(numOfFruits(grid)).toBe(1);
  });

  it('should return 2 for a grid with two separate fruit clusters', () => {
    const grid = [
      ['1', '0', '1'],
      ['0', '0', '0'],
      ['1', '0', '1'],
    ];
    expect(numOfFruits(grid)).toBe(4);
  });

  // Edge cases
  it('should return 1 for a grid where all cells are fruits', () => {
    const grid = [
      ['1', '1'],
      ['1', '1'],
    ];
    expect(numOfFruits(grid)).toBe(1);
  });

  it('should handle a large grid correctly', () => {
    const grid = Array(100)
      .fill(null)
      .map(() => Array(100).fill('0'));
    grid[0][0] = '1'; // Add one fruit
    expect(numOfFruits(grid)).toBe(1);
  });

  // Invalid input cases
  it('should throw an error for a grid with invalid characters', () => {
    const grid = [
      ['1', '0', 'x'],
      ['0', '1', '0'],
      ['0', '0', '0'],
    ];
    expect(() => numOfFruits(grid)).toThrow('Invalid character in grid');
  });

  it('should throw an error for a non-rectangular grid', () => {
    const grid = [
      ['1', '0'],
      ['0', '1', '0'],
    ];
    expect(() => numOfFruits(grid)).toThrow('Grid must be rectangular');
  });

  it('should handle an empty grid', () => {
    const grid = [];
    expect(numOfFruits(grid)).toBe(0);
  });

  it('should handle a grid with a single cell', () => {
    const grid = [['1']];
    expect(numOfFruits(grid)).toBe(1);
  });
});
