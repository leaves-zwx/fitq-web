import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let statistic = [
      {
        label: "11:23",
        consume: 12,
        produce: 23,
      },
      {
        label: "11:24",
        consume: 33,
        produce: 18,
      },
      {
        label: "11:25",
        consume: 45,
        produce: 67,
      },
      {
        label: "11:26",
        consume: 32,
        produce: 39,
      },
      {
        label: "11:27",
        consume: 27,
        produce: 13,
      },
      {
        label: "11:28",
        consume: 16,
        produce: 8,
      },
      {
        label: "11:29",
        consume: 44,
        produce: 16,
      },
      {
        label: "11:30",
        consume: 25,
        produce: 37,
      },
      {
        label: "11:31",
        consume: 24,
        produce: 24,
      },
      {
        label: "11:32",
        consume: 56,
        produce: 47,
      },
    ];

    let queues = [
      {
        name: "aghdua",
        count: 32,
      },
      {
        name: "Geli",
        count: 12,
      },
      {
        name: "skyinno",
        count: 2,
      },
      {
        name: "timax",
        count: 21,
      },
      {
        name: "buke",
        count: 1,
      },
      {
        name: "yifeng",
        count: 7,
      },
      {
        name: "iphone",
        count: 6,
      },
      {
        name: "bingo",
        count: 8,
      },
      {
        name: "shenmegui",
        count: 13,
      },
      {
        name: "qicmos",
        count: 25,
      },
    ];

    return {queues, statistic};
  }
}
