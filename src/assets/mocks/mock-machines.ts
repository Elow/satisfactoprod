import { Machine } from '../../app/DTO/machine';

export const ASSETSPATH = '/buildings/';
export const MACHINES: Machine[] = [
  { id: 1, name: 'Miner MK1', image: ASSETSPATH + 'miner_mk1.png', rank: 0 },
  { id: 2, name: 'Miner MK2', image: ASSETSPATH + 'miner_mk2.png', rank: 0 },
  { id: 3, name: 'Smelter', image: ASSETSPATH + 'smelter.png', rank: 1 },
  { id: 4, name: 'Foundry', image: ASSETSPATH + 'smelter.png', rank: 2 },
  { id: 5, name: 'Constructor', image: ASSETSPATH + 'constructor.png', rank: 3 },
  { id: 6, name: 'Assembler', image: ASSETSPATH + 'assembler.png', rank: 4 },
  { id: 7, name: 'Manufacturer', image: ASSETSPATH + 'manufacturer.png', rank: 5 }
];
